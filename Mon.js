// firebase-admin.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Download from Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project.firebaseio.com"
});

const db = admin.database();
module.exports = { admin, db };