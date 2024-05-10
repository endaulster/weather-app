// Getting the data

async function fetchData(cityName) {
  //API
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=007e6da3a17d467294b71246240404&q=${cityName}&days=1&aqi=no&alerts=no`;

  // Then
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network error");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem: ", error);
  }
}

let myWeather = fetchData("Buenos Aires")
  .then((data) => {
    const sabroso = data.current.temp_c;
    console.log(sabroso);
  })
  .catch((error) => {
    console.error("There was a problem fetching the data: ", error);
  });

//////
