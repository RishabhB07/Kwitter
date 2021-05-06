//YOUR FIREBASE LINKS
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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}