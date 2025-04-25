
document.addEventListener("DOMContentLoaded",()=>{
    let getProduct = JSON.parse(localStorage.getItem("wishlists"))
    // console.log(getProduct)
  let bodyProduct =  document.querySelector(".bodyProduct")
  getProduct.forEach((product)=>{
    console.log(product)
    bodyProduct.innerHTML +=`
    <div class="main-product-wishlists">
                 <tr>
                   <td>
                     <div class="wishlists-img">
                       <img
                         src="${product.newGetImage}"
                         alt=""
                       />
                       <p>
                        ${product.newTextDes}
                       </p>
                     </div>
                   </td>
                   <td>
                     <span id="discount">$1299</span
                     ><span id="price-amount">${product.newPrice}</span>
                   </td>
                   <td>IN STOCK</td>
                   <td class="btn-carts">
                     <button>
                       ADD TO CART
                       <i class="fa-solid fa-cart-shopping"></i></button
                     ><i class="fa-regular fa-circle-xmark"></i>
                   </td>
                 </tr>
               </div>
   `
  })
 
})




