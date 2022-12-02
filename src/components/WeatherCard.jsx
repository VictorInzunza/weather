import React, { useState } from 'react'
import { weatherImages } from '../utils/weatherImages'

const WeatherCard = ({ weather, temperature, isCelsius, changeUnitTemperature, newCallAPISearch }) => {
    const [place, setPlace] = useState("")
    const handleChangePlace = (e) => {
        setPlace(e.target.value)
    }

    const getImageFromAPI = (nameIcon) => {

        const URLImage = weatherImages[nameIcon]
        return URLImage
    }

    return (
        <article className="weatherCard" style={{ backgroundImage: `url(${getImageFromAPI(weather.weather[0].icon)})` }}>

            <h3 className='city'>{`${weather.name}, ${weather.sys.country}`}</h3>
            <section className="weatherCard-body">

                <ul><li>{weather.weather[0].description}</li></ul>
                <ul><li>Pressure: {weather.main.pressure} hPa</li></ul>
                <ul><li>Clouds: {weather.clouds.all} %</li></ul>
                <ul><li>Wind Speed: {weather.wind.speed} m/s</li></ul>

                <input
                    type="text"
                    value={place}
                    placeholder="Search..."
                    onChange={handleChangePlace}
                //onClick={place()}
                />
                <section><button className="searchCityButton" onClick={() => newCallAPISearch(place)}> Search </button></section>

            </section>

            <section className='changeTemperture'>
                <p className='temperture'>{isCelsius ? `${temperature.celsius} ºC` : `${temperature.fahrenheit} ºF`} </p>
                <button className="weatherCard-button" onClick={changeUnitTemperature}>Degrees ºF/ºC</button>
            </section>

        </article>
    )
}

export default WeatherCard