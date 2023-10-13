const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg",  "6.jpg",  "8.jpg", "9.jpg", "10.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);
// prepand는 맨 가장 위에 오게하고 append는 가장 뒤에 오게한다.
document.body.appendChild(bgImage);