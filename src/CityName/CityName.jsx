import {React} from "react"
import { imgUrl } from "../imgUrl"
import "./CityNameStyles.css"

function capitalString(string){
    let newString = string.charAt(0).toUpperCase() + string.slice(1,string.lenght).toLowerCase()
    return newString
}

export function CityName({currentCity, info}){
    return (
        <div className="page-header">
            <h1 className="page-header__city-name">{capitalString(currentCity)}</h1>
            <img className = "page-header__img" src={imgUrl(info.weather[0].icon)} alt="img not found ;("></img>
        </div>
    )
}