const products = [
  {
    name: "Black Lace Midi Dress",
    price: 99,
    image: "image/fashion1.png",
    description:
      "Elegant black lace midi dress with a flowy pleated skirt, perfect for parties and formal occasions.",
  },
  {
    name: "Floral Belted Maxi Dress",
    price: 49,
    image: "image/fashion2.png",
    description:
      "Stylish floral print maxi dress featuring a fitted waist belt for a modern and graceful look.",
  },
  {
    name: "Colorful Striped Maxi Dress",
    price: 69,
    image: "image/fashion3.png",
    description:
      "Vibrant striped maxi dress with a flowing design, offering comfort and effortless everyday style.",
  },
  {
    name: "Silver Wrap Mini Dress",
    price: 39,
    image: "image/fashion4.png",
    description:
      "A chic sleeveless wrap mini dress with a flattering fit, perfect for casual outings and evening events.",
  },
  {
    name: "Red Floral Midi Dress",
    price: 89,
    image: "image/fashion5.png",
    description:
      "An elegant floral print midi dress with long sleeves, offering a timeless and graceful look.",
  },
  {
    name: "Pink Floral Maxi Dress",
    price: 35,
    image: "image/fashion6.png",
    description:
      "A beautiful off-shoulder floral maxi dress with a flowing silhouette, ideal for weddings and summer occasions.",
  },
  {
    name: "Blush Off-Shoulder Maxi Dress",
    price: 45,
    image: "image/fashion7.png",
    description:
      "A graceful off-shoulder maxi dress with a flowing silhouette, perfect for summer outings and special occasions.",
  },
  {
    name: "Elegant Black Evening Gown",
    price: 25,
    image: "image/fashion8.png",
    description:
      "A sophisticated full-length black gown with a timeless design, ideal for formal events and evening parties.",
  },
  {
    name: "Coral Chiffon Maxi Dress",
    price: 75,
    image: "image/fashion9.png",
    description:
      "A lightweight chiffon maxi dress with a vibrant coral color, offering elegance and comfort for any celebration.",
  },
  {
    name: "Pink Maxi Dress",
    price: 199,
    image: "image/fashion10.png",
    description:
      "A graceful flowing pink maxi dress, perfect for parties and special occasions.",
  },
  {
    name: "Navy Blue Business Suit",
    price: 249,
    image: "image/fashion11.jpg",
    description:
      "A modern slim-fit navy suit designed for a sharp and professional look.",
  },
  {
    name: "Black Turtleneck Blazer Outfit",
    price: 29,
    image: "image/fashion12.jpg",
    description:
      "A stylish black blazer with a turtleneck for a sleek and sophisticated appearance.",
  },
  {
    name: "Charcoal Three-Piece Suit",
    price: 159,
    image: "image/fashion13.jpg",
    description:
      "A classic three-piece suit designed for elegance and formal events.",
  },
  {
    name: "Casual Streetwear Outfit",
    price: 399,
    image: "image/fashion14.jpg",
    description: "A relaxed and trendy outfit for everyday casual wear.",
  },
  {
    name: "White Summer Co-ord Set",
    price: 599,
    image: "image/fashion15.jpg",
    description:
      "A lightweight matching set ideal for a fresh and comfortable style.",
  },
  {
    name: "Classic Yellow T-Shirt",
    price: 89,
    image: "image/fashion16.jpg",
    description: "A soft cotton t-shirt perfect for casual everyday wear.",
  },
  {
    name: "Checked Overshirt Outfit",
    price: 499,
    image: "image/fashion17.jpg",
    description:
      "A fashionable checked overshirt layered for a smart casual look.",
  },
  {
    name: "Graphic Print T-Shirt",
    price: 299,
    image: "image/fashion18.jpg",
    description:
      "A comfortable printed t-shirt with a modern and trendy design.",
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
