const products = [
  {
    name: "Smart Watch",
    price: 99,
    image: "image/electronics1.jpg",
    description:
      "Premium smartwatch with fitness tracking and heart rate monitoring.",
  },
  {
    name: "Wireless Earbuds",
    price: 49,
    image: "image/electronics2.jpg",
    description: "Noise cancelling wireless earbuds with crystal clear sound.",
  },
  {
    name: "Bluetooth Speaker",
    price: 69,
    image: "image/electronics3.jpg",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
  },
  {
    name: "Gaming Mouse",
    price: 39,
    image: "image/electronics4.jpg",
    description: "RGB gaming mouse with adjustable DPI and ergonomic design.",
  },
];

let html = "";

let container = document.getElementById("product");

for (let i = 0; i < products.length; i++) {
  html += `
    <div class="item">

        <img src="${products[i].image}" alt="${products[i].name}">

        <div class="content">
            <p class="price">$${products[i].price}</p>

            <h3>${products[i].name}</h3>

            <p class="desc">
                ${products[i].description.slice(0, 60)}...
            </p>
   <div class="rating">
                ⭐⭐⭐⭐☆
            </div>

            <button>Order Now</button>
        </div>

    </div>
    `;
}

container.innerHTML = html;
