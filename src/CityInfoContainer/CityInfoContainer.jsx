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

function isTemp(key){
    return key.slice(0,4) ==="temp"
}

function getInfoCompo(obj, key){
    return (<Info>{key} : {obj[key]}</Info>)
}
function convertSimpleObjToReactArray(obj){
    let compoList = []
    let nonRenderList = ["id", "base", "feels_like", "visibility", "deg", "all", "dt", "sunrise", "sunset", "timezone", "type", "icon", "cod"]
    Object.keys(obj).forEach((key) =>{
        if (!(nonRenderList.includes(key))){
            if (isTemp(key)){
                obj[key] = `${kelvinToCels(obj[key]).toFixed(3)}°`
            }
            compoList.push(getInfoCompo(obj, key))
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