const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const admin = require('firebase-admin');

const router = express.Router();
const db = admin.firestore();
const saltRounds = 10;
const nameRegex = /^[a-z0-9_]{3,21}$/;

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  if (!nameRegex.test(username)) {
    return res.status(400).json({ error: 'Username can only have English characters, numbers, and must be within 3 and 21 characters.' });
  }

  const usersCollection = db.collection('users');
  const userDoc = await usersCollection.doc(username).get();

  if (!userDoc.exists) {
    // Register new user
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userID = uuidv4();

    const sessionToken = jwt.sign({
      userID: userID,
      date: Date.now(),
    }, process.env.JWT_SECRET);

    await usersCollection.doc(username).set({
      userID: userID,
      username: username,
      password: hashedPassword,
      sessionToken: sessionToken,
      joinedAt: Date.now(),
      mostVisitedSubfeddits: {},
      karma: 0,
      description: 'I haven\'t set a description yet!',
    });

    res.cookie('_SESSION_TOKEN', sessionToken, { httpOnly: true });
    return res.status(200).json({ message: 'User registered successfully' });
  } else {
    // Login existing user
    const userData = userDoc.data();
    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      return res.status(403).json({ error: 'Invalid credentials' });
    }

    const sessionToken = jwt.sign({
      userID: userData.userID,
      date: Date.now(),
    }, process.env.JWT_SECRET);

    res.cookie('_SESSION_TOKEN', sessionToken, { httpOnly: true });

    await usersCollection.doc(username).update({
      sessionToken: sessionToken,
    });

    return res.status(200).json({ message: 'User logged in successfully' });
  }
});

module.exports = router;
