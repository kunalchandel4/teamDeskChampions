let cartPro = JSON.parse(localStorage.getItem("cart-page"))
document.querySelector("h5").innerText = cartPro.length;