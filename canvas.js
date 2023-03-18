let $canvas = document.getElementById("theCanvas");
let workZone = $canvas.getContext("2d");
let CANVAS_WIDTH = ($canvas.width = 600);
let CANVAS_HEIGHT = ($canvas.height = 600);

let $button = document.getElementById("theButton");
let $stage = document.getElementById("theStage");

const figure = new Image();
figure.src = "evolution.png";
//global variables that set the part of the page will be pasted (can be put in the drawImage)
const spriteWidth = 200;
const spriteHeight = 100;

// later will be the block's location
let x = 0;
//motion set
let motion = 53;
let frame = -1;
// let slower= 0
// let howSlow= 70

//what stays empty in the workzone (by sizes)
// workZone.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
// //what is filled with color in the workzone (by sizes)
// workZone.fillRect(x, 50, 50, 100);
//show the image i attached on the screen, according to location i set.
//ctx. drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
// -contorilng the size of the picture i want to cut into the canvas

$button.addEventListener("click", move);

function move() {
  workZone.drawImage(
    figure,
    22 + motion * frame,
    20,
    100,
    220,
    0,
    0,
    1000,
    1200
  );
  // change by button (title)
  $stage.innerHTML++;
  if ($stage.innerHTML > 5) {
    $stage.innerHTML = 1;
  }
  // change by button (frame)
  frame++;
  if (frame > 4) {
    frame = 0;
  }
  //   if (slower % howSlow=== 0) {
  //   if (frame<4) {
  //     frame++
  //   } else {
  //     frame=0
  //   }}
  //   slower++
  //recursion to the function (go over in loops)
  //   requestAnimationFrame(move);
  // every iteration the x is 1px more to the right
  x++;
}
// activation of the funciton
move();

//.....
//section of timer

let $time = document.getElementById("time");

let $temporizador = document.getElementById("temporizador");
let vase = $temporizador.getContext("2d");
let TEMPO_WIDTH = ($temporizador.width = 600);
let TEMPO_HEIGHT = ($temporizador.height = 600);

let year = 0;

//what stays empty in the workzone (by sizes)
vase.clearRect(0, 0, TEMPO_WIDTH, TEMPO_HEIGHT);

$button.addEventListener("click", age);
vase.fillStyle = "yellow";
function age() {
  year += 120;
  vase.fillRect(0, 0, year, 600);
  if (year > 700) {
    year = 120;

    vase.clearRect(year, 0, TEMPO_WIDTH, TEMPO_HEIGHT);
  }
}

// function fill() {
//   vase.fillRect(0, 0, 0, 0);
// }
// fill();

//what is filled with color in the timer (by sizes)
