const products = [
  {
    name: "Nike Air Runner",
    price: 99,
    image: "image/Shoes1.jpg",
    description:
      "Step into comfort and style with these premium-quality shoes, designed for everyday wear.",
  },
  {
    name: "Nike Zoom Fly",
    price: 49,
    image: "image/Shoes2.jpg",
    description:
      "Lightweight, durable, and fashionable shoes perfect for any occasion.",
  },
  {
    name: "Nike Revolution",
    price: 69,
    image: "image/Shoes3.jpg",
    description:
      "Experience all-day comfort with stylish shoes crafted for modern living.",
  },
  {
    name: "Nike Air Max",
    price: 39,
    image: "image/Shoes4.jpg",
    description:
      "Premium shoes that combine elegance, comfort, and long-lasting durability.",
  },
  {
    name: "Vans Old Skool",
    price: 89,
    image: "image/Shoes5.jpg",
    description:
      "Designed for maximum comfort and a trendy look, wherever you go.",
  },
  {
    name: "New Balance 574",
    price: 35,
    image: "image/Shoes6.jpg",
    description:
      "Walk with confidence in these stylish and comfortable everyday shoes.",
  },
  {
    name: "Leather Oxford Dress Shoes",
    price: 99,
    image: "image/shoes7.jpg",
    description:
      "Step into comfort and style with these premium-quality shoes, designed for everyday wear.",
  },
  {
    name: "Leather Derby Shoes",
    price: 49,
    image: "image/shoes8.jpg",
    description:
      "Lightweight, durable, and fashionable shoes perfect for any occasion.",
  },
  {
    name: "Lightweight Running Shoes",
    price: 69,
    image: "image/shoes9.jpg",
    description:
      "Experience all-day comfort with stylish shoes crafted for modern living.",
  },
  {
    name: "Casual Walking Shoes",
    price: 39,
    image: "image/shoes10.jpg",
    description:
      "Premium shoes that combine elegance, comfort, and long-lasting durability.",
  },
  {
    name: "Breathable Mesh Sneakers",
    price: 89,
    image: "image/shoes11.jpg",
    description:
      "Designed for maximum comfort and a trendy look, wherever you go.",
  },
  {
    name: "Performance Training Shoes",
    price: 35,
    image: "image/shoes12.jpg",
    description:
      "Walk with confidence in these stylish and comfortable everyday shoes.",
  },
  {
    name: "Cushioned Running Shoes",
    price: 68,
    image: "image/shoes13.jpg",
    description:
      "The perfect blend of fashion, comfort, and performance in every step..",
  },
  {
    name: "Fashion Sneakers",
    price: 40,
    image: "image/shoes14.jpg",
    description:
      "Premium shoes that combine elegance, comfort, and long-lasting durability.",
  },
  {
    name: "Athletic Sports Shoes",
    price: 88,
    image: "image/shoes15.jpg",
    description:
      "Designed for maximum comfort and a trendy look, wherever you go.",
  },
  {
    name: "Gym Training Shoes",
    price: 34,
    image: "image/shoes16.jpg",
    description:
      "Walk with confidence in these stylish and comfortable everyday shoes.",
  },
  {
    name: "Everyday Comfort Shoes",
    price: 69,
    image: "image/shoes17.jpg",
    description:
      "Experience all-day comfort with stylish shoes crafted for modern living.",
  },
  {
    name: "Premium Casual Sneakers",
    price: 39,
    image: "image/shoes18.jpg",
    description:
      "The perfect blend of fashion, comfort, and performance in every step..",
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
