import Firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC3MigokWku0ZzC2icvMrEUwzDGL1PlKpQ',
  authDomain: 'rider-3760a.firebaseapp.com',
  databaseURL: 'https://rider-3760a.firebaseio.com',
  projectId: 'rider-3760a',
  storageBucket: 'rider-3760a.appspot.com',
  messagingSenderId: '434705841728'
}

const fb = Firebase.initializeApp(config)
const db = fb.database()

export default {
  firebase: fb,
  database: db
}
