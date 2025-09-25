var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartvalue = document.querySelector(".cart-value");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bars = document.querySelector(".fa-bars");

cartIcon.addEventListener("click", () =>
  cartTab.classList.add("cart-tab-active")
);
closeBtn.addEventListener("click", () =>
  cartTab.classList.remove("cart-tab-active")
);
hamburger.addEventListener("click", () =>
  mobileMenu.classList.toggle("mobile-menu-active")
);
hamburger.addEventListener("click", () => bars.classList.toggle("fa-xmark"));

let productList = [];
let cartProduct = [];

const updateTotals = () => {
  let totalPrice = 0;
  let totalQuantity = 0;

  document.querySelectorAll(".item").forEach((item) => {
    const quantity = parseInt(
      item.querySelector(".quantity-value").textContent
    );
    const price = parseFloat(
      item.querySelector(".price").textContent.replace("$", "")
    );
    totalPrice += price;
    totalQuantity += quantity;
  });
  cartTotal.textContent = `${totalPrice.toFixed(2)}`;
  cartvalue.textContent = totalQuantity;
};

const showCards = () => {
  productList.forEach((product) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    orderCard.innerHTML = `
      <div class="card-img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.price}</h4>
      <a href="#" class="btn card-btn">Add to cart</a>
    `;

    cardList.appendChild(orderCard);
    const cardBtn = orderCard.querySelector(".card-btn");
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(product);
    });
  });
};

const addToCart = (product) => {
  const existingProduct = cartProduct.find((item) => item.id == product.id);
  if (existingProduct) {
    alert("itemm present");
    return;
  }
  cartProduct.push(product);
  let quantity = 1;
  let price = parseFloat(product.price.replace("$", ""));

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");
  cartItem.innerHTML = `
    <img src="${product.image}" alt="Not found" class="item-img" />
    <div class="item-info">
        <h4>${product.name}</h4>
        <p class="price">${product.price}</p>
    </div>
    <div class="quantity">
        <a href="#" class="quantity-btn">
            <i class="fa-solid fa-minus minus"></i>
       </a>
    <span class="quantity-value">${quantity}</span>
    <a href="#" class="quantity-btn">
        <i class="fa-solid fa-plus plus"></i>
    </a>
    </div>`;

  cartList.appendChild(cartItem);
  updateTotals();
  const plusBtn = cartItem.querySelector(".plus");
  const quantityValue = cartItem.querySelector(".quantity-value");
  const itemTotal = cartItem.querySelector(".price");
  const minusBtn = cartItem.querySelector(".minus");

  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
    updateTotals();
  });

  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
      updateTotals();
    } else {
      cartItem.remove();
      cartProduct = cartProduct.filter((item) => item.id !== product.id);
      updateTotals();
    }
  });
};

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data;
      showCards();
    });
};
initApp();
