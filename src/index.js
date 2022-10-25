import {React, StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {getWeather} from "./getWeather"
import "./normalize.css"
import "./index.css"


let root  = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <div className="main-container">

        </div>
    </StrictMode>
)