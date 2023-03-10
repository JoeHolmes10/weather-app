import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=659a21fa8f84ec9ec5db819589bca60a`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((Response) => {
                setData(Response.data);
                console.log(Response.data);
            });
            setLocation('');
        }
    };
    return (
        <div className="App">
            <div className="search">
                <input
                    type="text"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    autoFocus={true}
                />
            </div>
            <div class="joe">
                by
                <a href="https://youssefgameel.netlify.app/" class="link">
                    Joe.H
                </a>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? (
                            <h1>{Math.floor(data.main.temp - 273.15)}°C</h1>
                        ) : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name != undefined && (
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? (
                                <p className="bold">
                                    {Math.floor(data.main.feels_like - 273.15)}
                                    °C
                                </p>
                            ) : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? (
                                <p className="bold">{data.main.humidity}%</p>
                            ) : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? (
                                <p className="bold">{data.wind.speed} MPH</p>
                            ) : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
