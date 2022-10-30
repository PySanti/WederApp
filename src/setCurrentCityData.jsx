import {React} from "react"
import { getWeather } from "./getWeather"
import { MainCompo } from "./MainCompo/MainCompo"

let failedInputErrorMsgClassName = "error-msg-display"

export function setCurrentCityData(newCity, root){
    /**
     * El objetivo de esta function es renderizar nuevamente el MainCompo con los datos de la nueva ciudad
     * 
     * 
     */
    getWeather(newCity).then(info => {
        if (!(info === undefined)){
            let errorMsg = document.getElementsByClassName("error-msg")[0];
            if (info.cod !== "404"){
                let mainDescr = (info.weather[0].main).toLowerCase()
                if (mainDescr === "rain"){
                    console.log("lluvias")
                } else if (mainDescr === "clouds"){
                    console.log("Clouds")
                }
                root.render(
                    <MainCompo currentCity={newCity} root={root} info={info}/>
                )
                errorMsg.classList.remove(failedInputErrorMsgClassName)
            } else {
                errorMsg.classList.add(failedInputErrorMsgClassName)
            }
        } else {
            // codigo para cuando no hay internet
        }
    })
}