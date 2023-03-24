import sunIcon from '../assets/images/weatherIcons/sunIcon.png';
import clearMoonIcon from '../assets/images/weatherIcons/clearMoonIcon.png';
import sunBehindSmallCloudIcon from '../assets/images/weatherIcons/sunBehindSmallCloudIcon.png';
import sunBehindCloudIcon from '../assets/images/weatherIcons/sunBehindCloudIcon.png';
import cloudIcon from '../assets/images/weatherIcons/cloudIcon.png';
import sunBehindRainCloudIcon from '../assets/images/weatherIcons/sunBehindRainCloudIcon.png'
import rainCloudIcon from '../assets/images/weatherIcons/rainCloudIcon.png';
import lightningCloudIcon from '../assets/images/weatherIcons/lightningCloudIcon.png';
import snowflakeIcon from '../assets/images/weatherIcons/snowflakeIcon.png';
import fogIcon from '../assets/images/weatherIcons/fogIcon.png';


//function that determines the weather icons used across the website based on API inputs
export default function EvaluateWeatherIcon(input){
    let result = "";
    switch(input){
        case "01d": result = sunIcon; break;
        case "01n": result = clearMoonIcon; break;
        case "02d" || "02n": result = sunBehindSmallCloudIcon; break;
        case "03d" || "03n": result = sunBehindCloudIcon; break;
        case "04d" || "04n": result = cloudIcon; break;
        case "09d" || "09n": result = sunBehindRainCloudIcon; break;
        case "10d" || "10n": result = rainCloudIcon; break;
        case "11d" || "11n": result = lightningCloudIcon; break;
        case "13d" || "13n": result = snowflakeIcon; break;
        case "50d" || "50n": result = fogIcon; break;
        default: result = sunIcon; break;
    }
    return result;
};