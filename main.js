//menu mobile
    // copy dptCat to departments
    const dptCategory= document.querySelector('.dptCat');
    const dptPlace=document.querySelector('.departments');
    dptPlace.innerHTML=dptCategory.innerHTML;
    
    //copy nav to nav
    const miniNav=document.querySelector('.headerNav nav');
    const navPlace=document.querySelector('.offCanvas nav');
    navPlace.innerHTML=miniNav.innerHTML

    //copy .headerTop to .topNav
    const topNav=document.querySelector('.headerTop .wrapper');
    const topPlace=document.querySelector('.offCanvas .topNav');
    topPlace.innerHTML=topNav.innerHTML;


//Slider-carousel

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
document.getElementsByClassName('sliderBtn')[0].addEventListener('click', ()=>{
  event.preventDefault();
  window.location='products.html'
})
document.getElementsByClassName('sliderBtn')[1].addEventListener('click', ()=>{
  event.preventDefault();
  window.location='products.html'
})
document.getElementsByClassName('sliderBtn')[2].addEventListener('click', ()=>{
  event.preventDefault();
  window.location='products.html'
})

function redirectToProductPage() {
  window.location.href = "product.html?index=2";
}
function redirectToProductPage2() {
  window.location.href = "product.html?index=7";
}
function redirectToProductPage3() {
  window.location.href = "product.html?index=30";
}
function switchScrollable(){
    const titles = document.querySelectorAll('.imgTitle');
  const prices = document.querySelectorAll('.currentP');
  const imgs = document.querySelectorAll('.imgProd');
fetch('./main.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((post, index) => {
      titles[index].innerHTML = post.title;
      prices[index].innerHTML = post.price;
      imgs[index].setAttribute('src', post.img);
    });
  });
}
switchScrollable()

//countdown
const countdown=()=>{
  const countDate= new Date('August 4, 2023 00:00:00').getTime();
  const now=new Date().getTime();
  const gap=countDate-now;

  const second=1000;
  const minute=second*60;
  const hour=minute*60;
  const day=hour*24;

  const textDay=Math.floor(gap/day);
  const textHour=Math.floor((gap%day)/hour);
  const textMinute=Math.floor((gap%hour)/minute);
  const textSecond=Math.floor((gap%minute)/second)

  document.querySelector('.day').innerText=textDay;
  document.querySelector('.hour').innerText=textHour;
  document.querySelector('.minute').innerText=textMinute;
  document.querySelector('.sec').innerText=textSecond;
};
setInterval(countdown,1000)

const hamburger = document.querySelector(".hamburger");
const miniMenu = document.querySelector(".miniMenu");
hamburger.onclick = function() {
  const navBar= document.querySelector('.nav-bar')
    navBar.classList.toggle("actively");
    miniMenu.classList.toggle("actively");
  //   const miniMenu = document.querySelector('.miniMenu');
  // miniMenu.classList.toggle("miniMenu-active");

}






// cart

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      addToCart(index);
    });
  });


//add to cart
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      addToCart(index);
    });
  });





function addToCart() {

  console.log("addToCart function called!");
  const productIndex = getQueryParam("index");
  const selectedProduct = products[productIndex];
  console.log("Selected Product:", selectedProduct);

  // Get the current cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the selected product is already in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === selectedProduct.id 
  );
 
  if (existingItemIndex !== 0) {
    // If the product is already in the cart, update its quantity
    cartItems[existingItemIndex].quantity =
      parseInt(cartItems[existingItemIndex].quantity) + 1;
  } else {
    const newItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: parsePrice(selectedProduct.price),
      quantity: 1,
      image: selectedProduct.imgUrl,
    };
    cartItems.push(newItem);
  }
  
  console.log("Cart Items:", cartItems);
  // Save the updated cart items to local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  // Update the cart icon and total price
  updateCartIconAndTotal();

}

