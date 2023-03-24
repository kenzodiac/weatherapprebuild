function saveFavoriteToLocalStorage(location){
    let favorites = getLocalStorage();
    let tempLoc = location[0];
    // console.log(tempLoc);
    // let checker = false;
    
    // for (let i = 0; i < favorites.length; i++){
    //     console.log(i);
    //     if (favorites[i].name == tempLoc.name && favorites[i].state == tempLoc.state){
    //         checker = true;
    //     }
    // }

    // if (checker === false && favorites[7] === null) {
        favorites.push(tempLoc);
    // }
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

function getLocalStorage(){
    let localStorageData = localStorage.getItem('Favorites');

    if(localStorageData === null){
        return [];
    }
    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(location){
    let favorites = getLocalStorage();

    for (let i = 0; i < favorites.length; i++){
        if (favorites[i].name === location.name && favorites[i].state === location.state){
            favorites.splice(i, 1);
        }
    }

    localStorage.setItem('Favorites', JSON.stringify(favorites))
}

function saveLatitudeToLocalStorage(lat){
    localStorage.setItem('Latitude', lat);
}
function saveLongitudeToLocalStorage(lon){
    localStorage.setItem('Longitude', lon);
}
function getCoordsLocalStorage(){
    let tempLat = localStorage.getItem('Latitude');
    let tempLon = localStorage.getItem('Longitude');
    if(tempLat === null || tempLon === null){
        return [];
    } else {
        return {
            Latitude: tempLat,
            Longtiude: tempLon
        }
    }
}

export { saveFavoriteToLocalStorage, getLocalStorage, removeFromLocalStorage, saveLatitudeToLocalStorage, saveLongitudeToLocalStorage, getCoordsLocalStorage };