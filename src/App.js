import React, { Component } from 'react';
import Panel from './panel.js';
import Search from './Search.js';
import Footer from './Footer.js';
import './App.css';
import './panel.css';

class App extends Component {

state = {
    inputValue: '',
    tempDayOne: '',
    weatherDayOne: '',
    dateDayOne: '',
    tempDayTwo: '',
    weatherDayTwo: '',
    dateDayTwo: '',
    tempDayThree: '',
    weatherDayThree: '',
    dateDayThree: '',
    tempDayFour: '',
    weatherDayFour: '',
    dateDayFour: '',
    tempDayFive: '',
    weatherDayFive: '',
    dateDayFive: '',
    city: '',
}

componentDidMount(){
  const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      if (card.classList.contains('aundefined')) {
        // card.style.display = 'none';
        card.style.transform = "translate(-600%, -50%)";
      }
    });
}

updateInputValue = (e) => {
  this.setState({
      inputValue: e.target.value,
    });
}

getForecast = () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&mode=json&appid=9a5de275905fd24f70dc28cdf4d9d0c6&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(Json => this.setState({
         city: Json.city,
         tempDayOne: Json.list[0].main,
         weatherDayOne: Json.list[0].weather[0],
         dateDayOne: Json.list[0].dt_txt.substring(0,10),
         tempDayTwo: Json.list[8].main,
         weatherDayTwo: Json.list[8].weather[0],
         dateDayTwo: Json.list[8].dt_txt.substring(0,10),
         tempDayThree: Json.list[16].main,
         weatherDayThree: Json.list[16].weather[0],
         dateDayThree: Json.list[16].dt_txt.substring(0,10),
         tempDayFour: Json.list[24].main,
         weatherDayFour: Json.list[24].weather[0],
         dateDayFour: Json.list[24].dt_txt.substring(0,10),
         tempDayFive: Json.list[32].main,
         weatherDayFive: Json.list[32].weather[0],
         dateDayFive: Json.list[32].dt_txt.substring(0,10),
     }));
     const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        // card.style.display = 'block';
        card.style.transform = "translate(0%, -50%)";
     });
     const caption = document.querySelector('.caption');
     caption.style.display = 'none';
}

  render() {

    return (
      <div className="grid">
        <Search 
        inputValue={this.state.inputValue}
        updateInputValue={this.updateInputValue}
        getForecast={this.getForecast}
        />
        <Panel 
          city={this.state.city}
          tempDayOne={this.state.tempDayOne}
          weatherDayOne={this.state.weatherDayOne}
          dateDayOne={this.state.dateDayOne}
          tempDayTwo={this.state.tempDayTwo}
          weatherDayTwo={this.state.weatherDayTwo}
          dateDayTwo={this.state.dateDayTwo}
          tempDayThree={this.state.tempDayThree}
          weatherDayThree={this.state.weatherDayThree}
          dateDayThree={this.state.dateDayThree}
          tempDayFour={this.state.tempDayFour}
          weatherDayFour={this.state.weatherDayFour}
          dateDayFour={this.state.dateDayFour}
          tempDayFive={this.state.tempDayFive}
          weatherDayFive={this.state.weatherDayFive}
          dateDayFive={this.state.dateDayFive}
          />       
        <Footer />
      </div>
    );
  }
}

export default App;
