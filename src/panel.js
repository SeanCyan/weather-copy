import React from 'react'
import './card.css'

class Panel extends React.Component {

    render() {
    return (
            <div className="panel">
                <h2 className="caption">HOWS THE WEATHER?</h2>
                <div className={`card a${this.props.weatherDayOne.icon}`}>
                    <img src={`icons/${this.props.weatherDayOne.icon}.png`} alt={`${this.props.weatherDayOne.description}`} className='card-icon'/>
                    <h3>{`${this.props.weatherDayOne.description}`}</h3>
                    <p>{`${this.props.dateDayOne}`}</p>
                    <div className='card-row'>
                        <div className='card-temperature'>
                        {this.props.tempDayOne.temp}°C
                        <span className='small'> / {this.props.tempDayOne.humidity} Humidity</span>
                        </div>
                    </div>
                    <div className='card-line'></div>
                    <div className='card-city'>{this.props.city.name}, {this.props.city.country}</div>
                </div>
                <div className={`card a${this.props.weatherDayTwo.icon}`}>
                    <img src={`icons/${this.props.weatherDayTwo.icon}.png`} alt={`${this.props.weatherDayTwo.description}`} className='card-icon'/>
                    <h3>{`${this.props.weatherDayTwo.description}`}</h3>
                    <p>{`${this.props.dateDayTwo}`}</p>
                    <div className='card-row'>
                        <div className='card-temperature'>
                        {this.props.tempDayTwo.temp}°C
                        <span className='small'> / {this.props.tempDayTwo.humidity} Humidity</span>
                        </div>
                    </div>
                    <div className='card-line'></div>
                    <div className='card-city'>{this.props.city.name}, {this.props.city.country}</div>
                </div>
                <div className={`card a${this.props.weatherDayThree.icon}`}>
                    <img src={`icons/${this.props.weatherDayThree.icon}.png`} alt={`${this.props.weatherDayThree.description}`} className='card-icon'/>
                    <h3>{`${this.props.weatherDayThree.description}`}</h3>
                    <p>{`${this.props.dateDayThree}`}</p>
                    <div className='card-row'>
                        <div className='card-temperature'>
                        {this.props.tempDayThree.temp}°C
                        <span className='small'> / {this.props.tempDayThree.humidity} Humidity</span>
                        </div>
                    </div>
                    <div className='card-line'></div>
                    <div className='card-city'>{this.props.city.name}, {this.props.city.country}</div>
                </div>
                <div className={`card a${this.props.weatherDayFour.icon}`}>
                    <img src={`icons/${this.props.weatherDayFour.icon}.png`} alt={`${this.props.weatherDayFour.description}`} className='card-icon'/>
                    <h3>{`${this.props.weatherDayFour.description}`}</h3>
                    <p>{`${this.props.dateDayFour}`}</p>
                    <div className='card-row'>
                        <div className='card-temperature'>
                        {this.props.tempDayFour.temp}°C
                        <span className='small'> / {this.props.tempDayFour.humidity} Humidity</span>
                        </div>
                    </div>
                    <div className='card-line'></div>
                    <div className='card-city'>{this.props.city.name}, {this.props.city.country}</div>
                </div>
                <div className={`card a${this.props.weatherDayFive.icon}`}>
                    <img src={`icons/${this.props.weatherDayFive.icon}.png`} alt={`${this.props.weatherDayFive.description}`} className='card-icon'/>
                    <h3>{`${this.props.weatherDayFive.description}`}</h3>
                    <p>{`${this.props.dateDayFive}`}</p>
                    <div className='card-row'>
                        <div className='card-temperature'>
                        {this.props.tempDayFive.temp}°C
                        <span className='small'> / {this.props.tempDayFive.humidity} Humidity</span>
                        </div>
                    </div>
                    <div className='card-line'></div>
                    <div className='card-city'>{this.props.city.name}, {this.props.city.country}</div>
                </div>
            </div>
        );
    }
}

export default Panel;
