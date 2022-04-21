const key = "biZuvnGPTbz6cxYGPXmcGAF6qbzWtVMz";

const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

const getWeather = async (cityId) => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${cityId}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// getCity("Hamirpur")
//   .then((data) => {
//     return getWeather(data.Key);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
