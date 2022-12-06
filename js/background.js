const images = ["0.avif", "1.avif", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "screenfill";

document.body.appendChild(bgImage);
