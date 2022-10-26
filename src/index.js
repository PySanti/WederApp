import {React, StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./normalize.css"
import "./index.css"
import { MainCompo } from "./MainCompo/MainCompo"

let root  = createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <MainCompo currentCity="Caracas" root={root} info=""/>
    </StrictMode>
)
