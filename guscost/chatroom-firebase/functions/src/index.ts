import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Our old friend CORS
const cors = require('cors')({origin: true});

// Set up firebase firestore
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

// Function to handle GET or POST /messages
export const messages = functions.https.onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      const collection = db.collection('messages');
      if (req.method === 'GET') {
        const query = await collection.get(); // .where('text', '==', 'hello')
        return res.send(query.docs.map(doc => doc.data()));
      } else if (req.method === 'POST') {
        await collection.add(req.body);
        return res.sendStatus(200);
      } else {
        return res.sendStatus(405);
      }
    } catch (error) {
      console.log("Error doing something with documents: ", error);
      return res.send(error);
    }
  });
});
