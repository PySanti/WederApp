import {createRoot} from "react-dom/client"
import "./normalize.css"
import { setCurrentCityData } from "./setCurrentCityData"

let root  = createRoot(document.getElementById('root'))
setCurrentCityData("Caracas", root)