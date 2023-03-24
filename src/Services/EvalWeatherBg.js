export default function EvaluateCurrentBackground(input){
    let result = "";
    switch(input){
        case "01d" || "01n": result = "sunnyDay"; break;
        case "02d" || "02n": result = "scatteredClouds"; break;
        case "03d" || "03n": result = "sunBehindCloud"; break;
        case "04d" || "04n": result = "cloudy"; break;
        case "09d" || "09n": result = "sunAndRain"; break;
        case "10d" || "10n": result = "rainyDay"; break;
        case "11d" || "11n": result = "thunder"; break;
        case "13d" || "13n": result = "snow"; break;
        case "50d" || "50n": result = "fog"; break;
        default: result = "sunnyDay"; break;
    }
    return result;
};