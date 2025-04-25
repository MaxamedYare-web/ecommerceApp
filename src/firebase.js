const firebaseConfig = {
  apiKey: "AIzaSyCxd40vle0RFcGivbUh8mYiGGy3Fo9R3pE",
  authDomain: "ecommerce-app-f172c.firebaseapp.com",
  projectId: "ecommerce-app-f172c",
  storageBucket: "ecommerce-app-f172c.firebasestorage.app",
  messagingSenderId: "548002617090",
  appId: "1:548002617090:web:e9f852b8b255a0a826d41b",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
let lastLoginTime = document.getElementById("last-login-time");
let youJoined = document.getElementById("joined-time");
let emailText = document.getElementById("email-text");
auth.onAuthStateChanged((getUser) => {
  if (getUser) {
    lastLoginTime.innerHTML = new Date().toLocaleString();
    youJoined.textContent = getUser.multiFactor.user.metadata.creationTime;
    emailText.textContent = getUser.multiFactor.user.email;
     getReadEmail(emailText.textContent)
  }
});

document.addEventListener("DOMContentLoaded",()=>{
    let getFromLocal = JSON.parse(localStorage.getItem("accountSettings"))
    let storeThisImage = localStorage.getItem("storeThisImage")
    nameProfile = getFromLocal.newNameProfile
    countryInfo = getFromLocal.newCountyInfo
    phone = getFromLocal.newPhone
    let getNameText = document.querySelector(".getNameText")
    let getCountryText = document.querySelector(".getCountryText")
    let getPhoneText = document.querySelector(".getPhoneText")
    let getImageProfil = document.querySelector(".getImageProfil")
    getNameText.textContent = getFromLocal.newNameProfile
    getCountryText.textContent = "Country: "+ getFromLocal.newCountyInfo
    getPhoneText.textContent = getFromLocal.newPhone
    getImageProfil.src = storeThisImage
})

let emageProfile = document.getElementById("imageProfile");
let nameProfile = document.getElementById("peson-name").textContent;
let countryInfo = document.getElementById("countryInfo").textContent;
let phone = document.getElementById("phoneNumber").textContent;

 function getReadEmail(email){
    let profile = document.querySelector(".profile")
    const accountInfo = {
        imageProfile: emageProfile.src,
        nameProfileTex: nameProfile,
        countryInfoText: countryInfo,
        emailText: email,
        phoneNumber: phone,
      };
      profile.innerHTML=`
      <div class="mainShowMessage">
        <div class="showMessageSuccess"></div>
        </div>
      <div class="mainProfileImage">
      <img id="popUpImage" src="${accountInfo.imageProfile}" alt="" />
      <label for="profileImageUpload">Change Image</label>
      <input type="file" id="profileImageUpload">
      </div>
            <div class="profile-title">
              <!-- form -->
              <form action="" class="form-Profile">
                <div class="display-name">
                  <label for="">Display Name</label>
                  <input id="inputName" type="text" value="${accountInfo.nameProfileTex}" />
                </div>
                <div class="display-name country">
                  <label for="">Country</label>
                  <input id="inputCountry" type="text" value="${accountInfo.countryInfoText}" />
                </div>
                <div class="display-name email">
                  <label for="">email</label>
                  <input id="inputEmail" type="text" value="${accountInfo.emailText}" disabled />
                </div>
                <div class="display-name phone">
                  <label for="">Phone Number</label>
                  <input id="inputPhone" type="text" value="${accountInfo.phoneNumber}" />
                </div>
                <button id="profieBtnSave">SAVE CHANGES</button>
              </form>
            </div>
     `
     let form = document.querySelector(".form-Profile")
     fProfileBtn(form)
}

function fProfileBtn(form){
    let popUpImage = document.getElementById("popUpImage")
let profileImageUpload = document.getElementById("profileImageUpload")
    profileImageUpload.addEventListener("change",()=>{
        const file = profileImageUpload.files[0]
        if(file){
            const reader = new FileReader()
            reader.addEventListener("load",(e)=>{
                popUpImage.src = e.target.result 
                localStorage.setItem("storeThisImage",e.target.result)
            })
            reader.readAsDataURL(file)
            console.log(popUpImage)
        }
     })
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
let inputName = document.getElementById("inputName").value.trim()
let inputCountry= document.getElementById("inputCountry").value.trim()
let inputPhone = document.getElementById("inputPhone").value.trim()
  nameProfile = inputName
  countryInfo = inputCountry
  phone = inputPhone
//  console.log(imageProfile)
let objectStoreText = {
    newNameProfile:nameProfile,
    newCountyInfo:countryInfo,
    newPhone:phone,
    // newEmageProfile:tesImgLocal
}
localStorage.setItem("accountSettings",JSON.stringify(objectStoreText))
      
//   succes message
getShowMessageSuccess()
    })
}

let containerProfile = document.querySelector(".container-profile");
let dashbord = document.getElementById("dashbord");
let settingBtn = document.querySelector(".settingBtn")
settingBtn.addEventListener("click",()=>{
    dashbord.style.display="none"
    containerProfile.style.display="flex"
})

let editAccount = document.getElementById("editAccount")
editAccount.addEventListener("click",()=>{
     dashbord.style.display="none"
    containerProfile.style.display="flex"
})

function getShowMessageSuccess(){
    let mainShowMessage= document.querySelector(".mainShowMessage")
    let showMessageSuccess= document.querySelector(".showMessageSuccess")
    showMessageSuccess.innerHTML =`<i class="fa-regular fa-circle-check"></i>
    <span>SuccessFull Data Was Changed!</span>
    `
    mainShowMessage.style.opacity="1"
   setTimeout(()=>{
 mainShowMessage.style.opacity="0"
   },4000)
}

let barsBtn = document.getElementById("barsBtn")
let closeBtn = document.getElementById("closeBtn")
let nav = document.querySelector("nav")
barsBtn.addEventListener("click",()=>{
  nav.style.height="50%"
  closeBtn.style.opacity="1"
  barsBtn.style.opacity="0"
  closeBtn.style.zIndex="3"
})

closeBtn.addEventListener("click",()=>{
  nav.style.height="8%"
  closeBtn.style.opacity="0"
  barsBtn.style.opacity="1"
  barsBtn.style.zIndex="3"
  closeBtn.style.zIndex="1"
  barsBtn.style.transition="1s"
})

