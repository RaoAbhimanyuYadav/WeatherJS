const searchForm = document.querySelector("form");
const details = document.querySelector(".details");
const timeImg = document.querySelector(".time");
const icon = document.querySelector(".icon img");
const card = document.querySelector(".card");

const updateUI = (data) => {
  const { cityData, weatherData } = data;
  details.innerHTML = `
        <h5 class="my-3">${cityData.EnglishName}</h5>
        <div class="my-3">${weatherData.WeatherText}</div>
        <div class="display-4 my-4"><span>${weatherData.Temperature.Metric.Value}</span><span>&deg;C</span></div>`;

  const timeImgSrc = weatherData.IsDayTime ? "img/day.svg" : "img/night.svg";
  timeImg.setAttribute("src", timeImgSrc);

  const iconSrc = `img/icons/${weatherData.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const weather = async (city) => {
  const cityData = await getCity(city);
  const cityId = cityData.Key;
  const weatherData = await getWeather(cityId);
  return { cityData, weatherData };
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = searchForm.city.value.trim();
  searchForm.reset();
  weather(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
