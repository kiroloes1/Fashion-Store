let productDisplay=document.getElementsByClassName("container")[0];
let NewproductDisplay=document.getElementsByClassName("container")[1];
let menuDown=document.getElementsByClassName("down-menu")[0];

let menu=document.querySelector(".fa-square-caret-down");
let pop=document.getElementsByClassName("cart")[0];
console.log(pop)

function Menu(){
  menuDown.classList.add("toggle");

  if (menu.classList.contains("fa-square-caret-down")) {
    // إذا كانت الأيقونة تشير إلى "سهم لأسفل"، اعرض القائمة وبدّل الأيقونة
    menuDown.classList.remove("toggle");
    menu.classList.remove("fa-square-caret-down");
    menu.classList.add("fa-square-caret-up");
  } else {
   
    menuDown.classList.add("toggle");
    menu.classList.remove("fa-square-caret-up");
    menu.classList.add("fa-square-caret-down");
  }
}

  


let products = [
  {image:"./img/products/n8.jpg" , name: "Cartoon Astronaut T-shirt", price: 78 ,num:1 },
  {image:"./img/products/n7.jpg" , name: "Retro Space Hoodie", price: 120       ,num:1  },
  {image:"./img/products/n6.jpg" , name: "Minimal Moon Tee", price: 65          ,num:1  },
  {image:"./img/products/n5.jpg" , name: "Galaxy Print Sweatshirt", price:95    ,num:1  },
  {image:"./img/products/n4.jpg" , name: "Astronaut Mug", price: 35             ,num:1  },
  {image:"./img/products/n3.jpg" , name: "Black Hole Cap", price: 40            ,num:1   },
  {image:"./img/products/n2.jpg" , name: "Cosmic Socks Set", price: 25          ,num:1    },
  {image:"./img/products/n1.jpg" , name: "Nebula Oversized Tee", price: 85      ,num:1   },

];

let newProducts = [
  { image: "./img/products/f8.jpg", name: "Galaxy Rider T-shirt", price: 89 ,num:1},
  { image: "./img/products/f7.jpg", name: "Moonwalk Graphic Tee", price: 75 ,num:1},
  { image: "./img/products/f6.jpg", name: "Orbit Explorer Shirt", price: 99 ,num:1},
  { image: "./img/products/f5.jpg", name: "Starfield Casual Tee", price: 69 ,num:1},
  { image: "./img/products/f4.jpg", name: "Astronaut Drift T-shirt", price: 80 ,num:1},
  { image: "./img/products/f3.jpg", name: "Planet Hopper Tee", price: 72       ,num:1},
  { image: "./img/products/f2.jpg", name: "Rocket Journey T-shirt", price: 95  ,num:1},
  { image: "./img/products/f1.jpg", name: "Solar System T-shirt", price: 85    ,num:1}

];


function dispalyProduct(){
    let productCard=``;
    let newProductCard=``;
products.forEach((product,i)=>{
    productCard+=`
            <div class="card">
           <a onclick="getIndex(${i},-1)" href="selectProduct.html"> <img src=${product.image} alt="product-image" /></a>
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
              <i onclick="getIndex2(${i},-1); pop2()" class="fa-solid fa-cart-plus"></i>
            </div>
            </div>
          </div>
    `
});

newProducts.forEach((newProduct,x) => {
    newProductCard += `
        <div class="card">
           <a onclick="getIndex(-1,${x})" href="selectProduct.html"> <img src=${newProduct.image} alt="product-image" /></a>
            <div  class="text-inner-card">
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
                    <i onclick="getIndex2(-1,${x}); pop2()" class="fa-solid fa-cart-plus"></i>
                </div>
            </div>
        </div>
    `;
});

productDisplay.innerHTML=productCard;
NewproductDisplay.innerHTML=newProductCard;
}

dispalyProduct();


  let cartList=[];

function getIndex(i,x){
localStorage.setItem("i",i);
localStorage.setItem("w",x);
}


function getIndex2(i,x){
  if(i !== -1 && !isNaN(i)) {
  console.log("add from part1");
  cartList=JSON.parse(localStorage.getItem("cartList"))||[] ;
  cartList.push((products[i]));
  localStorage.setItem("cartList",JSON.stringify(cartList));

  }
  else if(x !== -1 && !isNaN(x)){
  console.log("add from part2");
   cartList=JSON.parse(localStorage.getItem("cartList")) ;
  cartList.push((newProducts[x]));
  localStorage.setItem("cartList",JSON.stringify(cartList));
  }
}

function pop2(){
  
  // أولاً: بعد ثانيتين من الضغط على الزر، تظهر الـ popup
  setTimeout(function () {
    pop.style.display = "flex";

    // ثانياً: بعد ثانيتين من ظهورها، تختفي
    setTimeout(function () {
      pop.style.display = "none";
    }, 2000);

  }, 0);
}










