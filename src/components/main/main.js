import React, {useState} from 'react'
import {Heading,
        DataBuilder,
        Inputer,
        MainContainer,
        Сonclusion,
        WeatherNow,
        Temperatute,
        IconWeather,
        Description,
        Searc,
        Empty,
        EmptyIMG
} from "./mainElements";
import images from '../../assets/robot.png'



const apiWeather = {
    api: 'https://api.openweathermap.org/data/2.5/',
    key: '9b13f3ac1946d88c555901589ec02fe1'
}



const dataBuild = (d) => {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`


}
const TimeBuild = (t) => {
    let hour = t.getHours()
    let minute = t.getMinutes()

    return `${hour}:${minute}`
}
function Main() {
    const [query, setQuery] = useState('')
    const [weather,setWeather] = useState({})
    const search = evt => {
        if(evt.key === 'Enter') {
            fetch(`${apiWeather.api}weather?q=${query}&units=metric&appid=${apiWeather.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                    setQuery('')
                    console.log(result)
                })

        }
    }

    return (
        <MainContainer>
            <Heading>Weather app</Heading>
            <Searc>
                <Inputer type='text'
                         placeholder='Enter sity to check weather...'
                         onChange={e => setQuery(e.target.value)}
                         value={query}
                         onKeyPress={search}/>
            </Searc>

            {(typeof weather.main != "undefined") ? (
                <div>
                    <DataBuilder>{TimeBuild(new Date())}, {dataBuild(new Date())}</DataBuilder>
                    <Сonclusion>{weather.name}, {weather.sys.country}</Сonclusion>
                    <WeatherNow>{weather.weather[0].main}</WeatherNow>
                    <IconWeather src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                 alt='image'/>
                    <Temperatute>{Math.round(weather.main.temp)}°c</Temperatute>
                    <Description>{weather.weather[0].description}</Description>

                </div>
                ) :
                (<Empty>
                    <EmptyIMG src={images} alt={"images"}/>
                </Empty>)}

        </MainContainer>
    );
}

export default Main