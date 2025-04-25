const firebaseConfig = {
  apiKey: "AIzaSyCxd40vle0RFcGivbUh8mYiGGy3Fo9R3pE",
  authDomain: "ecommerce-app-f172c.firebaseapp.com",
  projectId: "ecommerce-app-f172c",
  storageBucket: "ecommerce-app-f172c.firebasestorage.app",
  messagingSenderId: "548002617090",
  appId: "1:548002617090:web:e9f852b8b255a0a826d41b",
};
const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();

let showPassword = document.getElementById("show-password")
let userloginIcon = document.getElementById("userloginIcon")
let passwordInput = document.querySelector(".password-input")
let loginIn = document.querySelector(".login-in")

document.addEventListener("DOMContentLoaded",()=>{
   let loginLocal = localStorage.getItem("loginShowLocal")
  
   if(loginLocal == "yesActive"){
    loginIn.classList.add("active-eye")
}else{
    loginIn.classList.remove("active-eye")
}

})
let loginBtnTop = document.querySelector(".log-in")
let loginForm = document.getElementById("login-form")

userloginIcon.addEventListener("click",()=>{
    loginIn.classList.toggle("active-eye")
    if(loginIn.classList.contains("active-eye")){
       localStorage.setItem("loginShowLocal","yesActive")
    }else{
        localStorage.setItem("loginShowLocal","noActive")
    }
})



showPassword.addEventListener("click",()=>{
    
  passwordInput.classList.toggle("active-eye") 
  if(passwordInput.classList.contains("active-eye") ){
getPasswordShow()
  }else{
    getHidePassword()
  }
    
    
})

function getPasswordShow(){
passwordInput.type="text"
}

function getHidePassword(){
    passwordInput.type="password"
}

loginForm.addEventListener("submit",(e)=>{
  e.preventDefault()
  
  let loginEmail = document.querySelector(".loginEmail").value
  let loginPasword = document.querySelector(".password-input").value
  auth.signInWithEmailAndPassword(loginEmail,loginPasword).then((userLogin)=>{
     loginSuccess()
      setTimeout(()=>{
        window.location.href="/users/dashbord.html"
      },2000)
      console.log(userLogin)
  }).catch((e)=>{
      if(e == "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)."){
        console.log("email kaada waa qalad")
        logInError()
      }
  })
})

function logInError(){
  let mainShowMessage = loginIn.querySelector(".mainShowMessage")
  let showMessageSuccess = mainShowMessage.querySelector(".showMessageSuccess")
  let i = showMessageSuccess.querySelector("i")
  showMessageSuccess.innerHTML = `
  <i class="fa-solid fa-circle-xmark"></i>
    <span>You Email And Password Waa qalad!</span>
  `
  showMessageSuccess.style.backgroundColor="red"
  showMessageSuccess.style.color="#fff"
  showMessageSuccess.style.fontWeight="bold"
  i.style.color="green"
  console.log(mainShowMessage)
  mainShowMessage.style.opacity="1"
    setTimeout(()=>{
   mainShowMessage.style.opacity="0"
    },4000)
}

function loginSuccess(){
  let mainShowMessage = loginIn.querySelector(".mainShowMessage")
  let showMessageSuccess = mainShowMessage.querySelector(".showMessageSuccess")
  let i = showMessageSuccess.querySelector("i")
  showMessageSuccess.innerHTML = `
  <i class="fa-regular fa-circle-check"></i>
    <span>Waad Ku guulesati Galida Login!</span>
  `
  showMessageSuccess.style.backgroundColor="green"
  showMessageSuccess.style.color="#fff"
  showMessageSuccess.style.fontWeight="bold"
  i.style.color="green"
  console.log(mainShowMessage)
  mainShowMessage.style.opacity="1"
    setTimeout(()=>{
   mainShowMessage.style.opacity="0"
    },4000)
}
