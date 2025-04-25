
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCxd40vle0RFcGivbUh8mYiGGy3Fo9R3pE",
    authDomain: "ecommerce-app-f172c.firebaseapp.com",
    projectId: "ecommerce-app-f172c",
    storageBucket: "ecommerce-app-f172c.firebasestorage.app",
    messagingSenderId: "548002617090",
    appId: "1:548002617090:web:e9f852b8b255a0a826d41b"
  };

let loginBtnTop = document.querySelector(".log-in")
let loginForm = document.getElementById("login-form")
let registerForm = document.getElementById("register-form")
let registerBtnTop = document.querySelector(".regiter-btn-Top")
let mainArticle = document.querySelector(".main-article")
let borderBg = document.querySelector(".border-bg")
let isBoolItem = false


  const app = initializeApp(firebaseConfig)
 firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
// console.log(auth)
import {getDatabase,ref,set} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js"
const db = getDatabase()

document.addEventListener("DOMContentLoaded",()=>{
    let fetLocalStorage = localStorage.getItem("bool")
    if(fetLocalStorage == "yes"){
        showLoginForm()
    }
})

loginBtnTop.addEventListener("click",()=>{
showLoginForm()

})
registerBtnTop.addEventListener("click",()=>{
showRegisterForm()
})
function showLoginForm(){
isBoolItem= true
    borderBg.style.transform="translateX(10px)"
loginForm.style.opacity ="1"
loginForm.style.zIndex="15"
registerForm.style.zIndex ="0"
registerForm.style.opacity="0"

if(isBoolItem == true){
    localStorage.setItem("bool","yes")
   
}

}
function showRegisterForm(){
    isBoolItem=false
    borderBg.style.transform="translateX(310px)"
    loginForm.style.opacity ="0"
    loginForm.style.zIndex="0"
    registerForm.style.zIndex ="15"
    registerForm.style.opacity="1"
    if(isBoolItem== false){
        localStorage.setItem("bool","no")
    }
   
}
registerForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    checkAllInput()
})

  function checkAllInput(){
    let nameRegister = document.querySelector(".name-register")
    let emailRegister = document.querySelector(".email-register")
    let passwordRegister = document.querySelector(".password-register")
    if(nameRegister.value.trim()=="" || emailRegister.value.trim() =="" || passwordRegister.value.trim() ==""){
        mainArticle.style.display="flex"
        setTimeout(()=>{
             mainArticle.style.display="none"
        },5000)
       
    }else{
        // console.log("success")
      set(ref(db,"registerForm/" + nameRegister.value),{
        formRegisterDatabase:{name:nameRegister.value,email:emailRegister.value}
      }).then(()=>{
        console.log("succesfull register")
      }).catch((e)=>{
        console.log(e)
      })
    //    update
  
    //   register function
    auth.createUserWithEmailAndPassword(emailRegister.value,passwordRegister.value).then((userCreadential)=>{
        alert("you accoun registered!")
        console.log(userCreadential.user.metadata)
        window.location.href="/users/dashbord.html"
    }).catch((e)=>{
        console.log(e)
    })

    }
  }

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let loginEmail = document.querySelector(".loginEmail").value
    let loginPasword = document.querySelector(".password-input").value
    auth.signInWithEmailAndPassword(loginEmail,loginPasword).then((userLogin)=>{
        alert("login Done!")
        window.location.href="/users/dashbord.html"
        console.log(userLogin)
    }).catch((e)=>{
        console.log(e)
    })
})





