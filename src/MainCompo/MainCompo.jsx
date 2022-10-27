import React from "react";
import { CityName } from "../CityName/CityName"
import { CitySetter } from "../CitySetter/CitySetter"
import { CityInfoContainer } from "../CityInfoContainer/CityInfoContainer"
import "./MainCompoStyles.css"


export function MainCompo({currentCity, root, info}){
    return (
        <div className="main-container">
            <CityName currentCity={currentCity} info={info}/>
            <CityInfoContainer info={info}/>
            <CitySetter currentCity={currentCity} root={root}/>
        </div>
    )
}

