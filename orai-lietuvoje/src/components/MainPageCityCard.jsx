import React, { useEffect, useState } from "react"
import axios from "axios"
import WeatherInfo from "./weatherDateInfo";

function CityCard({ city_code }) {
    const [miestas, setMiestas] = useState({
        place: {},
        forecastCreationTimeUTC: "",
        forecastTimestamps: [],
        forecastType: ""
    })
    const [weatherInformation, setWeatherInformation] = useState([])

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city_code}/forecasts/long-term`)
        .then((rezultatas) => {
            setMiestas(rezultatas.data)
            const current_date = new Date();
            let newTimestamp = []
            for (const data of rezultatas.data.forecastTimestamps) {
                const date = new Date(data.forecastTimeUtc);
                
                switch (date.getDate()) {
                    case current_date.getDate():
                        switch (date.getHours()) {
                            case 12:
                                newTimestamp.push(data)
                                continue
                        }
                    case current_date.getDate() + 1:
                        switch (date.getHours()) {
                            case 0:
                                newTimestamp.push(data)
                                continue
                            case 12:
                                newTimestamp.push(data)
                                continue
                        }
                    case current_date.getDate() + 2:
                        switch (date.getHours()) {
                            case 0:
                                newTimestamp.push(data)
                                continue
                            case 12:
                                newTimestamp.push(data)
                                continue
                        }
                    }

                }
                setWeatherInformation(newTimestamp)
            }
        )
    }, [])

    console.log(weatherInformation)
    console.log("city_data", miestas)

    return (
        <div className="border border-1 rounded-xl p-5 my-5 flex flex-col">
            <div className="flex flex-col">
                <h2 className="text-gray-600 text-xl font-semibold">{miestas.place.name}</h2>
                <p className="font-extralight text-gray-400">{miestas.place.administrativeDivision}</p>
            </div>
            <div className="grid grid-rows-auto grid-flow-row gap-2 lg:grid-cols-4">
                {weatherInformation.map(day_info => (<WeatherInfo date={day_info.forecastTimeUtc} conditionCode={day_info.conditionCode} airTemperature={day_info.airTemperature} feelsLikeTemperature={day_info.feelsLikeTemperature} windDirection={day_info.windDirection} windSpeed={day_info.windSpeed} cloudCover={day_info.cloudCover} />))}
            </div>
            <a className="justify-center rounded-xl my-5 text-center bg-gray-200 p-10 lg:p-5" href={`/miestai/${city_code}`}>
                Žiūrėti toliau...
            </a>
        </div>
    )
}

export default CityCard