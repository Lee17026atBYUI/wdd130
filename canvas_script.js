const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
// set it in JS instead of CSS so it's dynamic (CSS would wait until after render)

const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0 0 0)";
ctx.fillRect(0, 0, width, height); // 0, 0 is top left
// x ->
// y v (that's a down arrow)

function rectangles() {
ctx.fillStyle = "rgb(255 0 0)";
ctx.fillRect(50, 50, 100, 150); 
// top left of rectangle is 50 px right of canvas top left
// 50 px down from canvas top left
// width is 100 px, height is 150 px
// might help to think of (50, 50) as cartesian (50, -50)
// maybe not though

ctx.fillStyle = "rgb(0 255 0)";
ctx.fillRect(75, 75, 100, 100);
// "z-index" is based on drawing order and cannot be changed

ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);
// transparent

ctx.fillStyle = "#ff245b";
ctx.fillRect(width/2, height/2, 50, 50);
ctx.fillRect(width/2, height/2, -50, -50);

ctx.strokeStyle = "rgb(255 255 255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);
// outlines, called strokes
}
rectangles();

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

ctx.fillStyle = "rgb(255 0 0)";
ctx.beginPath();
ctx.moveTo(350, 50);
ctx.lineTo(450, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(400, 50 + triHeight);
ctx.lineTo(350, 50);
ctx.fill();

ctx.fillStyle = "rgb(0 0 255)";
ctx.beginPath();
//        x    y   r        start            end  clockwise
ctx.arc(260, 100, 50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(500, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(500, 106);
ctx.fill();

// text box starts at bottom left
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");

const image = new Image();
image.src = "wwr/images/bluesky.png";
image.addEventListener("load", () => ctx.drawImage(image, -320, 0));
canvas.setAttribute("aria-label", "bluesky Logo");

ctx.translate(width / 2, height / 2);
// move the origin

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let length = 250;
// let moveOffset = 20;

// for (let i = 0; i < length; i++) {
//   ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
// ctx.beginPath();
// ctx.moveTo(moveOffset, moveOffset);
// ctx.lineTo(moveOffset + length, moveOffset);
// const triHeight = (length / 2) * Math.tan(degToRad(60));
// ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
// ctx.lineTo(moveOffset, moveOffset);
// ctx.fill();

// length--;
// moveOffset += 0.7;
// ctx.rotate(degToRad(5));

// }

