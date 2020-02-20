import firebase from 'firebase';

const config = {
	apiKey            : 'AIzaSyAgO4qgXEup7APQO3KHt_0WecGzpT-1V3c',
	authDomain        : 'joshua-s-portfolio.firebaseapp.com',
	databaseURL       : 'https://joshua-s-portfolio.firebaseio.com',
	projectId         : 'joshua-s-portfolio',
	storageBucket     : 'joshua-s-portfolio.appspot.com',
	messagingSenderId : '858408578441',
	appId             : '1:858408578441:web:b43dcce0d746ee10104558'
};

firebase.initializeApp(config);

export default firebase;
