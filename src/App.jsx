import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Weather from './components/Weather'
const App = () => {
  const [searchParam, setSearchParam] = useState('egypt')
  const [weather,setWeather] = useState({})

  const paramHandler=(searchTerm)=>{
    setSearchParam(()=>searchTerm)
  }
  async function fetchWeatherData(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchParam}&appid=${import.meta.env.VITE_API_KEY}`)
    const data =await response.json()

    setWeather((d)=>{return {
      ...d,
      city:data.name,
      weatherd: data.weather[0].main,
      weatherDescription: data.weather[0].description,
      temp: data.main.temp,
      windSpeed: data.wind.speed,
      humidity: data.main.humidity,
      country:data.sys.country
    }})
  }

  useEffect(()=>{
    fetchWeatherData()
  },[searchParam])

  return (
    <div className='sm:px-10 md:px-20 max-w-3xl mx-auto px-4 py-20 flex flex-col gap-8'>
      <Search setParam = {paramHandler}/>
      {(weather.city && weather.temp && weather.windSpeed)?<Weather data = {weather}/>:<p>loading....</p>}
    </div>
  )
}

export default App