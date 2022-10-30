import {createRoot} from "react-dom/client"
import "./normalize.css"
import { setCurrentCityData } from "./setCurrentCityData"
import { NotLoadedPageCompo } from "./NotLoadedPageCompo/NotLoadedPageCompo"

let root  = createRoot(document.getElementById('root'))
export let pageLoaded = false;

export function setPageLoaded(newVal){
    pageLoaded = newVal;
}

root.render(
    <NotLoadedPageCompo/>
)
setCurrentCityData("Caracas", root)