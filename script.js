let productDisplay=document.getElementsByClassName("container")[0];
let NewproductDisplay=document.getElementsByClassName("container")[1];
console.log(NewproductDisplay)
let products = [
  {image:"./img/products/n8.jpg" , name: "Cartoon Astronaut T-shirt", price: 78 },
  {image:"./img/products/n7.jpg" , name: "Retro Space Hoodie", price: 120 },
  {image:"./img/products/n6.jpg" , name: "Minimal Moon Tee", price: 65 },
  {image:"./img/products/n5.jpg" , name: "Galaxy Print Sweatshirt", price: 95 },
  {image:"./img/products/n4.jpg" , name: "Astronaut Mug", price: 35 },
  {image:"./img/products/n3.jpg" , name: "Black Hole Cap", price: 40 },
  {image:"./img/products/n2.jpg" , name: "Cosmic Socks Set", price: 25 },
  {image:"./img/products/n1.jpg" , name: "Nebula Oversized Tee", price: 85 },

];

let newProducts = [
  { image: "./img/products/f8.jpg", name: "Galaxy Rider T-shirt", price: 89 },
  { image: "./img/products/f7.jpg", name: "Moonwalk Graphic Tee", price: 75 },
  { image: "./img/products/f6.jpg", name: "Orbit Explorer Shirt", price: 99 },
  { image: "./img/products/f5.jpg", name: "Starfield Casual Tee", price: 69 },
  { image: "./img/products/f4.jpg", name: "Astronaut Drift T-shirt", price: 80 },
  { image: "./img/products/f3.jpg", name: "Planet Hopper Tee", price: 72 },
  { image: "./img/products/f2.jpg", name: "Rocket Journey T-shirt", price: 95 },
  { image: "./img/products/f1.jpg", name: "Solar System T-shirt", price: 85 }

];

function dispalyProduct(){
    let productCard=``;
    let newProductCard=``;
products.forEach(product=>{
    productCard+=`
            <div class="card">
            <img src=${product.image} alt="product-image" />
            <div class="text-inner-card">
            <p>odidas</p>
            <h3>${product.name}</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <div class="last-section-card">
              <p>$${product.price}</p>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
            </div>
          </div>
    `
});

newProducts.forEach(newProduct => {
    newProductCard += `
        <div class="card">
            <img src=${newProduct.image} alt="product-image" />
            <div class="text-inner-card">
                <p>odidas</p>
                <h3>${newProduct.name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div class="last-section-card">
                    <p>$${newProduct.price}</p>
                    <i class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
    `;
});

productDisplay.innerHTML=productCard;
NewproductDisplay.innerHTML=newProductCard;
}
dispalyProduct();

