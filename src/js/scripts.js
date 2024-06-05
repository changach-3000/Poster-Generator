// Get the form elements
const imageFileInput = document.querySelector("#imageFileInput");
const eventTitle = document.querySelector("#eventTitle");
const description = document.querySelector("#description");
const performers = document.querySelector("#performers");
const eventLocation = document.querySelector("#location");
const price = document.querySelector("#price");
const tickets = document.querySelector("#tickets");
const date = document.querySelector("#date");
const day = document.querySelector("#day");
const time = document.querySelector("#time");
const downloadButton = document.getElementById("downloadPosterButton");

// Get the overlay elements
const overlayTitle = document.querySelector("#overlayTitle");
const overlayDescription = document.querySelector("#overlayDescription");
const overlayPerformers = document.querySelector("#overlayPerformers");
const overlayLocation = document.querySelector("#overlayLocation");
const overlayPrice = document.querySelector("#overlayPrice");
const overlayTickets = document.querySelector("#overlayTickets");
const overlayDate = document.querySelector("#overlayDate");
const overlayDay = document.querySelector("#overlayDay");
const overlayTime = document.querySelector("#overlayTime");

// Function to update the poster
function updateCanvas() {
  console.log("Update Canvas called");

  // Update the overlay text with form values
  overlayTitle.textContent = eventTitle.value;
  overlayDescription.textContent = description.value;
  overlayPerformers.textContent = performers.value;
  overlayLocation.textContent = eventLocation.value;
  overlayPrice.textContent = price.value;
  overlayTickets.textContent = tickets.value;
  overlayDate.textContent = date.value;
  overlayDay.textContent = day.value;
  overlayTime.textContent = time.value;

  // Handle the image upload
  const file = imageFileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      console.log("File reader loaded");
      document.querySelector("#poster").src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    console.log("No file selected");
  }
}

// Function to download the poster
function downloadPoster() {
  const poster = document.querySelector("#poster");
  const link = document.createElement("a");
  link.download = 'poster.png';
  link.href = poster.src;
  link.click();
}

// Event listener for the generate button
document.querySelector("#generatePosterButton").addEventListener("click", updateCanvas);

// Event Listerner for the download button
downloadButton.addEventListener("click", downloadPoster);


