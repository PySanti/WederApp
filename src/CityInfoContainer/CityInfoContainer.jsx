import {React} from "react"
import "./CityInfoContainerStyles.css"
import {Info} from "./InfoComponent"

function kelvinToCels(kelvin){
    return kelvin - 273.15
}
function convertObjToSimpleObj(info){
    let componentList = {};
    Object.keys(info).forEach((key) => {
        if ((typeof info[key]) === "object"){
            let innerObj = convertObjToSimpleObj(info[key]);
            Object.keys(innerObj).forEach((key2) => {
                componentList[key2] = innerObj[key2]
            })
        } else {
            componentList[key] = info[key];
        }
    })
    return componentList;
}
function convertSimpleObjToReactArray(obj){
    let compoList = []
    let nonRenderList = ["id", "base", "feels_like", "visibility", "deg", "all", "dt", "sunrise", "sunset", "timezone", "type", "icon", "cod"]
    Object.keys(obj).forEach((key) =>{
        if (key.slice(0,4) ==="temp"){
            obj[key] = `${kelvinToCels(obj[key]).toFixed(3)}°`
            compoList.push(<Info>{key} : {obj[key]}</Info>)}
        else{
            if (!(nonRenderList.includes(key))){
                compoList.push(<Info>{key} : {obj[key]}</Info>)
            }
        }
    })
    return compoList;
}



export function CityInfoContainer({info}){
    return (
        <ul className="info-container">
            {convertSimpleObjToReactArray(convertObjToSimpleObj(info))}
        </ul>
    )
}