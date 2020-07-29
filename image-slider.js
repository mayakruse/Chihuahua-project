let puppies = [
  "https://www.perfectdogbreeds.com/wp-content/uploads/2019/12/Chihuahua-and-Toys.jpg",
  "https://www.yourpurebredpuppy.com/dogbreeds/photos2-C/chihuahua-05.jpg",
  "https://www.k9web.com/wp-content/uploads/2019/05/Deer-Head-Chihuahua-1-780x520.jpg",
  "https://thehappypuppysite.com/wp-content/uploads/2019/02/Black-And-White-Chihuahua-long.jpg",
  "https://www.perfectdogbreeds.com/wp-content/uploads/2019/12/Chihuahua.jpg",
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

leftButton.addEventListener("click", function () {
  if (i === 0) {
    i += 4;
  } else {
    --i;
  }
  img.src = puppies[i];
});
