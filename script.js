document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cartBtn");
  const cartSidebar = document.getElementById("cartSidebar");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalDisplay = document.getElementById("cartTotal");

  let cart = [];

  cartBtn.addEventListener("click", () => {
    cartSidebar.classList.toggle("open");
  });

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = parseInt(button.dataset.price);
      cart.push({ name, price });

      updateCart();
    });
  });

  function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const div = document.createElement("div");
      div.textContent = `${item.name} - R${item.price}`;
      cartItemsContainer.appendChild(div);
      total += item.price;
    });

    cartTotalDisplay.textContent = total;
  }
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-theme");
  localStorage.setItem("theme", document.body.classList.contains("light-theme") ? "light" : "dark");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    toggle.checked = true;
  }
});

const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
