
const percentage = Number(+prompt("Enter Your Percentage"));

let grade = "";
let status = "";
let color = "";
let image = "";

if (percentage >= 0 && percentage <= 100) {

    if (percentage >= 90) {
        grade = "A<sup>+</sup>";
        status = "PASS";
        color = "#28a745";
        image = "image/congratulations.png";
    }
   else if (percentage >= 80) {
        grade = "A";
        status = "PASS";
        color = "#28a745";
        image = "image/Keep-it-up!.png";
    }
    else if (percentage >= 70) {
        grade = "B";
        status = "PASS";
        color = "#28a745";
        image = "image/Excellent-work!.png";
    }
    else if (percentage >= 60) {
        grade = "C";
        status = "PASS";
        color = "#28a745";
        image = "image/good.png";
    }
    else if (percentage >= 40) {
        grade = "D";
        status = "PASS";
        color = "#28a745";
        image = "image/improve.png";
    }
    else {
        grade = "F";
        status = "FAIL";
        color = "#dc3545";
        image = "image/fail.png";
    }

}
else{

    grade = "-";
    status = "INVALID PERCENTAGE";
    color = "#ff9800";
    image = "image/invalid.png";

}

const container = document.getElementById("products");

container.innerHTML = `

<div class="card">

    <img src="${image}" alt="">

    <h2>Student Result</h2>

    <p><strong>Percentage:</strong> ${percentage}%</p>

    <p class="grade">${grade}</p>

    <button style="background:${color}">
        ${status}
    </button>

</div>

`;
