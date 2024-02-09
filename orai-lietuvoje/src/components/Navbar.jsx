import { React } from "react";
import { useNavigate } from "react-router-dom"

const navigations = [
    {text: "Miestai", url:"/miestai", class: "font-poppins font-semibold text-gray-800"},
    {text: "Klaipėda", url:"/miestai/klaipeda", class: "font-poppins font-semibold text-gray-800 hidden xl:inline"},
    {text: "Kaunas", url:"/miestai/kaunas", class: "font-poppins font-semibold text-gray-800 hidden xl:inline"},
    {text: "Vilnius", url:"/miestai/vilnius", class: "font-poppins font-semibold text-gray-800 hidden xl:inline"}
]

function Navbar() {

    return (
        <nav className="flex justify-around items-center py-5 bg-green-400">
            <a className="text-2xl font-bold font-poppins text-gray-500" title="Orai Lietuvoje" href={"/"}>Orai Lietuvoje</a>
            <div className="flex flex-row gap-x-4">
                {navigations.map((option) => (<a className={option.class} href={option.url}>{option.text}</a>))}
            </div>
        </nav>
    )
}

export default Navbar