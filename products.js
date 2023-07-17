const products = [
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/blouse1.webp",
    name: "Women Blouse",
    description: "Description 1",
    price: "8.95€",
    marja: "p10",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/coat1.webp",
    name: "Women Coat",
    description: "Description 1",
    price: "39.95€",
    marja: "p40",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/dress1.webp",
    name: "Women Dress",
    description: "Description 1",
    price: "34.75€",
    marja: "p20",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/hoodie1.webp",
    name: "Women Hoodie",
    description: "Description 1",
    price: "18.95€",
    marja: "p20",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/jeans1.webp",
    name: "Women Jeans",
    description: "Description 1",
    price: "33.55€",
    marja: "p30",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/skirt1.webp",
    name: "Women Skirt",
    description: "Description 1",
    price: "9.99€",
    marja: "p10",
  },
  {
    category: "women-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesW/tshirt1.webp",
    name: "Women T-Shirt",
    description: "Description 1",
    price: "21.55€",
    marja: "p20",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/camasa1.webp",
    name: "Men Shirt",
    description: "Description 1",
    price: "12.05€",
    marja: "p10",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/coat1.webp",
    name: "Men Coat",
    description: "Description 1",
    price: "37.55€",
    marja: "p40",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/han1.webp",
    name: "Men Hoodie",
    description: "Description 1",
    price: "38.85€",
    marja: "p30",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/jeans1.webp",
    name: "Men Jeans",
    description: "Description 1",
    price: "29.99€",
    marja: "p20",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/shorts1.webp",
    name: "Men Shorts",
    description: "Description 1",
    price: "24.55€",
    marja: "p20",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/tshirt1.webp",
    name: "Men T-Shirt",
    description: "Description 1",
    price: "40.55€",
    marja: "p40",
  },
  {
    category: "men-clothing",
    imgAlt: "productImg",
    imgUrl: "assets/products/clothesM/suit1.webp",
    name: "Men Suit",
    description: "Description 1",
    price: "124.55€",
    marja: "p50",
  },

  {
    category: "women-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesW/botine1.webp",
    name: "Women Ankle Boots",
    description: "Description 1",
    price: "160.55€",
    marja: "p50",
  },
  {
    category: "women-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesW/cizme1.webp",
    name: "Women Boots",
    description: "Description 1",
    price: "270.55€",
    marja: "p50",
  },
  {
    category: "women-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesW/espadrile1.webp",
    name: "Women Flats",
    description: "Description 1",
    price: "30.55€",
    marja: "p30",
  },
  {
    category: "women-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesW/sandal.webp",
    name: "Women Sandals",
    description: "Description 1",
    price: "173.55€",
    marja: "p50",
  },
  {
    category: "women-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesW/shoe3-1.webp",
    name: "Women Sport Shoes",
    description: "Description 1",
    price: "77.55€",
    marja: "p50",
  },
  {
    category: "men-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesM/bocanci1-2.webp",
    name: "Men Boots",
    description: "Description 1",
    price: "30.55€",
  },
  {
    category: "men-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesM/papcasa.webp",
    name: "Men Slippers",
    description: "Description 1",
    price: "18.55€",
    marja: "p20",
  },
  {
    category: "men-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesM/shoe1-1.jpeg",
    name: "Men Sport Shoes",
    description: "Description 1",
    price: "230.55€",
    marja: "p50",
  },
  {
    category: "men-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesM/shoe2.webp",
    name: "Men Sport Shoes",
    description: "Description 1",
    price: "240.55€",
    marja: "p50",
  },
  {
    category: "men-shoes",
    imgAlt: "productImg",
    imgUrl: "assets/products/shoesM/shoes4-2.webp",
    name: "Men Flats",
    description: "Description 1",
    price: "29.55€",
    marja: "p10",
  },
  {
    category: "kids-f",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/fete/dress1.webp",
    name: "Girls Dress",
    description: "Description 1",
    price: "33.55€",
    marja: "p30",
  },
  {
    category: "kids-f",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/fete/hoodie1.webp",
    name: "Girls Hoodie",
    description: "Description 1",
    price: "90.55€",
    marja: "p50",
  },
  {
    category: "kids-f",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/fete/skirt1.webp",
    name: "Girls Skirt",
    description: "Description 1",
    price: "32.55€",
    marja: "p30",
  },
  {
    category: "kids-f",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/fete/tshirt1.webp",
    name: "Girls T-Shirt",
    description: "Description 1",
    price: "30.55€",
    marja: "p30",
  },
  {
    category: "kids-f",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/fete/sportF.webp",
    name: "Girls Sport Shoes",
    description: "Description 1",
    price: "42.55€",
    marja: "p40",
  },
  {
    category: "kids-b",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/baieti/camasa1.webp",
    name: "Boys Shirt",
    description: "Description 1",
    price: "8.55€",
    marja: "p10",
  },
  {
    category: "kids-b",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/baieti/pant1.webp",
    name: "Boys Pants",
    description: "Description 1",
    price: "17.55€",
    marja: "p20",
  },
  {
    category: "kids-b",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/baieti/shorts1.webp",
    name: "Boys Shorts",
    description: "Description 1",
    price: "9.55€",
    marja: "p10",
  },
  {
    category: "kids-b",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/baieti/tshirt1.webp",
    name: "Boys T-Shirt",
    description: "Description 1",
    price: "30.55€",
    marja: "p30",
  },
  {
    category: "kids-b",
    imgAlt: "productImg",
    imgUrl: "assets/products/kids/baieti/shoes1.webp",
    name: "Boys Sport Shoes",
    description: "Description 1",
    price: "40.55€",
    marja: "p40",
  },
  {
    category: "bags",
    imgAlt: "productImg",
    imgUrl: "assets/products/bags/bag1.webp",
    name: "Bag",
    description: "Description 1",
    price: "330.55€",
    marja: "p50",
  },
  {
    category: "bags",
    imgAlt: "productImg",
    imgUrl: "assets/products/bags/ruc1.webp",
    name: "Backpack",
    description: "Description 1",
    price: "296.55€",
    marja: "p50",
  },
  {
    category: "bags",
    imgAlt: "productImg",
    imgUrl: "assets/products/bags/sport1.webp",
    name: "Sports Bag",
    description: "Description 1",
    price: "80.55€",
    marja: "p50",
  },
  {
    category: "bags",
    imgAlt: "productImg",
    imgUrl: "assets/products/bags/suitc1.webp",
    name: "Suitcase",
    description: "Description 1",
    price: "49.55",
    marja: "p40",
  },
];

