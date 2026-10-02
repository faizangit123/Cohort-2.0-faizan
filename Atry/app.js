const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

async function getProduct() {
  const response = await fetch("");
}
const product = await response.json();

product
  .map(
    (product) => `
   <div class='product'>
   <img src="" alt="" />
   <h2>${product.title}</h2>
   <p>${product.price}</p>
   </div>
`,
  )
  .join("");

getProduct();
