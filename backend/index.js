const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
// To-DO: Add Helmet

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Firebase admin setup
const serviceAccount = require('./serviceAccountKey');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const db = admin.firestore();

// Generate enrollment link
app.post('/generate-enrollment-link', async (req, res) => {
  const { email } = req.body;
  const token = uuidv4();
  await db.collection('enrollmentTokens').doc(token).set({
    email,
    enrolled: false,
    course: 'AI Innovate Scholars',
    createdAt: new Date(),
  });
  res.send({ link: `https://samgu-nrx.github.io/LuminAI/enroll?token=${token}` });
});

// Import routes
const login = require('./login');
const logout = require('./logout');

// Define routes
app.use('/api/login', login);
app.use('/api/logout', logout);


// More backend routes can be added here...

exports.api = functions.https.onRequest(app);