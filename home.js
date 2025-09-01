firebase.initializeApp({
    apiKey: "AIzaSyAA2BvQX814OOEkp6bM20ibnttwyMF_Itg",
    authDomain: "travelrider-cf3c6.firebaseapp.com",
    databaseURL: "https://travelrider-cf3c6-default-rtdb.firebaseio.com/"
  });
  
  const database = firebase.database();
let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");

// 按下按鈕之後產生的變化

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
