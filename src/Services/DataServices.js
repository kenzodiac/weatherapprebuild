import { isLive, prod, dev } from "./Environment";

let apiKey = "&appid=";
if (prod.isLive){
    apiKey += prod.apiKey;
} else {
    apiKey += dev.apiKey;
}

//geolocation api fetch/call
async function AsyncLocalWeatherCoords(searchInput){
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1${apiKey}`);
    const data = await promise.json();
    return data;
};

//current weather api fetch/call
async function AsyncLocalWeather(lat, lon){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}${apiKey}&units=imperial`);
    const data = await promise.json();
    return data;
};

//five day weather forecast fetch/call
async function AsyncFiveDayWeather(lat, lon){
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}${apiKey}&units=imperial`);
    const data = await promise.json();
    return data;
};

async function AsyncReverseGeocoding(lat, lon){
    const promise = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}${apiKey}`);
    const data = await promise.json();
    return data;
};

export {AsyncLocalWeatherCoords, AsyncLocalWeather, AsyncFiveDayWeather, AsyncReverseGeocoding};