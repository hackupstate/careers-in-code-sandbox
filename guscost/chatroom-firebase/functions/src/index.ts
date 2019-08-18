import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const messages = functions.https.onRequest(async (req, res) => {
  try {
    const collection = db.collection('messages');
    if (req.method === 'GET') {
      const query = await collection.get(); // .where('text', '==', 'hello')
      return res.send(query.docs);
    } else if (req.method === 'POST') {
      const query = await collection.add(req.body);
      return res.send(query);
    } else {
      return res.sendStatus(405);
    }
  } catch (error) {
    console.log("Error doing something with documents: ", error);
    return res.send(error);
  }
});
