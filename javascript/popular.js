let movies , series;
let dailyserial = document.querySelector('.main-daily')
let dailycinema = document.querySelector('.main-daily-cinematic');
let btn = document.querySelector('.btn-cinematic');
let coverCinema = document.querySelector('.cinematic-cover');
let coverSerial = document.querySelector(".serialic-cover");
let btnserial = document.querySelector(".btn-serial")
let seriesDiv = document.querySelector("#seriesContent");
let moviesDiv = document.querySelector("#movieContent");
let backgroundImage = document.querySelector(".daily-background");
let backgroundImagecinema = document.querySelector(".daily-background-cinema");
let boxName = document.querySelector(".daily-Name");
let boxNamecinema = document.querySelector(".daily-Name-cinema");
let boxLogo = document.querySelector(".daily-logo");
let boxLogocinema = document.querySelector(".daily-logo-cinema");
let boxDic = document.querySelector(".daily-director");
let boxDiccinema = document.querySelector(".daily-director-cinema");
let boxDec = document.querySelector(".daily-description");
let boxDeccinema = document.querySelector(".daily-description-cinema");
let Imageseason1 = document.querySelector(".imageseason-1");
let Imageseason2 = document.querySelector(".imageseason-2");
let Imageseason3 = document.querySelector(".imageseason-3");
let Imageseason4 = document.querySelector(".imageseason-4");
let Imagelock = document.querySelector(".imagelock");
let Episode1 = document.querySelector(".episode-1");
let Episode2 = document.querySelector(".episode-2");
let Episode3 = document.querySelector(".episode-3");
let Episode4 = document.querySelector(".episode-4");
btn.addEventListener("click" , () =>{
      coverCinema.classList.remove("fadeOut")
      coverCinema.classList.add("fadeIn");
      btn.style.backgroundColor = "#F8A53E"
      btnserial.style.backgroundColor = "transparent"
      setTimeout(() =>{
        dailyserial.classList.add("hidden")
        coverCinema.classList.add("active");
        coverSerial.classList.remove("active");
        coverSerial.classList.remove("flex");
        coverCinema.classList.add("flex");
        dailycinema.classList.remove("hidden");
        dailycinema.classList.add("flex");
        
        
      }, 100)

      
});
btnserial.addEventListener("click" , () =>{
    coverCinema.classList.remove("fadeIn");
    coverCinema.classList.add("fadeOut");
    coverSerial.classList.add("fadeIn");
    btnserial.style.backgroundColor = "#F8A53E"
    btn.style.backgroundColor = "transparent"
    setTimeout(() =>{
        dailyserial.classList.remove("hidden")
        dailycinema.classList.add("hidden")
        coverCinema.classList.remove("active");
        coverCinema.classList.remove("flex");
        coverSerial.classList.add("active");
        coverSerial.classList.add("flex");
        
      }, 50)
})

let seriesClickHandler = (index) => {
  let {background , SeriesName , logo , director , description , imageseason1 , imageseason2 , imageseason3 , imageseason4 , imagelock , episode1 , episode2 , episode3 , episode4} = series[index];
  backgroundImage.style.backgroundImage = `url(${background})`;
  boxName.textContent = SeriesName;
  boxLogo.src = logo;
  boxDic.textContent = `کارگردان : ${director}`;
  boxDec.textContent = description;
  Imageseason1.style.backgroundImage = `url(${imageseason1})`;
  Imageseason2.style.backgroundImage = `url(${imageseason2})`;
  Imageseason3.style.backgroundImage = `url(${imageseason3})`;
  Imageseason4.style.backgroundImage = `url(${imageseason4})`;
  Imagelock.style.image = imagelock;
  Episode1.textContent = episode1;
  Episode2.textContent = episode2;
  Episode3.textContent = episode3;
  Episode4.textContent = episode4;
  
};
let moviesClickHandler = (index) => {
  let {background , MoviesName , logo , director , description} = movies[index];
  backgroundImagecinema.style.backgroundImage = `url(${background})`;
  boxNamecinema.textContent = MoviesName;
  boxLogocinema.src = logo;
  boxDiccinema.textContent = `کارگردان : ${director}`;
  boxDeccinema.textContent = description;
  
};



let Movie = async () => {
  await axios.get("https://aliahanin.github.io/github.api/json/Series.json").then((res)=>{
    series = res.data
  });
  await axios.get("https://aliahanin.github.io/github.api/json/Movies.json").then((res)=>{
    movies = res.data
  });
  series.forEach((item, index) => {
    seriesDiv.innerHTML += `<div class="min-w-[130px] min-h-[150px] desktop:min-w-[163px] desktop:min-h-[221px] hover:scale-110 transition-all duration-300 hover:border-2 hover:border-white   bg-no-repeat cursor-pointer   bg-center bg-cover rounded-lg" onclick=" seriesClickHandler(${index})" style="background-image: url(${item.image});">
    </div>`;
  });
  movies.forEach((item, index) => {
    moviesDiv.innerHTML += `<div class="min-w-[130px] min-h-[150px] desktop:min-w-[163px] desktop:min-h-[221px] hover:scale-110 transition-all duration-300 hover:border-2 hover:border-white   bg-no-repeat cursor-pointer   bg-center bg-cover rounded-lg" onclick=" moviesClickHandler(${index})" style="background-image: url(${item.imageurl});">
    </div>`;
  });
}
Movie();
  