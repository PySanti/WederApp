import React from "react";
import { CityName } from "../CityName/CityName"
import { CitySetter } from "../CitySetter/CitySetter"
import { CityInfoContainer } from "../CityInfoContainer/CityInfoContainer"
import "./MainCompoStyles.css"
import {ErrorMsg} from "../ErrorMsg/ErrorMsg"


export function MainCompo({currentCity, root, info}){
    return (
        <div className="main-container">
            <CityName currentCity={currentCity} info={info}/>
            <CityInfoContainer info={info}/>
            <div className="citySetter-container">
                <CitySetter currentCity={currentCity} root={root}/>
                <ErrorMsg/>
            </div>
        </div>
    )
}

