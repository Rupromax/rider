const firebaseConfig = {
    apiKey: "AIzaSyCZfyR9RuZOWeERA4zPS-Z5T9QqEYLN4-s",
    authDomain: "ridertravel-97e68.firebaseapp.com",
    databaseURL: "https://ridertravel-97e68-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ridertravel-97e68",
    storageBucket: "ridertravel-97e68.appspot.com",
    messagingSenderId: "856404185227",
    appId: "1:856404185227:web:8fa4fe11ed1fd62626048e",
    measurementId: "G-3HY4E2GDSB"
  };

  firebase.initializeApp(firebaseConfig);
  function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 註冊成功
        const user = userCredential.user;
        console.log('註冊成功', user);
      })
      .catch((error) => {
        // 註冊失敗，顯示錯誤訊息
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('註冊失敗', errorCode, errorMessage);
      });
  }

  // 登入
  function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // 登入成功
        const user = userCredential.user;
        console.log('登入成功', user);
      })
      .catch((error) => {
        // 登入失敗，顯示錯誤訊息
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('登入失敗', errorCode, errorMessage);
      });
  }
