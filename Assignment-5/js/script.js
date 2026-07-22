const products = [
  {
    id : 1,
    name: "Majestic Audio Pro",
    image: "images/product1.png",
    price: "Rs.26,959"
  },
  {
    id :2,
    name: "Pebble Earbuds",
    image: "images/product2.png",
    price: "Rs.6,995"
  },
  {
    id :3,
    name: "Aqua Power Bank",
    image: "image/Aqua-Power-Bank.png",
    price: "Rs.7,975"
  },
  {
    id :4,
    name: "Lucid Earbuds",
    image: "images/product4.png",
    price: "Rs.6,595"
  },
  {
    id :5,
    name: "Smart Watch",
    image: "images/product5.png",
    price: "Rs.8,999"
  },
  {
    id :6,
    name: "Bluetooth Speaker",
    image: "images/product6.png",
    price: "Rs.5,299"
  },
  {
    id :7,
    name: "Wireless Mouse",
    image: "images/product7.png",
    price: "Rs.2,999"
  }
];

let html = '';

let container = document.getElementById('product');

for(let i=0; i<products.length; i++){

  html += `
   <div class="item">
   
    <img src="${products[i].image}" alt="">

    <div class="content">
      <p class="price">$ ${products[i].price}</p>
      <h3> ${products[i].name} </h3>
      <p class="desc"> ${products[i].description.slice(0,56)} </p>
      <button>Order Now</button>
    </div>

  </div>
  
  `
}

container.innerHTML = html;