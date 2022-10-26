
export async function getWeather(cityName){
    const apiKey = "1ecf95a266618ca42f55e043f5bb942a";
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
        const data = await response.json();
        return data; // se devolverá como una promesa, porque la función es async
    } catch(error) {
        throw new Error(`Error en la solicitud de clima de ${cityName}`)
    }
}
