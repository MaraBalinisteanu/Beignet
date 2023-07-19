// const products = [
//     {
//       id:1,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/blouse2.webp',
//       smallImg2:'assets/products/clothesW/blouse3.webp',
//       smallImg3:'assets/products/clothesW/blouse1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/blouse1.webp",
//       name: "Women Blouse",
//       description: "Description 1",
//       price: "8.95€",
//       marja: "p10",
//     },
//     {      id:2,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/coat2.webp',
//       smallImg2:'assets/products/clothesW/coat3.webp',
//       smallImg3:'assets/products/clothesW/coat1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/coat1.webp",
//       name: "Women Coat",
//       description: "Description 1",
//       price: "39.95€",
//       marja: "p40",
//     },
//     {      id:3,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/dress2.webp',
//       smallImg2:'assets/products/clothesW/dress3.webp',
//       smallImg3:'assets/products/clothesW/dress1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/dress1.webp",
//       name: "Women Dress",
//       description: "Description 1",
//       price: "34.75€",
//       marja: "p40",
//       // 
//     },
//     {      id:4,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/hoodie2.webp',
//       smallImg2:'assets/products/clothesW/hoodie3.webp',
//       smallImg3:'assets/products/clothesW/hoodie1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/hoodie1.webp",
//       name: "Women Hoodie",
//       description: "Description 1",
//       price: "18.95€",
//       marja: "p20",
//     },
//     {      id:5,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/jeans2.webp',
//       smallImg2:'assets/products/clothesW/jeans3.webp',
//       smallImg3:'assets/products/clothesW/jeans1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/jeans1.webp",
//       name: "Women Jeans",
//       description: "Description 1",
//       price: "29.55€",
//       marja: "p30",
//     },
//     {      id:6,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/skirt2.webp',
//       smallImg2:'assets/products/clothesW/skirt3.webp',
//       smallImg3:'assets/products/clothesW/skirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/skirt1.webp",
//       name: "Women Skirt",
//       description: "Description 1",
//       price: "9.99€",
//       marja: "p10",
//     },
//     {
//       id:7,
//       category: "women-clothing",
//       smallImg1:'assets/products/clothesW/tshirt2.webp',
//       smallImg2:'assets/products/clothesW/tshirt3.webp',
//       smallImg3:'assets/products/clothesW/tshirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesW/tshirt1.webp",
//       name: "Women T-Shirt",
//       description: "Description 1",
//       price: "19.55€",
//       marja: "p20",
//     },
//     {      id:8,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/camasa2.webp',
//       smallImg2:'assets/products/clothesM/camasa3.webp',
//       smallImg3:'assets/products/clothesM/camasa1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/camasa1.webp",
//       name: "Men Shirt",
//       description: "Description 1",
//       price: "12.05€",
//       marja: "p10",
//     },
//     {      id:9,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/coat2.webp',
//       smallImg2:'assets/products/clothesM/coat3.webp',
//       smallImg3:'assets/products/clothesM/coat1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/coat1.webp",
//       name: "Men Coat",
//       description: "Description 1",
//       price: "37.55€",
//       marja: "p40",
//     },
//     {      id:10,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/han2.webp',
//       smallImg2:'assets/products/clothesM/han3.webp',
//       smallImg3:'assets/products/clothesM/han1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/han1.webp",
//       name: "Men Hoodie",
//       description: "Description 1",
//       price: "38.85€",
//       marja: "p40",
//     },
//     {      id:11,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/jeans2.webp',
//       smallImg2:'assets/products/clothesM/jeans3.webp',
//       smallImg3:'assets/products/clothesM/jeans1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/jeans1.webp",
//       name: "Men Jeans",
//       description: "Description 1",
//       price: "29.99€",
//       marja: "p20",
//     },
//     {      id:12,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/shorts2.webp',
//       smallImg2:'assets/products/clothesM/shorts3.webp',
//       smallImg3:'assets/products/clothesM/shorts1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/shorts1.webp",
//       name: "Men Shorts",
//       description: "Description 1",
//       price: "24.55€",
//       marja: "p20",
//     },
//     {      id:13,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/tshirt2.webp',
//       smallImg2:'assets/products/clothesM/tshirt3.webp',
//       smallImg3:'assets/products/clothesM/tshirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/tshirt1.webp",
//       name: "Men T-Shirt",
//       description: "Description 1",
//       price: "40.55€",
//       marja: "p40",
//     },
//     {      id:14,
//       category: "men-clothing",
//       smallImg1:'assets/products/clothesM/suit2.webp',
//       smallImg2:'assets/products/clothesM/suit3.webp',
//       smallImg3:'assets/products/clothesM/suit1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/clothesM/suit1.webp",
//       name: "Men Suit",
//       description: "Description 1",
//       price: "124.55€",
//       marja: "p50",
//     },
  
