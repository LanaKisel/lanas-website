const h2=document.createElement("h2");
h2.textContent="This content added by JavaScript";
document.querySelector("body").appendChild(h2);
//img1
const imgSpinning1 = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const imgTiming1 = {
    duration: 2000,
    iterations: 1,
  };

  const image1 = document.querySelector("#lol");
  
  image1.addEventListener("click", () => {
    image1.animate(imgSpinning1, imgTiming1);
  });
  //img2
  const imgSpinning2 = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const imgTiming2 = {
    duration: 2000,
    iterations: 1,
  };

  const image2 = document.querySelector(".img2");
  
  image2.addEventListener("click", () => {
    image2.animate(imgSpinning2, imgTiming2);
  });

/*
function addingEventListener() {
const img = document.getElementById('lol');
console.log(img);function clickAlert() {
     alert('I was clicked!');
}

img.addEventListener('click', clickAlert)};
addingEventListener();*/

//img3
const imgSpinning3 = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const imgTiming3 = {
  duration: 2000,
  iterations: 1,
};

const image3 = document.querySelector("#img3");

image3.addEventListener("click", () => {
  image3.animate(imgSpinning3, imgTiming3);
});
//img4
const imgSpinning4 = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const imgTiming4 = {
  duration: 2000,
  iterations: 1,
};

const image4 = document.querySelector("#img4");

image4.addEventListener("click", () => {
  image4.animate(imgSpinning4, imgTiming4);
});
//img5
const imgSpinning5 = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const imgTiming5 = {
  duration: 2000,
  iterations: 1,
};

const image5 = document.querySelector("#img5");

image5.addEventListener("click", () => {
  image5.animate(imgSpinning5, imgTiming5);
});

/*
document.addEventListener('click', function(clickAlert) {
const input = document.getElementById('img1');
function clickAlert(){
    style="width:700px; height: 1000px";
}
    console.log(clickAlert)
}); */