// const productsPerPage = 6; // Number of products to display per page
// let currentPage = 1;
// let selectedCategory = "all"; // Initialize with "all" to show all products initially
// let selectedMarja = "all"; // Initialize with "all" to show all products initially

// function renderProductList(products) {
//   const productListElement = document.getElementById("productList");
//   productListElement.innerHTML = "";

//   const startIndex = (currentPage - 1) * productsPerPage;
//   const endIndex = startIndex + productsPerPage;
//   const currentProducts = products.slice(startIndex, endIndex);
//   currentProducts.forEach(function (product) {
//     const divElement = document.createElement("div");
//     divElement.classList.add("products");

//     const linkElement = document.createElement("a");
//     linkElement.href = "";

//     const imgElement = document.createElement("img");
//     imgElement.classList.add("imgProd");
//     imgElement.src = product.imgUrl;
//     imgElement.alt = product.imgAlt;

//     linkElement.appendChild(imgElement);

//     const titleElement = document.createElement("h3");
//     titleElement.classList.add("mainLinks");
//     const titleLinkElement = document.createElement("a");
//     titleLinkElement.href = "";
//     titleLinkElement.textContent = product.name;
//     titleElement.appendChild(titleLinkElement);

//     const priceElement = document.createElement("div");
//     priceElement.classList.add("currentP");
//     priceElement.textContent = product.price;

//     divElement.appendChild(linkElement);
//     divElement.appendChild(titleElement);
//     divElement.appendChild(priceElement);

//     productListElement.appendChild(divElement);
//   });
//   renderPagination(products.length, selectedCategory);
// }

// function renderPagination(totalProducts, category) {
//   const totalPages = Math.ceil(totalProducts / productsPerPage);

//   const paginationContainer = document.getElementById("paginationContainer");
//   paginationContainer.innerHTML = "";

//   for (let page = 1; page <= totalPages; page++) {
//     const pageLink = document.createElement("a");
//     pageLink.href = "#";
//     pageLink.textContent = page;

