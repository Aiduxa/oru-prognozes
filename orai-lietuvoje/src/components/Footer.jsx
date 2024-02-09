import React from "react"

const miestai = [
    {text: "Kaunas", url: "/miestai/kaunas"},
    {text: "Klaipėda", url: "/miestai/klaipeda"},
    {text: "Vilnius", url: "/miestai/vilnius"},
]

function Footer() {
    return (
        <footer className="flex flex-row justify-around">
            <div>
                <span className="text-gray-600 font-poppins text-xl font-bold">Orai Lietuvoje</span>
                <p className="text-light text-gray-400">Sukurta 2024-02-09<br /> Aidas Šalvis 3JS-1</p>
            </div>
            <div className="flex flex-col">
            <span className="text-gray-600 font-poppins text-xl font-bold">Miestai</span>
            <div className="flex flex-col">
                {miestai.map((miestas) => (<a className="text-light text-gray-400" href={miestas.url}>{miestas.text}</a>))}
            </div>
            </div>
        </footer>
    )
}

export default Footer;