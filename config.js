import * as firebase from 'firebase'
require('@firebase/firestore')


    var firebaseConfig = {
        apiKey: "AIzaSyDTn_2SE5vZncQHDD46hz4qB3VZ_8P4yos",
        authDomain: "wily-app-2aab8.firebaseapp.com",
        databaseURL: "https://wily-app-2aab8.firebaseio.com",
        projectId: "wily-app-2aab8",
        storageBucket: "wily-app-2aab8.appspot.com",
        messagingSenderId: "572683711965",
        appId: "1:572683711965:web:ca25792c3952f217657234"
      };
 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();