import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CityCard from "../components/MainPageCityCard";
import axios from "axios";

const rodomiMiestai = [
    {miestas: "Klaipėda", miestoKodas:"klaipeda"},
    {miestas: "Kaunas", miestoKodas:"kaunas"},
    {miestas: "Vilnius", miestoKodas:"vilnius"},
]


function MainPage() {

    return (
        <>
            <Navbar />
            <main className="min-h-screen h-auto">
                <article className="mt-20">
                    <div className="flex flex-col mx-5 lg:mx-80">
                            <h1 className="text-4xl">Orai Lietuvoje</h1>
                            <div className="flex flex-col">
                                {
                                rodomiMiestai.map(
                                        (miestas) => (
                                            <CityCard city_code={miestas.miestoKodas} />
                                        )
                                    )
                                }
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
};

export default MainPage;