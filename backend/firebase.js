const { getStorage } = require("firebase/storage");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyCCMngRL67bB4ax8R6HaqdRsCDfxReUZAg",
  authDomain: "school-admin-6ccbf.firebaseapp.com",
  databaseURL: "https://school-admin-6ccbf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "school-admin-6ccbf",
  storageBucket: "school-admin-6ccbf.appspot.com",
  messagingSenderId: "982875810969",
  appId: "1:982875810969:web:a4f43c16b16c852ebb5c08"
};

const firebaseApp = initializeApp(firebaseConfig);


module.exports = getStorage(firebaseApp);