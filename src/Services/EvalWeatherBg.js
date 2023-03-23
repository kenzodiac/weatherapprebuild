export default function EvaluateCurrentBackground(input){
    let result = "";
    switch(input){
        case "01d" || "01n": result = "../assets/images/bgImages/sunnyDay.jpg"; break;
        case "02d" || "02n": result = "../assets/images/bgImages/scatteredClouds.jpg"; break;
        case "03d" || "03n": result = "../assets/images/bgImages/sunBehindCloud.jpg"; break;
        case "04d" || "04n": result = "../assets/images/bgImages/cloudy.jpg"; break;
        case "09d" || "09n": result = "../assets/images/bgImages/sunAndRain.jpg"; break;
        case "10d" || "10n": result = "../assets/images/bgImages/rainyDay.jpg"; break;
        case "11d" || "11n": result = "../assets/images/bgImages/thunder.jpg"; break;
        case "13d" || "13n": result = "../assets/images/bgImages/snow.jpg"; break;
        case "50d" || "50n": result = "../assets/images/bgImages/fog.jpg"; break;
        default: result = "../assets/images/bgImages/sunnyDay.jpg"; break;
    }
    return result;
};