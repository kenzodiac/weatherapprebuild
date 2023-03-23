//function that determines the weather icons used across the website based on API inputs
export default function EvaluateWeatherIcon(input){
    let result = "";
    switch(input){
        case "01d": result = "../assets/images/weatherIcons/sunIcon.png"; break;
        case "01n": result = "../assets/images/weatherIcons/clearMoonIcon.png"; break;
        case "02d" || "02n": result = "../assets/images/weatherIcons/sunBehindSmallCloudIcon.png"; break;
        case "03d" || "03n": result = "../assets/images/weatherIcons/sunBehindCloudIcon.png"; break;
        case "04d" || "04n": result = "../assets/images/weatherIcons/cloudIcon.png"; break;
        case "09d" || "09n": result = "../assets/images/weatherIcons/sunBehindRainCloudIcon.png"; break;
        case "10d" || "10n": result = "../assets/images/weatherIcons/rainCloudIcon.png"; break;
        case "11d" || "11n": result = "../assets/images/weatherIcons/lightningCloudIcon.png"; break;
        case "13d" || "13n": result = "../assets/images/weatherIcons/snowflakeIcon.png"; break;
        case "50d" || "50n": result = "../assets/images/weatherIcons/fogIcon.png"; break;
        default: result = "../assets/images/weatherIcons/sunIcon.png"; break;
    }
    return result;
};