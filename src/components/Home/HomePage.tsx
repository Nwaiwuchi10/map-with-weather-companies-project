import React, { useState } from "react";

import weth from "../../assets/Images/weth.jpg";
import useForecast from "../../hooks/useForecast";
import WeatherForeCast from "../Forecast/WeatherForeCast";
import InputSearch from "../search/InputSearch";
import "./Style.css";
import { Container } from "react-bootstrap";

import Forecast from "../Forecast/Forecast";
import Dashboard from "../Dashboard/Dashboard";
type Props = {};
const HomePage: React.FC<Props> = () => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast();

  return (
    <Dashboard>
      <Container>
        <div className="userl-div">
          <div
            className="img-background"
            style={{
              backgroundImage: `url(${weth})`,
            }}
          ></div>
          <div className="form-background-color">
            <div className="form-card">
              <div className=" card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                  Weather Forecast
                </h3>
                <p
                  className="d-flex justify-content-center"
                  style={{ marginLeft: "15px" }}
                >
                  *Enter below a place you want to know the weather of and
                  select an option from dropdown*
                </p>

                <div>
                  {forecast ? (
                    <WeatherForeCast data={forecast} />
                  ) : (
                    <InputSearch
                      term={term}
                      options={options}
                      onInputChange={onInputChange}
                      onOptionSelect={onOptionSelect}
                      onSubmit={onSubmit}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Dashboard>
  );
};

export default HomePage;
