const products = [
  {
    name: "Teddy Bear",
    price: 99,
    image: "image/toys1.jpg",
    description: "A soft and cuddly plush teddy bear perfect for kids.",
  },
  {
    name: "Wooden Stacking Rings",
    price: 49,
    image: "image/toys2.jpg",
    description: "A colorful stacking toy that helps develop motor skills.",
  },
  {
    name: "Wooden Train Set",
    price: 69,
    image: "image/toys3.jpg",
    description: "A fun wooden train toy that encourages imaginative play.",
  },
  {
    name: "Building Blocks",
    price: 39,
    image: "image/toys5.jpg",
    description:
      "Colorful building blocks for creative construction and learning.",
  },
  {
    name: "Colorful Ball Pit Balls",
    price: 89,
    image: "image/toys6.jpg",
    description: "Bright plastic balls ideal for active indoor play.",
  },
  {
    name: "Soccer Ball",
    price: 35,
    image: "image/toys7.jpg",
    description: "A durable football designed for fun outdoor games.",
  },
  {
    name: "Wooden Abacus",
    price: 45,
    image: "image/toys8.jpg",
    description: "A classic counting toy that helps children learn basic math.",
  },
  {
    name: "Remote Control Sports Car",
    price: 25,
    image: "image/toys9.jpg",
    description: "A fast RC car for exciting racing fun.",
  },
  {
    name: "Bicycle",
    price: 75,
    image: "image/toys10.jpg",
    description:
      "A lightweight bicycle that helps children improve balance and coordination.",
  },
  {
    name: "Toy Sports Car",
    price: 199,
    image: "image/toys11.jpg",
    description: "A stylish miniature sports car for imaginative play.",
  },
  {
    name: "Toy Car",
    price: 249,
    image: "image/toys12.jpg",
    description:
      "A realistic miniature car designed for fun, imaginative, and interactive play.",
  },
  {
    name: "Rag Doll",
    price: 29,
    image: "image/toys14.jpg",
    description: "A soft cloth doll that makes a lovable play companion.",
  },
  {
    name: "Princess Doll",
    price: 159,
    image: "image/toys15.jpg",
    description:
      "A beautiful doll in a princess dress for imaginative storytelling.",
  },
  {
    name: "Plush Teddy Bear",
    price: 399,
    image: "image/toys16.jpg",
    description: "A soft and cuddly teddy bear perfect for hugs and playtime.",
  },
  {
    name: "Fashion Doll",
    price: 599,
    image: "image/toys17.jpg",
    description: "A stylish doll designed for imaginative role-playing.",
  },
  {
    name: "Baby Doll",
    price: 89,
    image: "image/toys18.jpg",
    description: "A cute baby doll that encourages nurturing and pretend play.",
  },
  {
    name: "Toy Airplane",
    price: 499,
    image: "image/toys19.jpg",
    description: "A colorful airplane toy for fun and imaginative adventures.",
  },
  {
    name: "Squishy Stress Balls",
    price: 299,
    image: "image/toys20.jpg",
    description:
      "Soft, colorful squishy balls that are fun to squeeze and play with.",
  },
  {
    name: "Jack-in-the-Box",
    price: 699,
    image: "image/toys21.jpg",
    description:
      "A classic spring-loaded surprise toy with a popping clown that provides fun and entertainment.",
  },
  {
    name: "Rainbow Pop It ",
    price: 999,
    image: "image/toys22.jpg",
    description:
      "A colorful silicone sensory toy with poppable bubbles that helps relieve stress and improve focus.",
  },
  {
    name: "Ride-On Electric Jeep",
    price: 999,
    image: "image/toys13.jpg",
    description: "A battery-powered ride-on car for adventurous kids.",
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
