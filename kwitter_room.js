// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAuV7RkohSI5u3WqcESp5HFcS6Mjf_NR84",
      authDomain: "kwitter-65674.firebaseapp.com",
      databaseURL: "https://kwitter-65674-default-rtdb.firebaseio.com",
      projectId: "kwitter-65674",
      storageBucket: "kwitter-65674.appspot.com",
      messagingSenderId: "397602466602",
      appId: "1:397602466602:web:5f33027cedde8bb1244c53"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