//     {      id:15,
//       category: "women-shoes",
//       smallImg1:'assets/products/shoesW/botine2.webp',
//       smallImg2:'assets/products/shoesW/botine3.webp',
//       smallImg3:'assets/products/shoesW/botine1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesW/botine1.webp",
//       name: "Women Ankle Boots",
//       description: "Description 1",
//       price: "160.55€",
//       marja: "p50",
//     },
//     {      id:16,
//       category: "women-shoes",
//       smallImg1:'assets/products/shoesW/cizme2.webp',
//       smallImg2:'assets/products/shoesW/cizme3.webp',
//       smallImg3:'assets/products/shoesW/cizme1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesW/cizme1.webp",
//       name: "Women Boots",
//       description: "Description 1",
//       price: "270.55€",
//       marja: "p50",
//     },
//     {      id:17,
//       category: "women-shoes",
//       smallImg1:'assets/products/shoesW/espadrile2.webp',
//       smallImg2:'assets/products/shoesW/espadrile3.webp',
//       smallImg3:'assets/products/shoesW/espadrile1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesW/espadrile1.webp",
//       name: "Women Flats",
//       description: "Description 1",
//       price: "30.55€",
//       marja: "p40",
//     },
//     {      id:18,
//       category: "women-shoes",
//       smallImg1:'assets/products/shoesW/sandale2.webp',
//       smallImg2:'assets/products/shoesW/sandale3.webp',
//       smallImg3:'assets/products/shoesW/sandal.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesW/sandal.webp",
//       name: "Women Sandals",
//       description: "Description 1",
//       price: "173.55€",
//       marja: "p50",
//     },
//     {      id:19,
//       category: "women-shoes",
//       smallImg1:'assets/products/shoesW/shoe3-2.webp',
//       smallImg2:'assets/products/shoesW/shoe3-3.webp',
//       smallImg3:'assets/products/shoesW/shoe3-1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesW/shoe3-1.webp",
//       name: "Women Sport Shoes",
//       description: "Description 1",
//       price: "77.55€",
//       marja: "p50",
//     },
//     {      id:20,
//       category: "men-shoes",
//       smallImg1:'assets/products/shoesM/bocanci1-3.jpeg',
//       smallImg2:'assets/products/shoesM/bocanci1-2.webp',
//       smallImg3:'assets/products/shoesM/bocanci1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesM/bocanci1-2.webp",
//       name: "Men Boots",
//       description: "Description 1",
//       price: "30.55€",
//     },
//     {id:21,
//       category: "men-shoes",
//       smallImg1:'assets/products/shoesM/papcasa2.webp',
//       smallImg2:'assets/products/shoesM/papcasa3.webp',
//       smallImg3:'assets/products/shoesM/papcasa.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesM/papcasa.webp",
//       name: "Men Slippers",
//       description: "Description 1",
//       price: "18.55€",
//       marja: "p20",
//     },
//     {id:22 ,
//       category: "men-shoes",
//       smallImg1:'assets/products/shoesM/shoe1-3.jpeg',
//       smallImg2:'assets/products/shoesM/shoe1.webp',
//       smallImg3:'assets/products/shoesM/shoe1-1.jpeg',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesM/shoe1-1.jpeg",
//       name: "Men Sport Shoes",
//       description: "Description 1",
//       price: "230.55€",
//       marja: "p50",
//     },
//     {id:23 ,
//       category: "men-shoes",
//       smallImg1:'assets/products/shoesM/shoe2-2.webp',
//       smallImg2:'assets/products/shoesM/shoe2-3.webp',
//       smallImg3:'assets/products/shoesM/shoe2.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesM/shoe2.webp",
//       name: "Men Sport Shoes",
//       description: "Description 1",
//       price: "240.55€",
//       marja: "p50",
//     },
//     {id:24 ,
//       category: "men-shoes",
//       smallImg1:'assets/products/shoesM/shoes4.webp',
//       smallImg2:'assets/products/shoesM/shoes4-3.webp',
//       smallImg3:'assets/products/shoesM/shoes4-2.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/shoesM/shoes4-2.webp",
//       name: "Men Flats",
//       description: "Description 1",
//       price: "29.55€",
//       marja: "p30",
//     },
//     {id:25 ,
//       category: "kids-f",
//       smallImg1:'assets/products/kids/fete/dress2.webp',
//       smallImg2:'assets/products/kids/fete/dress3.webp',
//       smallImg3:'assets/products/kids/fete/dress1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/fete/dress1.webp",
//       name: "Girls Dress",
//       description: "Description 1",
//       price: "23.55€",
//       marja: "p30",
//     },
//     {id:26 ,
//       category: "kids-f",
//       smallImg1:'assets/products/kids/fete/hoodie2.webp',
//       smallImg2:'assets/products/kids/fete/hoodie3.webp',
//       smallImg3:'assets/products/kids/fete/hoodie1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/fete/hoodie1.webp",
//       name: "Girls Hoodie",
//       description: "Description 1",
//       price: "90.55€",
//       marja: "p50",
//     },
//     {id:27 ,
//       category: "kids-f",
//       smallImg1:'assets/products/kids/fete/skirt2.webp',
//       smallImg2:'assets/products/kids/fete/skirt3.webp',
//       smallImg3:'assets/products/kids/fete/skirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/fete/skirt1.webp",
//       name: "Girls Skirt",
//       description: "Description 1",
//       price: "28.55€",
//       marja: "p30",
//     },
//     {id:28 ,
//       category: "kids-f",
//       smallImg1:'assets/products/kids/fete/tshirt2.webp',
//       smallImg2:'assets/products/kids/fete/tshirt3.webp',
//       smallImg3:'assets/products/kids/fete/tshirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/fete/tshirt1.webp",
//       name: "Girls T-Shirt",
//       description: "Description 1",
//       price: "20.55€",
//       marja: "p30",
//     },
//     {id:29 ,
//       category: "kids-f",
//       smallImg1:'assets/products/kids/fete/sportF2.webp',
//       smallImg2:'assets/products/kids/fete/sportF3.webp',
//       smallImg3:'assets/products/kids/fete/sportF.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/fete/sportF.webp",
//       name: "Girls Sport Shoes",
//       description: "Description 1",
//       price: "42.55€",
//       marja: "p40",
//     },
//     {id:30 ,
//       category: "kids-b",
//       smallImg1:'assets/products/kids/baieti/camasa2.webp',
//       smallImg2:'assets/products/kids/baieti/camasa3.webp',
//       smallImg3:'assets/products/kids/baieti/camasa1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/baieti/camasa1.webp",
//       name: "Boys Shirt",
//       description: "Description 1",
//       price: "8.55€",
//       marja: "p10",
//     },
//     {id:31 ,
//       category: "kids-b",
//       smallImg1:'assets/products/kids/baieti/pant2.webp',
//       smallImg2:'assets/products/kids/baieti/pant3.webp',
//       smallImg3:'assets/products/kids/baieti/pant1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/baieti/pant1.webp",
//       name: "Boys Pants",
//       description: "Description 1",
//       price: "17.55€",
//       marja: "p20",
//     },
//     {id:32 ,
//       category: "kids-b",
//       smallImg1:'assets/products/kids/baieti/shorts2.webp',
//       smallImg2:'assets/products/kids/baieti/shorts3.webp',
//       smallImg3:'assets/products/kids/baieti/shorts1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/baieti/shorts1.webp",
//       name: "Boys Shorts",
//       description: "Description 1",
//       price: "9.55€",
//       marja: "p10",
//     },
//     {id:33 ,
//       category: "kids-b",
//       smallImg1:'assets/products/kids/baieti/tshirt2.webp',
//       smallImg2:'assets/products/kids/baieti/tshirt3.webp',
//       smallImg3:'assets/products/kids/baieti/tshirt1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/baieti/tshirt1.webp",
//       name: "Boys T-Shirt",
//       description: "Description 1",
//       price: "20.55€",
//       marja: "p30",
//     },
//     {id:34 ,
//       category: "kids-b",
//       smallImg1:'assets/products/kids/baieti/shoes2.webp',
//       smallImg2:'assets/products/kids/baieti/shoes3.webp',
//       smallImg3:'assets/products/kids/baieti/shoes1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/kids/baieti/shoes1.webp",
//       name: "Boys Sport Shoes",
//       description: "Description 1",
//       price: "40.55€",
//       marja: "p40",
//     },
//     {id:35 ,
//       category: "bags",
//       smallImg1:'assets/products/bags/bag2.webp',
//       smallImg2:'assets/products/bags/bag3.webp',
//       smallImg3:'assets/products/bags/bag1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/bags/bag1.webp",
//       name: "Bag",
//       description: "Description 1",
//       price: "330.55€",
//       marja: "p50",
//     },
//     {id:36 ,
//       category: "bags",
//       smallImg1:'assets/products/bags/ruc2.webp',
//       smallImg2:'assets/products/bags/ruc3.webp',
//       smallImg3:'assets/products/bags/ruc1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/bags/ruc1.webp",
//       name: "Backpack",
//       description: "Description 1",
//       price: "296.55€",
//       marja: "p50",
//     },
//     {id:37 ,
//       category: "bags",
//       smallImg1:'assets/products/bags/sport2.webp',
//       smallImg2:'assets/products/bags/sport3.webp',
//       smallImg3:'assets/products/bags/sport1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/bags/sport1.webp",
//       name: "Sports Bag",
//       description: "Description 1",
//       price: "80.55€",
//       marja: "p50",
//     },
//     {id:38 ,
//       category: "bags",
//       smallImg1:'assets/products/bags/suic2.webp',
//       smallImg2:'assets/products/bags/suitc3.webp',
//       smallImg3:'assets/products/bags/suitc1.webp',
//       imgAlt: "productImg",
//       imgUrl: "assets/products/bags/suitc1.webp",
//       name: "Suitcase",
//       description: "Description 1",
//       price: "49.55",
//       marja: "p40",
//     },
//   ];
  
  
  
  
  
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


