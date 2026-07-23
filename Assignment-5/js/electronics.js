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
  {
    name: "Mechanical Keyboard",
    price: 89,
    image: "image/electronics5.jpg",
    description: "Mechanical keyboard with colorful RGB lighting.",
  },
  {
    name: "Laptop",
    price: 35,
    image: "image/electronics6.jpg",
    description: "Powerful laptop for students, office work, and gaming.",
  },
  {
    name: "Power Bank",
    price: 45,
    image: "image/electronics7.jpg",
    description: "10000mAh fast charging power bank for smartphones.",
  },
  {
    name: "USB Hub",
    price: 25,
    image: "image/electronics8.jpg",
    description: "4-Port USB hub with high-speed data transfer.",
  },
  {
    name: "Webcam",
    price: 75,
    image: "image/electronics9.jpg",
    description: "HD webcam perfect for online meetings and streaming.",
  },
  {
    name: "Wireless Charger",
    price: 29,
    image: "image/electronics14.jpg",
    description: "Fast wireless charging pad compatible with all Qi devices.",
  },
  {
    name: "Action Camera",
    price: 159,
    image: "image/electronics13.jpg",
    description: "4K waterproof action camera for adventures.",
  },
  {
    name: "Drone",
    price: 399,
    image: "image/electronics12.jpg",
    description: "HD camera drone with GPS and intelligent flight modes.",
  },
  {
    name: "Smart TV",
    price: 599,
    image: "image/electronics11.jpg",
    description: "43-inch 4K Ultra HD Smart TV with Android system.",
  },
  {
    name: "Headphones",
    price: 89,
    image: "image/electronics10.jpg",
    description: "Over-ear wireless headphones with rich sound quality.",
  },
  {
    name: "Digital Camera",
    price: 499,
    image: "image/electronics18.jpg",
    description: "Professional digital camera with 24MP sensor.",
  },
  {
    name: "VR Headset",
    price: 299,
    image: "image/electronics17.jpg",
    description: "Immersive virtual reality headset for gaming.",
  },
  {
    name: "Smartphone",
    price: 699,
    image: "image/electronics16.jpg",
    description: "Latest smartphone with AMOLED display and fast processor.",
  },
  {
    name: "Apple watch",
    price: 999,
    image: "image/electronics15.jpg",
    description:
      "Stay connected, healthy, and stylish with the powerful Apple Watch..",
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
