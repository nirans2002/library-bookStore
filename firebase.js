var app_fireBase = {};
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyDrM4vVWWQ1pm0UDVU-coG9EaslhYbsbQw",
  authDomain: "lib-management-pjmn.firebaseapp.com",
  databaseURL: "https://lib-management-pjmn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lib-management-pjmn",
  storageBucket: "lib-management-pjmn.appspot.com",
  messagingSenderId: "335628993656",
  appId: "1:335628993656:web:68390bdb45dd38d3f2198d",
  measurementId: "G-FGTSDZ79JG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_fireBase = firebase;
})();
