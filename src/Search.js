import React from 'react';
import './Search.css'

class Search extends React.Component {

    render() {
        return (
            <div className="search">
                <label for="search-city">Input a city name & country code to get a forecast!</label>
                <input type="text" className="search-city" onChange={this.props.updateInputValue} onKeyPress={this.props.handleKeyPress} placeholder="e.g. Newcastle,GB" />
                <button className="get-weather" onClick={this.props.getForecast}>Get Weather!</button>
            </div>
        );
    }
}

export default Search;