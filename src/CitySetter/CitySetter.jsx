import {React} from "react"
import { setCurrentCityData } from "../setCurrentCityData"


export function CitySetter({currentCity, root}){
    /* 
    * Este componente es un input de tipo texto que, cuando presionas enter, llama a setCurrentCityData 
    */
    return (
        <>
            <input onKeyDown={(e) => {
                if (e.key === "Enter"){
                    currentCity = e.target.value
                    e.target.value = ""
                    setCurrentCityData(currentCity, root)
                }
            }} type="text" className="input-container__input-text" id="cityName-input"></input>
        </>
    )
}

