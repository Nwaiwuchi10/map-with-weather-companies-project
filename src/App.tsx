import React, { useState } from "react";
import Search from "./components/search/Search";
import { Container } from "react-bootstrap";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Data/Api";
import Forecast from "./components/Forecast/Forecast";
import useForecast from "./hooks/useForecast";
import InputSearch from "./components/search/InputSearch";
import WeatherForeCast from "./components/Forecast/WeatherForeCast";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <div>
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
