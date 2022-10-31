import {React} from "react"
import { getWeather } from "./getWeather"
import { MainCompo } from "./MainCompo/MainCompo"
import {notLoadedCompoClassName} from "./NotLoadedPageCompo/NotLoadedPageCompo"
import {pageLoaded} from "./index"
import {setPageLoaded} from "./index"

let failedInputErrorMsgClassName = "error-msg-display"

export function setCurrentCityData(newCity, root){
    /**
     * El objetivo de esta function es renderizar nuevamente el MainCompo con los datos de la nueva ciudad
     * 
     * 
     */
        getWeather(newCity).then(info => {
        if (!pageLoaded){
            let notLoadedCompo = document.getElementsByClassName(notLoadedCompoClassName)[0];
            notLoadedCompo.addEventListener("onload", () => {
                notLoadedCompo.classList.remove(notLoadedCompoClassName)
            })
            setPageLoaded(true)
        }
        if (!(info === undefined)){
            if (info.cod !== "404"){
                root.render(
                    <MainCompo currentCity={newCity} root={root} info={info}/>
                )
            } else {
                let errorMsg = document.getElementsByClassName("error-msg")[0];
                errorMsg.classList.add(failedInputErrorMsgClassName)
                setTimeout(()=>{
                    errorMsg.classList.remove(failedInputErrorMsgClassName)
                }, 1000)
            }
        }
    })
}