var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var config = {
	apiKey: "AIzaSyDVxdYl2carWq6R9NC0DCzUNLhXgp8yDjs",
	authDomain: "manage-gifts.firebaseapp.com",
	databaseURL: "https://manage-gifts.firebaseio.com",
	projectId: "manage-gifts",
	storageBucket: "manage-gifts.appspot.com",
	messagingSenderId: "23593255257"
};
firebase.initializeApp(config)
var usersRef = firebase.database().ref('users')
