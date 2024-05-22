const imageFileInput = document.querySelector("#imageFileInput");
const canvas = document.querySelector("#meme");
const ctx = canvas.getContext("2d");

const eventTitle = document.querySelector("#eventTitle");
const description = document.querySelector("#description");
const performers = document.querySelector("#performers");
const location = document.querySelector("#location");
const price = document.querySelector("#price");
const tickets = document.querySelector("#tickets");
const date = document.querySelector("#date");
const day = document.querySelector("#day");
const time = document.querySelector("#time");

let image;

imageFileInput.addEventListener("change", (e) => {
  const imageDataUrl = URL.createObjectURL(e.target.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener(
    "load",
    () => {
      updateCanvas();
    },
    { once: true }
  );
});

eventTitle.addEventListener('keyup', function(){
    if(this.value != ""){
        canvas.innerHTML = this.value;
        renderCanvas();
    }
    
});


function updateCanvas() {
  if (!image) {
    alert("Please upload a background image first.");
    return;
  }

  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0);

  ctx.fillStyle = "white";
  ctx.font = "bold 30px Arial";
  ctx.fillText(eventTitle.value, 50, 50);
  ctx.font = "20px Arial";
  ctx.fillText(description.value, 50, 100);
  ctx.fillText(performers.value, 50, 150);
  ctx.fillText(location.value, 50, 200);
  ctx.fillText(price.value, 50, 250);
  ctx.fillText(tickets.value, 50, 300);
  ctx.fillText(date.value, 50, 350);
  ctx.fillText(day.value, 50, 400);
  ctx.fillText(time.value, 50, 450);
}

// Add event listeners for form inputs
eventTitle.addEventListener("input", updateCanvas);
description.addEventListener("input", updateCanvas);
performers.addEventListener("input", updateCanvas);
location.addEventListener("input", updateCanvas);
price.addEventListener("input", updateCanvas);
tickets.addEventListener("input", updateCanvas);
date.addEventListener("input", updateCanvas);
day.addEventListener("input", updateCanvas);
time.addEventListener("input", updateCanvas);
