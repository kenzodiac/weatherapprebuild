export default function EvaluateFiveDayCardBg(input){
    let result = "";
    switch(input){
        case "01d" || "01n": result = "sunnyDayColor"; break;
        case "02d" || "02n": result = "scatteredCloudsColor"; break;
        case "03d" || "03n": result = "sunBehindCloudColor"; break;
        case "04d" || "04n": result = "cloudyColor"; break;
        case "09d" || "09n": result = "sunAndRainColor"; break;
        case "10d" || "10n": result = "rainyDayColor"; break;
        case "11d" || "11n": result = "thunderColor"; break;
        case "13d" || "13n": result = "snowColor"; break;
        case "50d" || "50n": result = "fogColor"; break;
        default: result = "sunnyDayColor"; break;
    }
    return result;
};