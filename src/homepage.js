
  let targetData = new Date("april 31, 2025 15:59:00");
setInterval(() => {
  function bestDelaTime() {
    let now = new Date();
    const diffrent = targetData - now;
    let day = Math.floor(diffrent / 1000 / 60 / 60 / 24);
    let hours = Math.floor(
      (diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minuts = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffrent % (1000 * 60)) / 1000);
    let dataDealsText = document.getElementById("data-deals");
    dataDealsText.innerHTML = `${day < 10 ? `0${day}` : day}d : ${
      hours < 10 ? `0${hours}` : hours
    }h : ${minuts < 10 ? `0${minuts}` : minuts}m : ${
      seconds < 10 ? `0${seconds}` : seconds
    }s`;
  }
  bestDelaTime();
}, 1000);

let shopCartOrder = document.querySelector(".cart-shopping-order");
let popupCarts = document.querySelector(".popup-carts");
let mainProductsDeals = document.querySelector(".main-products-deals");
const shoppingPop = document.getElementById("shopping-pop");
let subTitleAmount = document.getElementById("sub-title");
document.addEventListener("DOMContentLoaded", () => {
  let getLocal = localStorage.getItem("modeTogale");
  if (getLocal == "toggle") {
    popupCarts.classList.add("toggle");
  } else {
    popupCarts.classList.remove("toggle");
  }
});

shopCartOrder.addEventListener("click", () => {
  let popUpLocal = popupCarts.classList.toggle("toggle");
  if (popUpLocal == true) {
    localStorage.setItem("modeTogale", "toggle");
  } else {
    localStorage.setItem("modeTogale", "noTogle");
  }
});

let allBtnCarts = mainProductsDeals.querySelectorAll(".fa-cart-shopping");
allBtnCarts.forEach((btnCart) => {
  btnCart.addEventListener("click", () => {
    addProductToCart(btnCart);
  });
});

var popUpArray = [];
let totalCheckoutPrice = 0;
function addProductToCart(btnCart) {
  let nextParent = btnCart.parentElement;
  let mainParent = nextParent.parentElement;
  let getImage = mainParent.querySelector("img").src;
  let textDes = mainParent.querySelector("p").textContent;
  let price = mainParent
    .querySelector(".price-design")
    .textContent.replace("$", "");
    calculate(price);
let mainShowMessage = mainParent.querySelector(".mainShowMessage")
let showMessageSuccess = mainShowMessage.querySelector(".showMessageSuccess")
let i = showMessageSuccess.querySelector("i")
showMessageSuccess.innerHTML = `
 <i class="fa-regular fa-circle-check"></i>
  <span>The Product Was Added!</span>
`
showMessageSuccess.style.backgroundColor="#fa8232"
showMessageSuccess.style.color="white"
showMessageSuccess.style.fontWeight="bold"
i.style.color="green"
console.log(mainShowMessage)
mainShowMessage.style.opacity="1"
  setTimeout(()=>{
 mainShowMessage.style.opacity="0"
  },4000)

  shoppingPop.innerHTML += `
<div class="shoppin-info">
                    <img src="${getImage}" alt="" />
                    <div class="shoping">
                      <p>${textDes}</p>
                      <div class="input-quntantity">
                        <h5>1 x</h5>
                        <span id="price-product">$${price}</span>
                      </div>
                    </div>
                    <i class="fa fa-close CLoseItem"></i>
                </div>

`;
  popUpArray.push(shoppingPop);
  let totalSelected = document.getElementById("total-selected");
  let totalOrder = document.getElementById("total-order");
  totalOrder.style = "display:block";
  totalSelected.textContent = popUpArray.length;
  totalOrder.textContent = popUpArray.length;

  let shopInfo = document.querySelectorAll(".shoppin-info");
  shopInfo.forEach((shop) => {
    let closeItem = shop.querySelector(".CLoseItem");
    closeItem.addEventListener("click", () => {
      closeItem.parentElement.remove();
      let prentBtnPopShop = closeItem.parentElement;
      let priceProductPop = prentBtnPopShop.querySelectorAll("#price-product");
      priceProductPop.forEach((pricPopUp) => {
        let cutSubTitle = subTitleAmount.textContent.replace("$", "");

        let decreaiteTotalCheckout =
          cutSubTitle - pricPopUp.textContent.replace("$", "");
        totalSelected.textContent--;
        totalOrder.textContent--;
        console.log(totalSelected, totalOrder);
        subTitleAmount.textContent = decreaiteTotalCheckout;
        console.log(popUpArray);
      });
    });
  });
}

function calculate(price) {
  totalCheckoutPrice += Math.floor(price);
  document.getElementById("sub-title").textContent = `$${totalCheckoutPrice}`;
}

