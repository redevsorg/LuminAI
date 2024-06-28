const express = require('express');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();

router.get('/', async (req, res) => {
  const sessionToken = req.cookies._SESSION_TOKEN;

  if (!sessionToken) {
    return res.status(400).json({ error: 'No session token provided' });
  }

  const usersCollection = db.collection('users');
  const userQuery = await usersCollection.where('sessionToken', '==', sessionToken).get();

  if (userQuery.empty) {
    return res.status(403).json({ error: 'Invalid session token' });
  }

  const userDoc = userQuery.docs[0];
  await userDoc.ref.update({ sessionToken: '' });

  res.cookie('_SESSION_TOKEN', '', { httpOnly: true, expires: new Date(0) });
  return res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = router;
