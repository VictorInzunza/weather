import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)


  //Aqui montamos las coordenadas de la api al navegador y las montamos en un estado

  const success = (pos) => {
    const newCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(newCoords)
  }

  const newCallAPISearch = (cityName) => {
    const API_KEY = "a6805cf8a84c6882283fb7617a1a083e"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    axios.get(URL)
      .then(res => setWeather(res.data))
      .catch(err => alert("Not found this place"))
  }

  //Funcion para cambiar la temperatura
  const changeUnitTemperature = () => {
    setIsCelsius(!isCelsius)
  }



  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  // Peticion de datos a la api

  useEffect(() => {
    if (coords) {
      const API_KEY = "a6805cf8a84c6882283fb7617a1a083e"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => {
          const tempKelvin = res.data.main.temp
          const tempCelsius = (tempKelvin - 273.15).toFixed(1)
          const tempFahrenheit = ((tempCelsius * 9 / 5) + 32).toFixed(1)
          const newTemperature = {
            celsius: tempCelsius, fahrenheit: tempFahrenheit
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [coords])



  return (
    <div className="App">


      {
        weather ? (
          <>
            <h1 className='title'>Weather App</h1>
            <WeatherCard
              weather={weather}
              temperature={temperature}
              changeUnitTemperature={changeUnitTemperature}
              isCelsius={isCelsius}
              newCallAPISearch={newCallAPISearch}
            />
          </>
        ) : <p>

          <div class="socket">
            <div class="gel center-gel">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c1 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c2 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c3 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c4 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c5 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c6 r1">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c7 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

            <div class="gel c8 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c9 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c10 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c11 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c12 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c13 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c14 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c15 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c16 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c17 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c18 r2">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c19 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c20 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c21 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c22 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c23 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c24 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c25 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c26 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c28 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c29 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c30 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c31 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c32 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c33 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c34 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c35 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c36 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>
            <div class="gel c37 r3">
              <div class="hex-brick h1"></div>
              <div class="hex-brick h2"></div>
              <div class="hex-brick h3"></div>
            </div>

          </div>
        </p>
      }

    </div>
  )
}

export default App
