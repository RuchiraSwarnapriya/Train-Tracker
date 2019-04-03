import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAW1bd_wUKCTVXsWoi_Wn39c1HaNX-aX1c",
    authDomain: "train-tracker-232105.firebaseapp.com",
    databaseURL: "https://train-tracker-232105.firebaseio.com",
    projectId: "train-tracker-232105",
    storageBucket: "train-tracker-232105.appspot.com",
    messagingSenderId: "939799566101"
  };

  const fbConfig = firebase.initializeApp(config);
  //firebase.firestore().settings({ timestampsInSnapshots: true});

  export default fbConfig;