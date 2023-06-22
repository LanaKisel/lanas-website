const h2=document.createElement("h2");
h2.textContent="This content added by JavaScript";
document.querySelector("body").appendChild(h2);

/*const imgSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const imgTiming = {
    duration: 2000,
    iterations: 1,
  };

  const image = document.querySelector(".img1");
  
  image.addEventListener("click", () => {
    image.animate(imgSpinning, imgTiming);
  });*/



function addingEventListener() {
const img = document.getElementById('lol');
console.log(img);function clickAlert() {
     alert('I was clicked!');
}

img.addEventListener('click', clickAlert)};
addingEventListener();



/*document.addEventListener('click', function(clickAlert) {
const input = document.getElementById('img1');
function clickAlert(){
    style="width:700px; height: 1000px";
}
    console.log(clickAlert)
}); */