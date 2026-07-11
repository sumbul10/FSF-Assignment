let parent = document.getElementById("bg-img");

let season = prompt(`Which Season do You Like Most?

Select:
Summer
Winter
Autumn
Spring
Rainy
`)?.toLowerCase();

if (season === "summer") {
  parent.innerHTML = `
    <img src="image/img1.gif" alt="Summer">

    <div class="product-card">
        <div class="badge">Hot</div>

        <div class="product-thumb">
            <img src="image/summer.jpg" alt="Summer">
        </div>

        <div class="product-detail">
            <span class="product-category">SUMMER SEASON</span>
            <h4>Hot Days</h4>

            <p>
             Summer is the hottest season of the year. The days are long and sunny. People wear light clothes and drink plenty of water. Children enjoy summer holidays, ice cream, and juicy fruits like mangoes and watermelon. Although the weather is very hot, summer is a fun season.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">View Summer</button>
            </div>
        </div>
    </div>
    `;
} else if (season === "winter") {
  parent.innerHTML = `
    <img src="image/img2.gif" alt="Winter">

    <div class="product-card">
        <div class="badge">Cold</div>

        <div class="product-thumb">
            <img src="image/winter.jpg" alt="Winter">
        </div>

        <div class="product-detail">
            <span class="product-category">WINTER SEASON</span>
            <h4>Cold Days</h4>

            <p>
            Winter is the coldest season of the year. The days are short and the nights are long. People wear warm clothes to keep themselves warm. Children enjoy hot drinks and sunny days. Winter is a pleasant and beautiful season.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">View Winter</button>
            </div>
        </div>
    </div>
    `;
} else if (season === "autumn") {
  parent.innerHTML = `
    <img src="image/img3.gif" alt="Autumn">

    <div class="product-card">
        <div class="badge">Falling Leaves</div>

        <div class="product-thumb">
            <img src="image/Autumn.jpg" alt="Autumn">
        </div>

        <div class="product-detail">
            <span class="product-category">AUTUMN SEASON</span>
            <h4>Fall Days</h4>

            <p>
            Autumn is a beautiful season of the year. The leaves change color and fall from the trees. The weather becomes cool and pleasant. People enjoy the fresh air and natural beauty. Autumn is a calm and lovely season.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">View Autumn</button>
            </div>
        </div>
    </div>
    `;
} else if (season === "spring") {
  parent.innerHTML = `
    <img src="image/img4.gif" alt="Spring">

    <div class="product-card">
        <div class="badge">Flowery</div>

        <div class="product-thumb">
            <img src="image/Spring.jpg" alt="Spring">
        </div>

        <div class="product-detail">
            <span class="product-category">SPRING SEASON</span>
            <h4>Colourful Days</h4>

            <p>
                Spring is a beautiful season of the year. The weather is pleasant and flowers bloom everywhere. Trees become green, and birds sing sweet songs. People enjoy the fresh air and colorful gardens. Spring is a lovely season.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">View Spring</button>
            </div>
        </div>
    </div>
    `;
} else if (season === "rainy") {
  parent.innerHTML = `
    <img src="image/img5.gif" alt="Rainy">

    <div class="product-card">
        <div class="badge">Monsoon</div>

        <div class="product-thumb">
            <img src="image/rainy.jpg" alt="Rainy">
        </div>

        <div class="product-detail">
            <span class="product-category">RAINY SEASON</span>

            <h4>Rainy Days</h4>

            <p>
            The rainy season is cool and pleasant. Rain falls from the clouds, and trees become green. Children enjoy playing in the rain. The rainy season is beautiful.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">View Rain</button>
            </div>
        </div>
    </div>
    `;
} else {
  parent.innerHTML = `
    <img src="image/img6.gif" alt="Error">

    <div class="product-card">
        <div class="badge">ERROR</div>

        <div class="product-thumb">
            <img src="image/error.jpg" alt="Error">
        </div>

        <div class="product-detail">
            <span class="product-category">INVALID SEASON</span>

            <h4>Oops!</h4>

            <p>
                Please enter a valid season: Summer, Winter, Autumn, Spring, or Rainy.
            </p>

            <div class="product-bottom-detail">
                <button class="buy-btn">Try Again</button>
            </div>
        </div>
    </div>
    `;
}
