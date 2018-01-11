$(document).ready(function () {

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoSq8w2UF2X1JGgunlTxJClqT9Z_BQUfw",
    authDomain: "fir-hw-c324f.firebaseapp.com",
    databaseURL: "https://fir-hw-c324f.firebaseio.com",
    projectId: "fir-hw-c324f",
    storageBucket: "",
    messagingSenderId: "1039682797863"
  };
  firebase.initializeApp(config);


var database = firebase.database();
var trainCount = 0

database.ref().on("value", function(snapshot) {
	console.log(snapshot.val());
	console.log(snapshot.val().trains[0].train);
});


$('#trainForm').on('click', function(event) {
	event.preventDefault();
	var newTrain = {
		train: $('#tName').val().trim(),
		destination: $('#tDestination').val().trim(),
		time: $('#tTime').val().trim(),
		frequency: $('#tFrequency').val().trim()
	}
	console.log(newTrain);

	var trainRef = database.ref().child("trains");

	var newTrainRef = trainRef.push();

	newTrainRef.set({
		train: newTrain.train,
		destination: newTrain.destination,
		time: newTrain.time,
		frequency: newTrain.frequency
	});
});

});


// Psuedocode

// Retrieve data from firebase
// Write data to table at top of page
// Make function to calculate time remaining to the next train
// Transfer arrival time from military into 12 hour time