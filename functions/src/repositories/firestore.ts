import admin from "firebase-admin"

admin.initializeApp({
  credential: admin.credential.cert("./service-account.json")
})

export default {instance : admin.firestore}