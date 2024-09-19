

let backgroundDiv = document.getElementById("Background");
let imageInterval = 3000;

async function fetchBackground() {
  try {
    let res = await fetch("https://aliahanin.github.io/github.api/json/Background.json");
    let images = await res.json();
    return images;
  } catch (error) {
    console.error("image can not fetch ", error);
  }
}
let slideIndex = 0;
function updateBackgroundImage(images) {
  if (slideIndex == images.length) {
    slideIndex = 0;
  }
  backgroundDiv.style.backgroundImage = `url('${images[slideIndex].image}')`;
  slideIndex++;
}
fetchBackground().then((images) => {
  setInterval(() => updateBackgroundImage(images), imageInterval);
});
fetchBackground();
