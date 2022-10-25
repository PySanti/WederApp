
export function getWeather(cityName){
    let apiKey = "1ecf95a266618ca42f55e043f5bb942a";
    let data =  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`).then((response) => {
        if (response.ok){
            return response
        } else{
            throw new Error(`Error en la solicitud de clima de ${cityName}`)
        }
    })
    return data;
}
