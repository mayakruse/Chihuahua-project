let puppies = [
  "https://www.perfectdogbreeds.com/wp-content/uploads/2019/12/Chihuahua-and-Toys.jpg",
  "https://www.yourpurebredpuppy.com/dogbreeds/photos2-C/chihuahua-05.jpg",
  "https://www.k9web.com/wp-content/uploads/2019/05/Deer-Head-Chihuahua-1-780x520.jpg",
  "https://thehappypuppysite.com/wp-content/uploads/2019/02/Black-And-White-Chihuahua-long.jpg",
  "https://i.pinimg.com/originals/03/24/ba/0324ba0cd05c5accaa313da4398a71da.jpg",
];

let rightButton = document.querySelector(".right");
let leftButton = document.querySelector(".left");
let img = document.getElementById("myImg");
let i = 0;

rightButton.addEventListener("click", function () {
  if (i < puppies.length - 1) {
    ++i;
  } else {
    i = 0;
  }
  img.src = puppies[i];
});

/*let changeRight = function () {
  let img = document.getElementById("myImg");
  if (img.src === puppies[0]) {
    img.src === puppies[1];
  } else if (img.src === puppies[1]) {
    img.src === puppies[2];
  } else if (img.src === puppies[2]) {
    img.src === puppies[3];
  } else if (img.src === puppies[3]) {
    img.src === puppies[4];
  } else {
    img.src === puppies[0];
  }
};

*/
