import React from "react";
import { CityName } from "../CityName/CityName"
import { CitySetter } from "../CitySetter/CitySetter"
import { CityInfoContainer } from "../CityInfoContainer/CityInfoContainer"


export function MainCompo({currentCity, root, info}){
    return (
        <div className="main-container">
            <CityName currentCity={currentCity}/>
            <CityInfoContainer currentCity={currentCity} info={info}/>
            <CitySetter currentCity={currentCity} root={root}/>
        </div>
    )
}

