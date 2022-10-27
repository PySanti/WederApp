import {React} from "react"

export function Info({children, className=""}){
    if (className !== ""){
        return (
        <>
            <li className={`${className}`}>{children}</li>
        </>)
    } else {
        return (
        <>
            <li>{children}</li>
        </>)
    }

}