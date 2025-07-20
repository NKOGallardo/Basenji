
// Cart functionality
const cart = [];
const cartButton = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartButton = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");

// Add to cart functionality
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));
      
    cart.push({ name: productName, price: productPrice });
    updateCart();
    showGreenTick(button);
  });
});

// Cart modal open/close
cartButton.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
  renderCart();
});

closeCartButton.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// Update cart display
function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
}

// Render cart items
function renderCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - R${item.price}`;
    cartItems.appendChild(listItem);
  });
}

// Green tick animation for add to cart
function showGreenTick(button) {
  // Create the tick element if not already present
  let tick = button.querySelector(".green-tick");
  if (!tick) {
    tick = document.createElement("span");
    tick.classList.add("green-tick");
    tick.innerHTML = "&#10004;"; // Unicode for check mark
    tick.style.color = "green";
    tick.style.marginLeft = "10px";
    button.appendChild(tick);
  }
  
  // Make tick visible and hide after 1.5 seconds
  tick.style.opacity = "1";
  setTimeout(() => {
    tick.style.opacity = "0";
  }, 1500);
}

// Calculator functionality
window.onload = () => {
  const expressionElement = document.getElementById('expression');
  const resultElement = document.getElementById('result');
  let expression = '';
  let result = '';

  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'Ac') {
        expression = '';
        result = '';
        resultElement.classList.remove('visible');
      } else if (value === '+/-') {
        if (result) {
          result = (-parseFloat(result)).toString();
          resultElement.textContent = `=${result}`;
        } else if (expression) {
          let match = expression.match(/(\d+\.?\d*)$/);
          if (match) {
            let number = match[0];
            let negatedNumber = (-parseFloat(number)).toString();
            expression = expression.slice(0, -number.length) + negatedNumber;
            expressionElement.textContent = expression;
          }
        }
      } else if (value === '%') {
        if (result) {
          result = (parseFloat(result) / 100).toString();
          resultElement.textContent = `=${result}`;
        } else if (expression) {
          let match = expression.match(/(\d+\.?\d*)$/);
          if (match) {
            let number = match[0];
            let percentageNumber = (parseFloat(number) / 100).toString();
            expression = expression.slice(0, -number.length) + percentageNumber;
            expressionElement.textContent = expression;
          }
        }
      } else if (value === '=') {
        try {
          result = eval(expression.replace('x', '*'));
          resultElement.scrollLeft = resultElement.scrollWidth;
          resultElement.classList.add('visible');
        } catch {
          result = 'Error :(';
          resultElement.classList.add('visible');
        }
      } else {
        if (result) {
          expression = result;
          result = '';
          resultElement.classList.remove('visible');
        }
        if (/[\+\-\x\/]$/.test(expression) && /[\+\-\x\/]/.test(value)) {
          expression = expression.slice(0, -1) + value;
        } else {
          expression += value;
        }
      }
      
      expressionElement.textContent = expression;
      resultElement.textContent = result ? `=${result}` : '';
      expressionElement.scrollLeft = expressionElement.scrollWidth;
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('open');
    });
  }
});
