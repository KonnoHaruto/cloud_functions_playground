'use strict';
const functions = require("firebase-functions");

// The Firebase Admin SDK
const admin = require('firebase-admin');

// 初期化
admin.initializeApp();



// addMessage()関数
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // テキストパラメーターの取得
  const original = req.query.text;

  // 新しいメッセージをfirestoreに追加
  const writeResult = await admin.firestore().collection('messages').add({original: original});

  // サクセスメッセージを送り返す
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});



// makeUppercase()関数
exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {

      const original = snap.data().original;

      functions.logger.log('Uppercasing', context.params.documentId, original);
      const uppercase = original.toUpperCase();
      
      return snap.ref.set({uppercase}, {merge: true});
    });
