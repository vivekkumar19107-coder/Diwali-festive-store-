let cartCount = 0, cartTotal = 0;

function addToCart(name, price) {
  cartCount++;
  cartTotal += price;

  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("cartTotal").textContent = cartTotal;

  alert(name + " cart में जोड़ दिया गया! 🛒");
}
