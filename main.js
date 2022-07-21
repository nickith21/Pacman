var x = 0;
var y = 0;
var velocity = 15;

//establishing the direction the PacMan is facing
const right = 0;
const left = 1;
const up = 2;
const down = 3;

//an array of the different Pacman faces
const pacArray = [
  ["PacManRightOpen.png", "PacManRightClosed.png"],
  ["PacManLeftOpen.png", "PacManLeftClosed.png"],
  ["PacManUpOpen.png", "PacManUpClosed.png"],
  ["PacManDownOpen.png", "PacManDownClosed.png"],
];

//gets all of the div elements
const box = document.getElementsByTagName("div");

// const banana = document.getElementById("Fruit");
// console.log(banana.width);

//determines whether the Pacman should have an open or closed mouth
var focus = 0;

function RunRight(velocity, direction) {
  const img = document.getElementById("PacMan");
  const imgWidth = img.width;
  const imgHeight = img.height;
  const banana = document.getElementById("Fruit");
  if (
    parseInt(getComputedStyle(banana).top.slice(0, -2)) +
      parseInt(getComputedStyle(banana).height.slice(0, -2)) >
      y &&
    parseInt(getComputedStyle(banana).top.slice(0, -2)) < y + imgHeight &&
    parseInt(getComputedStyle(banana).left.slice(0, -2)) < x + imgWidth &&
    parseInt(getComputedStyle(banana).left.slice(0, -2)) +
      parseInt(getComputedStyle(banana).width.slice(0, -2)) >
      x + imgWidth
  )
    alert("BDeegies is the way");
  for (let i = 0; i < box.length; i++) {
    if (
      parseInt(getComputedStyle(box[i]).top.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).height.slice(0, -2)) >
        y &&
      parseInt(getComputedStyle(box[i]).top.slice(0, -2)) < y + imgHeight &&
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) < x + imgWidth &&
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).width.slice(0, -2)) >
        x + imgWidth
    )
      return;
    if (window.innerWidth < x + imgWidth) {
      img.style.left = 0 + "px";
      x = 0;
      return;
    }
  }
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
  x += velocity;
  img.style.left = x + "px";
}

function RunLeft(velocity, direction) {
  const img = document.getElementById("PacMan");
  let imgWidth = img.width;
  let imgHeight = img.height;
  const banana = document.getElementById("Fruit");
  let bananaStyle = getComputedStyle(banana);
  let bananaSyleTop = bananaStyle.top.slice(0, -2);
  let bananaStyleLeft = bananaStyle.left.slice(0, -2);
  let bananaStyleHeight = bananaStyle.height.slice(0, -2);
  let bananaStyleWidth = bananaStyle.width.slice(0, -2);
  if (
    parseInt(bananaSyleTop) + parseInt(bananaStyleHeight) > y &&
    parseInt(bananaSyleTop) < y + imgHeight &&
    parseInt(bananaStyleLeft) < x &&
    parseInt(bananaStyleLeft) + parseInt(bananaStyleWidth) > x
  )
    alert("BDeegies is the way");
  for (let i = 0; i < box.length; i++) {
    let boxStyle = getComputedStyle(box[i]);
    let boxSyleTop = boxStyle.top.slice(0, -2);
    let boxStyleLeft = boxStyle.left.slice(0, -2);
    let boxStyleHeight = boxStyle.height.slice(0, -2);
    let boxStyleWidth = boxStyle.width.slice(0, -2);
    if (
      parseInt(boxSyleTop) + parseInt(boxStyleHeight) > y &&
      parseInt(boxSyleTop) < y + imgHeight &&
      parseInt(boxStyleLeft) < x &&
      parseInt(boxStyleLeft) + parseInt(boxStyleWidth) > x
    )
      return;
    if (0 > x) {
      x = window.innerWidth;
      img.style.left = window.innerWidth;
    }
  }
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
  x += velocity;
  img.style.left = x + "px";
}

function RunUp(velocity, direction) {
  const img = document.getElementById("PacMan");
  let imgWidth = img.width;
  let imgHeight = img.height;
  const banana = document.getElementById("Fruit");
  if (
    parseInt(getComputedStyle(banana).left.slice(0, -2)) +
      parseInt(getComputedStyle(banana).width.slice(0, -2)) >
      x &&
    parseInt(getComputedStyle(banana).left.slice(0, -2)) < x + imgWidth &&
    parseInt(getComputedStyle(banana).top.slice(0, -2)) < y &&
    parseInt(getComputedStyle(banana).height.slice(0, -2)) +
      parseInt(getComputedStyle(banana).top.slice(0, -2)) >
      y
  )
    alert("BDeegies is the way");
  for (let i = 0; i < box.length; i++) {
    if (
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).width.slice(0, -2)) >
        x &&
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) < x + imgWidth &&
      parseInt(getComputedStyle(box[i]).top.slice(0, -2)) < y &&
      parseInt(getComputedStyle(box[i]).height.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).top.slice(0, -2)) >
        y
    )
      return;
    if (0 > y) return;
  }
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
  y += velocity;
  img.style.top = y + "px";
}

function RunDown(velocity, direction) {
  const img = document.getElementById("PacMan");
  let imgWidth = img.width;
  let imgHeight = img.height;
  const banana = document.getElementById("Fruit");
  if (
    parseInt(getComputedStyle(banana).left.slice(0, -2)) +
      parseInt(getComputedStyle(banana).width.slice(0, -2)) >
      x &&
    parseInt(getComputedStyle(banana).left.slice(0, -2)) < x + imgWidth &&
    parseInt(getComputedStyle(banana).top.slice(0, -2)) < y + imgHeight &&
    parseInt(getComputedStyle(banana).height.slice(0, -2)) +
      parseInt(getComputedStyle(banana).top.slice(0, -2)) >
      y + imgHeight
  )
    alert("BDeegies is the way");
  for (let i = 0; i < box.length; i++) {
    if (
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).width.slice(0, -2)) >
        x &&
      parseInt(getComputedStyle(box[i]).left.slice(0, -2)) < x + imgWidth &&
      parseInt(getComputedStyle(box[i]).top.slice(0, -2)) < y + imgHeight &&
      parseInt(getComputedStyle(box[i]).height.slice(0, -2)) +
        parseInt(getComputedStyle(box[i]).top.slice(0, -2)) >
        y + imgHeight
    )
      return;
    if (window.innerHeight < y + imgHeight) return;
  }
  focus = (focus + 1) % 2;
  img.src = pacArray[direction][focus];
  y += velocity;
  img.style.top = y + "px";
}

function myPlay() {
  var audio = new Audio("./pacman_chomp.wav");
  audio.play();
}

function keyPress(e) {
  if (e.keyCode == "39") {
    RunRight(velocity, right);
    myPlay();
  }
  if (e.keyCode == "37") {
    RunLeft(-velocity, left);
    myPlay();
  }
  if (e.keyCode == "38") {
    RunUp(-velocity, up);
    myPlay();
  }
  if (e.keyCode == "40") {
    RunDown(velocity, down);
    myPlay();
  }
}

addEventListener("keydown", keyPress);
