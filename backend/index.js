const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Firebase admin setup
admin.initializeApp();

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

// More backend routes can be added here...

exports.api = functions.https.onRequest(app);
