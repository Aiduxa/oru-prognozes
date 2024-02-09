import react, { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios"

function CitiesPage() {

    const [miestai, setMiestai] = useState({})
    const [savivaldybes, setSavivaldybes] = useState([])

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places`)
        .then((rezultatas) => {
            setMiestai(rezultatas.data)
            const savivaldybes = {} 
            for (const place of rezultatas.data) {
                if (place.countryCode == "LT") {
                    if (place.administrativeDivision in savivaldybes) {
                        savivaldybes[place.administrativeDivision].push({kodas: place.code, pavadinimas: place.name})
                        continue
                    }
                    else {
                        savivaldybes[place.administrativeDivision] = [{kodas: place.code, pavadinimas: place.name}]
                    }
                }
            }
        })
    }, [])

    console.log(miestai)
    console.log(savivaldybes)

    return (
        <>
        <Navbar />
        <main className="min-h-screen">
            <article>
                <div>
                    {savivaldybes.map((savivaldybe) => (
                        <>    
                            <h1 className="text-black font-bold">{savivaldybe}</h1>
                            <div>
                                {miestai[savivaldybe].map((miestas) => (
                                    <a className="text-black" href={`/miestai/${miestas.kodas}`}>{miestas.pavadinimas}</a>
                                ))}
                            </div>
                        </>
                    ))}
                </div>
            </article>
        </main>
        <Footer />
        </>
    )
}

export default CitiesPage;