// Function to update the cart icon and total price in the header
function updateCartIconAndTotal() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartIcon = document.querySelector(".ri-shopping-cart-line");
  const itemNumber = document.querySelector(".itemNumber");
  const cartTotal = document.querySelector(".cartTotal");

  console.log("Cart Items Array:", cartItems);

  const total = cartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = parseInt(item.quantity);
    console.log(
      `Item: ${item.name}, Price: ${itemPrice}, Quantity: ${itemQuantity}`
    );
    return acc + itemPrice * itemQuantity;
  }, 0);
  // Update the cart icon with the number of items in the cart
  itemNumber.textContent = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Update the cart total price
  cartTotal.textContent = total.toFixed(2) + " EURO";
}
function parsePrice(priceString) {
  const numericPrice = priceString.replace(/[^\d.,]/g, "").replace(",", ".");
  const parsedValue = parseFloat(numericPrice);
  console.log(
    `Input Price: ${priceString}, Numeric Price: ${numericPrice}, Parsed Value: ${parsedValue}`
  );
  return parsedValue;
}
updateCartIconAndTotal();
})


// Add the event listener to trigger the function before the page is unloaded
function parsePrice(priceString) {
  const numericPrice = priceString.replace(/[^\d.,]/g, "").replace(",", ".");
  const parsedValue = parseFloat(numericPrice);
  console.log(
    `Input Price: ${priceString}, Numeric Price: ${numericPrice}, Parsed Value: ${parsedValue}`
  );
  return parsedValue;
}
updateCartIconAndTotal();
})


// done
function updateCartItemQuantity(itemId, newQuantity) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemIndex = cartItems.findIndex((item) => item.id === itemId);

  if (itemIndex !==-1) {
    // Update the quantity of the specific item
    cartItems[itemIndex].quantity = parseInt(newQuantity);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // After updating the quantity, update the cart icon and total price
    updateCartIconAndTotal();
  }
}



console.log("Displaying cart items...1");
function displayCartItems() {
    console.log("Displaying cart items...");
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.getElementById("cartContainer");
  
    // Clear the existing content in the cart container
    cartContainer.innerHTML = "";
  
    // Loop through each item in the cart and create elements to display them
    cartItems.forEach((item) => {
      const cartItemDiv = document.createElement("div");
      cartItemDiv.classList.add("cart-item");
  
      // Product image
      const imageElement = document.createElement("img");
      imageElement.src = item.image; 
      // imageElement.alt = item.imgAlt;
      cartItemDiv.appendChild(imageElement);
  
      // Product name
      const nameElement = document.createElement("div");
      nameElement.textContent = item.name;
      cartItemDiv.appendChild(nameElement);
  
      // Product quantity
      const quantityElement = document.createElement("input");
      quantityElement.setAttribute('type', 'number');
      quantityElement.setAttribute('value', item.quantity);
      quantityElement.setAttribute('min', 0);
      quantityElement.addEventListener("input", function (event) {
        updateCartItemQuantity(item.id, event.target.value);
        // Update the cart total after the cart item quantity has been updated
        updateCartIconAndTotal();
      });

      quantityElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          // Update the cart total when Enter key is pressed
          updateCartIconAndTotal();
        }
      });
      cartItemDiv.appendChild(quantityElement);
  
      // Product size
      const sizeElement = document.createElement("div");
      sizeElement.textContent = item.size;
      cartItemDiv.appendChild(sizeElement);

      // Add the cart item div to the cart container
      cartContainer.appendChild(cartItemDiv);
    });
  }


  function updateCartIconAndTotal() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartIcon = document.querySelector(".ri-shopping-cart-line");
    const itemNumber = document.querySelector(".itemNumber");
    const cartTotal = document.querySelector(".cartTotal");
  
    console.log("Cart Items Array:", cartItems);
  
    const total = cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = parseInt(item.quantity);
      console.log(
        `Item: ${item.name}, Price: ${itemPrice}, Quantity: ${itemQuantity}`
      );
      return acc + itemPrice * itemQuantity;
    }, 0);
    // Update the cart icon with the number of items in the cart
    itemNumber.textContent = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
  
    // Update the cart total price
    cartTotal.textContent = total.toFixed(2) + " EURO";
  }
  function parsePrice(priceString) {
    const numericPrice = priceString.replace(/[^\d.,]/g, "").replace(",", ".");
    const parsedValue = parseFloat(numericPrice);
    console.log(
      `Input Price: ${priceString}, Numeric Price: ${numericPrice}, Parsed Value: ${parsedValue}`
    );
    return parsedValue;
  }
  updateCartIconAndTotal();

