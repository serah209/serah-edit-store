let cartitems = 0;
const button = document.querySelector(".hero-btns");
console.log(button);
const cartSpan = document.getElementById("carts");
const shopNow = document.getElementsByClassName("cart");
console.log(shopNow);
let cartCount = document.getElementById("cart-count");

button.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "#2ecc71";
  event.target.style.fontSize = 36;
  alert("Welcome to the next generation of Nike");
  button.innerText = "Exploring....";
});

const cartBtn = document.querySelectorAll(".cart");
cartBtn.forEach((cartList) => {
  cartList.addEventListener("click", (e) => {
    e.preventDefault();
    cartitems++;
    cartCount.innerText = cartitems;
    const product = cartList.closest(".card-info").getAttribute("data-product");
    console.log(`${product} added to your cart`);
  });
});

//document.addEventListener("DOMContentLoaded", () => {
//const productImages = document.querySelectorAll(".title img");
//productImages.forEach((img) => {
//img.style.cursor = "pointer";
//img.addEventListener("click", () => {
//const listName = img.nextElementSibling.textContent;
//alert(`You have clicked: ${listName}\n\n More details coming soon!`);

//document.getElementById("detail-title").textContent = listName;
//document.getElementById("detail-text").textContent =
//"This is a classic Nike silhouete built for performance and style";
//document.getElementById("item-detail").style.display = "block";
//});
//});
//});

document.addEventListener("DOMContentLoaded", () => {
  const listImages = document.querySelectorAll(".title img");
  const modal = document.getElementById("infoModal");
  const infoText = document.getElementById("infotext");
  const closeBtn = document.getElementById("closeBtn");

  listImages.forEach((img) => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      const info = img.getAttribute("data-info");
      infoText.textContent = info;
      modal.showModal();
    });
  });
  closeBtn.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });
});
