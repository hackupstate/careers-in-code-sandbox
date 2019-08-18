import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

export const messages = functions.https.onRequest(async (req, res) => {
  try {
    console.log('REQUEST METHOD: ' + req.method);
    const records = await db.collection('messages').get(); // .where('text', '==', 'hello')
    return res.send(records.docs);
  } catch (error) {
    console.log("Error getting documents: ", error);
    return res.send(error);
  }
});


