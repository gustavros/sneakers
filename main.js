// ! selectors

const cart = document.querySelector(".cart");
const cartContent = document.querySelector(".cart-container");
const decrementButton = document.querySelector(".decrement");
const incrementButton = document.querySelector(".increment");
const addToCartButton = document.querySelector(".add-to-cart");
let quantity = document.querySelector(".quantity").textContent;

// ! Events Listeners

addToCartButton.addEventListener("click", addToCart);
incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

cart.addEventListener("click", () => {
  cartContent.classList.toggle("active");
});

// ! Functions

function increment() {
  quantity++;
  document.querySelector(".quantity").textContent = quantity;
}

function decrement() {
  if (quantity > 1) {
    quantity--;
    document.querySelector(".quantity").textContent = quantity;
  }
}

function addToCart() {
  let priceShoes = 125;

  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  cartItem.innerHTML = `
      <img src="./images/image-product-1.jpg" alt="" >
    <div class="cart-item-info">
      <h1>Fall Limited Edition Sneakers</h1>
      <div class="cart-item-price">
        <p>$${priceShoes} x ${quantity} </p>
        <span>$${priceShoes * quantity}</span>
      </div>
    </div>
    <div class="cart-item-remove">
      <button class="remove-item">
        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
      </button>
    </div>
  `;

  quantity = document.querySelector(".quantity").textContent = 1;
  const removeItemButton = cartItem.querySelector(".remove-item");

  removeItemButton.addEventListener("click", () => {
    cartItem.remove();
  });

  cartContent.classList.add("active");
  cartContent.appendChild(cartItem);
}
