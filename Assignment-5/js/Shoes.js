

const products = [
{
    name: "Shoes",
    price: 99,
    image: "image/Shoes1.jpg",
    description: "Step into comfort and style with these premium-quality shoes, designed for everyday wear."
},
{
    name: "Shoes",
    price: 49,
    image: "image/Shoes2.jpg",
    description: "Lightweight, durable, and fashionable shoes perfect for any occasion."
},
{
    name: "Shoes",
    price: 69,
    image: "image/Shoes3.jpg",
    description: "Experience all-day comfort with stylish shoes crafted for modern living."
},
{
    name: "Shoes",
    price: 39,
    image: "image/Shoes4.jpg",
    description: "Premium shoes that combine elegance, comfort, and long-lasting durability."
},
{
    name: "Shoes",
    price: 89,
    image: "image/Shoes5.jpg",
    description: "Designed for maximum comfort and a trendy look, wherever you go."
},
{
    name: "Shoes",
    price: 35,
    image: "image/Shoes6.jpg",
    description: "Walk with confidence in these stylish and comfortable everyday shoes."
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