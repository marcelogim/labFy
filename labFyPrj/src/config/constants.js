import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyCSC4YspP6OlUhGiJMSWr2JmJGWlQrvrHI",
   authDomain: "testefirebase-414c1.firebaseapp.com",
   databaseURL: "https://testefirebase-414c1.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth