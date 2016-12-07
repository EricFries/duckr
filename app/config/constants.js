import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBZ-3kLQwzIQgLzwsORh4Bn0ECTkTflrsM',
  authDomain: 'erics-test-project-77e0f.firebaseapp.com',
  databaseURL: 'https://erics-test-project-77e0f.firebaseio.com',
  storageBucket: 'erics-test-project-77e0f.appspot.com',
  messagingSenderId: '570576439252',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