//single product slider

const mainImg= document.getElementById('MainImg');
const smallImg=document.getElementsByClassName('small-img');
smallImg[0].onclick = function(){
  mainImg.src=smallImg[0].src;
}
smallImg[1].onclick = function(){
  mainImg.src=smallImg[1].src;
}
smallImg[2].onclick = function(){
  mainImg.src=smallImg[2].src;
}

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


// Inside product.html script section:
const productIndex = getQueryParam("index");
const selectedProduct = products[productIndex];

// Display the product details on the "product.html" page
document.getElementById("MainImg").src = selectedProduct.imgUrl;
document.getElementById("MainImg").alt = selectedProduct.imgAlt;
document.querySelector(".single-pro-details h6").textContent = selectedProduct.category;
document.querySelector(".single-pro-details h4").textContent = selectedProduct.name;
document.querySelector(".single-pro-details h2").textContent = selectedProduct.price;
document.querySelector(".single-pro-details span.detailUl ul").innerHTML = `
    <li>Viscose</li>
    <li>Straight design</li>
    <li>All-over Pattern</li>
    <li>Decorative detailing</li>              
    <li>Fully fashioned</li>
     <li>Soft feel</li>
     <li>Fit: Narrow fit</li>
     <li>The model is 1.76m tall and is wearing size S</li>
`;
const smallImgElements = document.querySelectorAll(".small-img");
smallImgElements[0].src = selectedProduct.smallImg1;
smallImgElements[1].src = selectedProduct.smallImg2;
smallImgElements[2].src = selectedProduct.smallImg3;
// Helper function to get query parameters
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}






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
  console.log("Product Index:", productIndex);
  console.log("Selected Product:", selectedProduct);

  // Get the current cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the selected product is already in the cart
  const existingItemIndex = cartItems.findIndex(
    (item) => item.id === selectedProduct.id
  );
console.log('existing item index', existingItemIndex)
if (existingItemIndex >= 0) {
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



// const hamburger = document.querySelector(".hamburger");
// const miniMenu = document.querySelector(".miniMenu");
// hamburger.onclick = function() {
//   const navBar= document.querySelector('.nav-bar')
//     navBar.classList.toggle("actively");
//     miniMenu.classList.toggle("actively");
//   //   const miniMenu = document.querySelector('.miniMenu');
//   // miniMenu.classList.toggle("miniMenu-active");

// }