const headerProductArry = [
  {
    Image: "assets/todey-best-deals/Image1.png",
    textProductDes:
      "Xbox Series S - 512GB SSD Console with Wireless Controller -EU Versio...",
    headerTitle: "Xbox Series S - 512GB",
    price: "$442.12",
  },
  {
    Image: "./assets/todey-best-deals/Image (1).png",
    textProductDes: "Bose Sport earbuds-wireless earphones-Bluetooth in ear",
    headerTitle: "Contact us get Help",
    price: "$2300",
  },
  {
    Image: "./assets/todey-best-deals/Image (5).png",
    textProductDes: "Dell Optiplex 7000X7480 All-in-One Computer Monitor",
    headerTitle: "web Platform Ecommerce",
    price: "$299",
  },
];

function getRadidoProduct() {
  let inputRadioOne = document.querySelector(".all-radio1");
  let inputRadioTwo = document.querySelector(".all-radio2");
  let inputRadioThree = document.querySelector(".all-radio3");
  let headerProductImg = document.getElementById("header-product-img");
  let headerPriceProduct = document.getElementById("header-price-product");
  let headerTitleProduct = document.querySelector(".header-title-product");
  let headerDescriptionProduct = document.querySelector(
    ".header-description-product"
  );

  inputRadioTwo.addEventListener("change", () => {
    if (inputRadioTwo.checkVisibility() == true) {
      headerProductImg.src = headerProductArry[0].Image;
      headerTitleProduct.textContent = headerProductArry[0].headerTitle;
      headerDescriptionProduct.textContent =
        headerProductArry[0].textProductDes;
      headerPriceProduct.textContent = headerProductArry[0].price;
    }
  });
  inputRadioThree.addEventListener("change", () => {
    if (inputRadioThree.checkVisibility() == true) {
      headerProductImg.src = headerProductArry[1].Image;
      headerTitleProduct.textContent = headerProductArry[1].headerTitle;
      headerDescriptionProduct.textContent =
        headerProductArry[1].textProductDes;
      headerPriceProduct.textContent = headerProductArry[1].price;
    }
  });
  inputRadioOne.addEventListener("change", () => {
    if (inputRadioOne.checkVisibility() == true) {
      headerProductImg.src = headerProductArry[2].Image;
      headerTitleProduct.textContent = headerProductArry[2].headerTitle;
      headerDescriptionProduct.textContent =
        headerProductArry[2].textProductDes;
      headerPriceProduct.textContent = headerProductArry[2].price;
    }
  });
}

getRadidoProduct();


// // wishlists
 function getWishLists(){
  let arrayWishLists = []
  let allWishListsBtn = mainProductsDeals.querySelectorAll(".fa-heart")
  allWishListsBtn.forEach((wishBtn)=>{
    wishBtn.addEventListener("click",()=>{
      let nextParent = wishBtn.parentElement;
      let mainParent = nextParent.parentElement;
      let getImage = mainParent.querySelector("img").getAttribute("src");
      let textDes = mainParent.querySelector("p").textContent;
      let price = mainParent.querySelector(".price-design").textContent;
      let mainShowMessage = mainParent.querySelector(".mainShowMessage")
      let showMessageSuccess = mainShowMessage.querySelector(".showMessageSuccess")
      let i = showMessageSuccess.querySelector("i")
      showMessageSuccess.innerHTML = `
      <i class="fa-regular fa-heart"></i>
        <span>WishLists Was Added!</span>
      `
      showMessageSuccess.style.backgroundColor="#2da5f3"
      showMessageSuccess.style.color="#fff"
      showMessageSuccess.style.fontWeight="bold"
      i.style.color="green"
      console.log(mainShowMessage)
      mainShowMessage.style.opacity="1"
        setTimeout(()=>{
       mainShowMessage.style.opacity="0"
        },4000)
let objectWishLists = {
  newGetImage:getImage,
  newTextDes: textDes,
  newPrice:price
}
arrayWishLists.push(objectWishLists)
localStorage.setItem("wishlists",JSON.stringify(arrayWishLists))
    })
    
  })
  
}
getWishLists()

// function getShowMessageSuccess(){
//   let mainShowMessage= document.querySelectorAll(".mainShowMessage")
//   let showMessageSuccess= document.querySelectorAll(".showMessageSuccess")
//  showMessageSuccess.forEach((showMessage)=>{
//   showMessage.innerHTML =`<i class="fa-regular fa-circle-check"></i>
//   <span>SuccessFull Data Was Changed!</span>
//   `
//  })
//  mainShowMessage.forEach((mainMessage)=>{
//   mainMessage.style.opacity="1"
//   setTimeout(()=>{
//  mainMessage.style.opacity="0"
//   },4000)
//  })
// }

