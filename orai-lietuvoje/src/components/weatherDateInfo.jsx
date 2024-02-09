import React from "react"
import { FaCloud } from "react-icons/fa";

const conditions = {
    "cloudy": <FaCloud />
}

function WeatherInfo( { date, conditionCode, airTemperature, feelsLikeTemperature, windSpeed, windDirection, cloudCover } ) {
    return (
        <div className="bg-gray-200 rounded-xl block p-5">
            <p className="text-xs">{date}</p>
            <span className="text-gray-500 text-3xl">
                {conditions[conditionCode]}
            </span>
            <p className="text-xs">{conditionCode}</p>
            <div className="flex flex-row gap-x-2 items-center">
                <p className="font-poppins">Temperatūra: </p>
                <p className="bg-gray-500 text-gray-200 p-1 rounded-xl">{airTemperature} °C</p>
            </div>
            <p className="text-xs">(Juntamoji temperatūra: {feelsLikeTemperature})</p>
            <div className="flex flex-col">
                <p className="text-md">Vėjas</p>
                <p className="text-xs">Greitis: {windSpeed}/km</p>
                <p className="text-xs">Kryptis: {windDirection}°</p>
            </div>
        </div>
    )
}

export default WeatherInfo