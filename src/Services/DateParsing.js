//functions that parse date/time data
let currentTimeAmPm = '';

function EvaluateDayOfWeek(date){
    let result = "";
    switch(date.getDay()){
        case 0: result = "Sunday"; break;
        case 1: result = "Monday"; break;
        case 2: result = "Tuesday"; break;
        case 3: result = "Wednesday"; break;
        case 4: result = "Thursday"; break;
        case 5: result = "Friday"; break;
        case 6: result = "Saturday"; break;
        default: break;
    }
    return result;
};

function EvaluateMonth(date){
    let result ="";
    switch(date.getMonth()){
        case 0: result = "January"; break;
        case 1: result = "February"; break;
        case 2: result = "March"; break;
        case 3: result = "April"; break;
        case 4: result = "May"; break;
        case 5: result = "June"; break;
        case 6: result = "July"; break;
        case 7: result = "August"; break;
        case 8: result = "September"; break;
        case 9: result = "October"; break;
        case 10: result = "November"; break;
        case 11: result = "December"; break;
        default: break;
    }
    return result;
};

function EvaluateHours(date){
    let temp = date.getHours();
    let result = "";
    if (temp <= 23 && temp >= 13){
        result = (temp - 12);
        currentTimeAmPm = "pm";
    } else if (temp == 12){
        result = temp;
        currentTimeAmPm = "pm";
    } else if (temp <= 11 && temp >= 1){
        result = temp;
        currentTimeAmPm = "am";
    } else if (temp == 0) {
        result = 12;
        currentTimeAmPm = "am";
    }
    return result;
};

function EvaluateMins(date){
    let result = "";
    if (date.getMinutes() <= 9){
        result = "0" + date.getMinutes();
    } else {
        result = date.getMinutes();
    }
    return result;
};

export default function EvaluateCurrentTime(){
    let currentTimeData = new Date();
    let currentTimeModel = {
        'currentTime' : `${EvaluateHours(currentTimeData)}:${EvaluateMins(currentTimeData)}${currentTimeAmPm}`,
        'currentDate' : `${EvaluateMonth(currentTimeData)} ${currentTimeData.getDate()}, ${currentTimeData.getFullYear()}`,
        'currentTimeDayOfWeek' : EvaluateDayOfWeek(currentTimeData)
    };
    return currentTimeModel;
};