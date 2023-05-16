import React from "react";

const Rough = () => {
  return <div>Rough</div>;
};

export default Rough;
// import React, { useState } from "react";
// import Search from "./components/search/Search";
// import { Container } from "react-bootstrap";
// import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
// import { WEATHER_API_KEY, WEATHER_API_URL } from "./Data/Api";
// import Forecast from "./components/Forecast/Forecast";
// type Props = {
//   onSearchChange: () => any;
// };
// function App() {
//   const [currentWeathers, setCurrentWeathers] = useState(null);
//   const [foreCast, setForeCast] = useState(null);
//   const handleOnSearchChange = (searchData: any) => {
//     const [lat, lon] = searchData.value.split("");
//     const currentWeatherFetch = fetch(
//       `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     const forecastFetch = fetch(
//       `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     Promise.all([currentWeatherFetch, forecastFetch])
//       .then(async (response) => {
//         const weatherResponse = await response[0].json();
//         const forcastResponse = await response[1].json();

//         setCurrentWeathers({ city: searchData.label, ...weatherResponse });
//         setForeCast({ city: searchData.label, ...forcastResponse });
//       })
//       .catch(console.log);
//   };
//   console.log(currentWeathers);
//   console.log(foreCast);
//   return (
//     <div>
//       <Container>
//         <Search onSearchChange={handleOnSearchChange} />

//         {currentWeathers && <CurrentWeather data={currentWeathers} />}

//         {foreCast && <Forecast data={foreCast} />}
//       </Container>
//     </div>
//   );
// }

// export default App;
