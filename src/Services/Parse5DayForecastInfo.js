export default async function Parse5DayForecastInfo(currentCity5DayInfo){
    //declare arrays to organize and hold the data of different days
    let sunArr = [];
    let monArr = [];
    let tueArr = [];
    let wedArr = [];
    let thuArr = [];
    let friArr = [];
    let satArr = [];

    //function that will parse date-time info to find the day
    const dayFormatter = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
    })

    //variable to hold the day of the first data point to reference beginning of 5-day forecast
    let beginningDate = dayFormatter.format(currentCity5DayInfo.list[0].dt * 1000);

    //for loop that sorts data into different days
    for (let i = 0; i < currentCity5DayInfo.list.length; i++){
        let tempInfo = dayFormatter.format(currentCity5DayInfo.list[i].dt * 1000);
        if (tempInfo === "Sunday"){
            sunArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Monday"){
            monArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Tuesday"){
            tueArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Wednesday"){
            wedArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Thursday"){
            thuArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Friday"){
            friArr.push(currentCity5DayInfo.list[i]);
        } else if (tempInfo === "Saturday"){
            satArr.push(currentCity5DayInfo.list[i]);
        }
    }
    let output;
    //switch statement to determine the order with which each day's information is presented
    switch (beginningDate){
        case "Sunday":
            output = Process5DayInfoForOutput(sunArr, monArr, tueArr, wedArr, thuArr);
            break;
        case "Monday":
            output = Process5DayInfoForOutput(monArr, tueArr, wedArr, thuArr, friArr);
            break;
        case "Tuesday":
            output = Process5DayInfoForOutput(tueArr, wedArr, thuArr, friArr, satArr);
            break;
        case "Wednesday":
            output = Process5DayInfoForOutput(wedArr, thuArr, friArr, satArr, sunArr);
            break;
        case "Thursday":
            output = Process5DayInfoForOutput(thuArr, friArr, satArr, sunArr, monArr);
            break;
        case "Friday":
            output = Process5DayInfoForOutput(friArr, satArr, sunArr, monArr, tueArr);
            break;
        case "Saturday":
            output = Process5DayInfoForOutput(satArr, sunArr, monArr, tueArr, wedArr);
            break
        default:
            output = {};
            break;
    }
    return output;
};

function Process5DayInfoForOutput(arr1, arr2, arr3, arr4, arr5){
    const dayFormatter = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
    })

    return(
        {
            Day1: {
                title: dayFormatter.format(arr1[0].dt * 1000),
                icon: Determine5DayIcons(arr1),
                highTemp: FindHighTemp(arr1),
                lowTemp: FindLowTemp(arr1)
            },

            Day2: {
                title: dayFormatter.format(arr2[0].dt * 1000),
                icon: Determine5DayIcons(arr2),
                highTemp: FindHighTemp(arr2),
                lowTemp: FindLowTemp(arr2)
            },

            Day3: {
                title: dayFormatter.format(arr3[0].dt * 1000),
                icon: Determine5DayIcons(arr3),
                highTemp: FindHighTemp(arr3),
                lowTemp: FindLowTemp(arr3)
            },

            Day4: {
                title: dayFormatter.format(arr4[0].dt * 1000),
                icon: Determine5DayIcons(arr4),
                highTemp: FindHighTemp(arr4),
                lowTemp: FindLowTemp(arr4)
            },

            Day5: {
                title: dayFormatter.format(arr5[0].dt * 1000),
                icon: Determine5DayIcons(arr5),
                highTemp: FindHighTemp(arr5),
                lowTemp: FindLowTemp(arr5)
            }
        }
    );
};

//function to find which dataset represents the highest temp
function FindHighTemp(arr){
    let result = arr[0].main.temp;
    let highIconVar = "";
    let highDescriptionVar = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i].main.temp > result) {
            result = arr[i].main.temp;
            highIconVar = arr[i].weather[0].icon;
            highDescriptionVar = arr[i].weather[0].main;
        }
    }
    return (
        {
            highTemp: Math.round(result),
            highIcon: highIconVar,
            highDescription: highDescriptionVar
        }
    );
};

//function to find which dataset represents the lowest temp
function FindLowTemp(arr){
    let result = arr[0].main.temp;
    let lowIconVar = "";
    let lowDescriptionVar = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i].main.temp < result) {
            result = arr[i].main.temp;
            lowIconVar = arr[i].weather[0].icon;
            lowDescriptionVar = arr[i].weather[0].main;
        }
    }
    return (
        {
            lowTemp: Math.round(result),
            lowIcon: lowIconVar,
            lowDescription: lowDescriptionVar
        }
    );
};

//function to determine which weather icon should represent a day in the 5-day forcast
function Determine5DayIcons(arr){
    let result = arr[0].weather[0].icon;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].weather[0].icon === "13d" || arr[i].weather[0].icon === "13n"){
            result = "13d";
        } else if (arr[i].weather[0].icon === "11d" || arr[i].weather[0].icon === "11n"){
            result = "11d";
        } else if (arr[i].weather[0].icon === "10d" || arr[i].weather[0].icon === "10n"){
            result = "10d";
        } else if (arr[i].weather[0].icon === "50d" || arr[i].weather[0].icon === "50n"){
            result = "50d";
        } else if (arr[i].weather[0].icon === "09d" || arr[i].weather[0].icon === "09n"){
            result = "09d";
        } else if (arr[i].weather[0].icon === "04d" || arr[i].weather[0].icon === "04n"){
            result = "04d";
        } else if (arr[i].weather[0].icon === "03d" || arr[i].weather[0].icon === "03n"){
            result = "03d";
        } else if (arr[i].weather[0].icon === "02d" || arr[i].weather[0].icon === "02n"){
            result = "02d";
        } else {
            result = "01d";
        }
    }
    return result;
};