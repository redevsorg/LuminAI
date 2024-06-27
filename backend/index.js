const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Firebase admin setup
const serviceAccount = require('./serviceAccountKey.json');
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

// More backend routes can be added here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
