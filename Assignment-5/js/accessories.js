

const products = [
{
    name: "Smart Watch",
    price: 99,
    image: "image/watch1.jpg",
    description: "Premium smartwatch with fitness tracking and heart rate monitoring."
},
{
    name: "Wireless Earbuds",
    price: 49,
    image: "image/earbuds1.jpg",
    description: "Noise cancelling wireless earbuds with crystal clear sound."
},
{
    name: "Bluetooth Speaker",
    price: 69,
    image: "image/speaker1.jpg",
    description: "Portable Bluetooth speaker with deep bass and long battery life."
},
{
    name: "Gaming Mouse",
    price: 39,
    image: "image/mouse1.jpg",
    description: "RGB gaming mouse with adjustable DPI and ergonomic design."
},
{
    name: "Mechanical Keyboard",
    price: 89,
    image: "image/keyboard1.jpg",
    description: "Mechanical keyboard with colorful RGB lighting."
},
{
    name: "Laptop Stand",
    price: 35,
    image: "image/stand1.jpg",
    description: "Aluminum laptop stand for better posture and cooling."
},
{
    name: "Power Bank",
    price: 45,
    image: "image/powerbank1.jpg",
    description: "10000mAh fast charging power bank for smartphones."
},
{
    name: "USB Hub",
    price: 25,
    image: "image/hub1.jpg",
    description: "4-Port USB hub with high-speed data transfer."
},
{
    name: "Webcam",
    price: 75,
    image: "image/webcam1.jpg",
    description: "HD webcam perfect for online meetings and streaming."
},
{
    name: "Monitor",
    price: 199,
    image: "image/monitor1.jpg",
    description: "24-inch Full HD IPS monitor with vibrant display."
},
{
    name: "Tablet",
    price: 249,
    image: "image/tablet1.jpg",
    description: "Android tablet with 10-inch display and powerful processor."
},
{
    name: "Wireless Charger",
    price: 29,
    image: "image/charger1.jpg",
    description: "Fast wireless charging pad compatible with all Qi devices."
},
{
    name: "Action Camera",
    price: 159,
    image: "image/camera1.jpg",
    description: "4K waterproof action camera for adventures."
},
{
    name: "Drone",
    price: 399,
    image: "image/drone1.jpg",
    description: "HD camera drone with GPS and intelligent flight modes."
},
{
    name: "Smart TV",
    price: 599,
    image: "image/tv1.jpg",
    description: "43-inch 4K Ultra HD Smart TV with Android system."
},
{
    name: "Headphones",
    price: 89,
    image: "image/headphone1.jpg",
    description: "Over-ear wireless headphones with rich sound quality."
},
{
    name: "Digital Camera",
    price: 499,
    image: "image/digitalcamera1.jpg",
    description: "Professional digital camera with 24MP sensor."
},
{
    name: "VR Headset",
    price: 299,
    image: "image/vr1.jpg",
    description: "Immersive virtual reality headset for gaming."
},
{
    name: "Smartphone",
    price: 699,
    image: "image/phone1.jpg",
    description: "Latest smartphone with AMOLED display and fast processor."
},
{
    name: "Laptop",
    price: 999,
    image: "image/laptop1.jpg",
    description: "Powerful laptop for students, office work, and gaming."
},
{
    name: "Laptop",
    price: 999,
    image: "image/laptop1.jpg",
    description: "Powerful laptop for students, office work, and gaming."
}
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