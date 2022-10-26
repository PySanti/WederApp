import {React} from "react"
import { getWeather } from "./getWeather"
import { MainCompo } from "./MainCompo/MainCompo"

export function setCurrentCityData(newCity, root){
    /**
     * El objetivo de esta function es renderizar nuevamente el MainCompo con los datos de la nueva ciudad
     * 
     * 
     */
    getWeather(newCity).then(info => {
        if (info.cod !== "404"){
            root.render(
                <MainCompo currentCity={newCity} root={root} info={JSON.stringify(info)}/>
            )
        }

    })
}