//     if (page === currentPage) {
//       pageLink.classList.add("active");
//     }

//     pageLink.addEventListener("click", function () {
//       currentPage = page;
//       renderProductList(filterProductsByCategory());
//     });

//     paginationContainer.appendChild(pageLink);
//   }
// }

// function filterProducts(category) {
//   currentPage = 1;
//   selectedCategory = category;
//   renderProductList(filterProductsByCategory());

//   // Update the button styling
//   const categoryButtons = document.querySelectorAll(".category-button");
//   categoryButtons.forEach(button => {
//     if (button.id === category ) {
//       button.style.backgroundColor = "green";
//     } else {
//       button.style.backgroundColor = "";
//     }
//   });
//   const marjaButtons = document.querySelectorAll(".marja-button");
//   marjaButtons.forEach(button => {
//     if (button.dataset.marja === marja) {
//       button.classList.add("active");
//     } else {
//       button.classList.remove("active");
//     }
//   });
// }

// function filterProductsByCategory() {
//   return products.filter((product) => {
//     if (selectedCategory === "all" && selectedMarja === "all") {
//       return true; // Show all products if both category and marja are "all"
//     } else if (selectedCategory === "all") {
//       return product.marja === selectedMarja; // Filter by marja only
//     } else if (selectedMarja === "all") {
//       return product.category === selectedCategory; // Filter by category only
//     } else {
//       return (
//         product.category === selectedCategory && product.marja === selectedMarja
//       ); // Filter by both category and marja
//     }
//   });
// }
// function filterProductsByMarja(marja) {
//   currentPage = 1;
//   selectedCategory = "all"; // Reset the selected category
//   selectedMarja = marja; // Update the selected marja
//   renderProductList(filterProductsByCategory());
// }

// renderProductList(filterProductsByCategory());

const productsPerPage = 6; // Number of products to display per page
let currentPage = 1;
let selectedCategory = "all"; // Initialize with "all" to show all products initially
let selectedMarja = "all"; // Initialize with "all" to show all products initially

function renderProductList(products) {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = "";

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);
  currentProducts.forEach(function (product) {
    const divElement = document.createElement("div");
    divElement.classList.add("products");

    const linkElement = document.createElement("a");
    linkElement.href = "";

    const imgElement = document.createElement("img");
    imgElement.classList.add("imgProd");
    imgElement.src = product.imgUrl;
    imgElement.alt = product.imgAlt;

    linkElement.appendChild(imgElement);

    const titleElement = document.createElement("h3");
    titleElement.classList.add("mainLinks");
    const titleLinkElement = document.createElement("a");
    titleLinkElement.href = "";
    titleLinkElement.textContent = product.name;
    titleElement.appendChild(titleLinkElement);

    const priceElement = document.createElement("div");
    priceElement.classList.add("currentP");
    priceElement.textContent = product.price;

    divElement.appendChild(linkElement);
    divElement.appendChild(titleElement);
    divElement.appendChild(priceElement);

    productListElement.appendChild(divElement);
  });
  renderPagination(products.length, selectedCategory);
}

function renderPagination(totalProducts, category) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = "";

  for (let page = 1; page <= totalPages; page++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = page;

    if (page === currentPage) {
      pageLink.classList.add("active");
    }

    pageLink.addEventListener("click", function () {
      currentPage = page;
      renderProductList(filterProductsByCategory());
    });

    paginationContainer.appendChild(pageLink);
  }
}

function filterProducts(category) {
  currentPage = 1;
  selectedCategory = category;
  renderProductList(filterProductsByCategory());
}

function filterProductsByCategory() {
  return products.filter((product) => {
    if (selectedCategory === "all" && selectedMarja === "all") {
      return true; // Show all products if both category and marja are "all"
    } else if (selectedCategory === "all") {
      return product.marja === selectedMarja; // Filter by marja only
    } else if (selectedMarja === "all") {
      return product.category === selectedCategory; // Filter by category only
    } else {
      return (
        product.category === selectedCategory && product.marja === selectedMarja
      ); // Filter by both category and marja
    }
  });
}
function filterProductsByMarja(marja) {
  currentPage = 1;
  selectedCategory = "all"; // Reset the selected category
  selectedMarja = marja; // Update the selected marja
  renderProductList(filterProductsByCategory());
}

renderProductList(filterProductsByCategory());
