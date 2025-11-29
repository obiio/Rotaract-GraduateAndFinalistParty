const firebaseConfig = {
  apiKey: "AIzaSyDVZg5VVrUtuTPA58FI0t5zUQLPG4hhIu0",
  authDomain: "rockandroll-16eb4.firebaseapp.com",
  projectId: "rockandroll-16eb4",
  storageBucket: "rockandroll-16eb4.firebasestorage.app",
  messagingSenderId: "651189602364",
  appId: "1:651189602364:web:e741bfa1adc5b9ee4b9b39"
};

firebase.initializeApp(firebaseConfig);

// Initialize slots if not exist
firebase.firestore().collection('party').doc('slots').get().then(doc => {
  if (!doc.exists) {
    firebase.firestore().collection('party').doc('slots').set({ registered: 0 });
  }
});