import React, { Component } from 'react';
import FrontSide from './FrontSide.js';
import moment from 'moment';
import './panel.css';

class App extends Component {
  render() {
    return (
      <div className="panel">
        <FrontSide 
          date={moment()} 
          icon='default' 
          temperature={19} 
          apparentTemperature={15} 
          summary='Sunny'
          currentCityName='Stockholm' 
          />
      </div>
    );
  }
}

export default App;
