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
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}