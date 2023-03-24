//parsing state names into state codes custom function
export default function ParseStateInfo(state, country){
    let stateCode;
    switch(state){
        case "Alabama": stateCode = "AL"; break;
        case "Alaska": stateCode = "AK"; break;
        case "Arizona": stateCode = "AZ"; break;
        case "Arkansas": stateCode = "AR"; break;
        case "American Samoa": stateCode = "AS"; break;
        case "California": stateCode = "CA"; break;
        case "Colorado": stateCode = "CO"; break;
        case "Connecticut": stateCode = "CT"; break;
        case "Delaware": stateCode = "DE"; break;
        case "District of Columbia": stateCode = "DC"; break;
        case "Florida": stateCode = "FL"; break;
        case "Georgia": stateCode = "GA"; break;
        case "Guam": stateCode = "GU"; break;
        case "Hawaii": stateCode = "HI"; break;
        case "Idaho": stateCode = "ID"; break;
        case "Illinois": stateCode = "IL"; break;
        case "Indiana": stateCode = "IN"; break;
        case "Iowa": stateCode = "IA"; break;
        case "Kansas": stateCode = "KS"; break;
        case "Kentucky": stateCode = "KY"; break;
        case "Louisiana": stateCode = "LA"; break;
        case "Maine": stateCode = "ME"; break;
        case "Maryland": stateCode = "MD"; break;
        case "Massachusetts": stateCode = "MA"; break;
        case "Michigan": stateCode = "MI"; break;
        case "Minnesota": stateCode = "MN"; break;
        case "Mississippi": stateCode = "MS"; break;
        case "Missouri": stateCode = "MO"; break;
        case "Montana": stateCode = "MT"; break;
        case "Nebraska": stateCode = "NE"; break;
        case "Nevada": stateCode = "NV"; break;
        case "New Hampshire": stateCode = "NH"; break;
        case "New Jersey": stateCode = "NJ"; break;
        case "New Mexico": stateCode = "NM"; break;
        case "New York": stateCode = "NY"; break;
        case "North Carolina": stateCode = "NC"; break;
        case "North Dakota": stateCode = "ND"; break;
        case "Northern Mariana Islands": stateCode = "MP"; break;
        case "Ohio": stateCode = "OH"; break;
        case "Oklahoma": stateCode = "OK"; break;
        case "Oregon": stateCode = "OR"; break;
        case "Pennsylvania": stateCode = "PA"; break;
        case "Puerto Rico": stateCode = "PR"; break;
        case "Rhode Island": stateCode = "RI"; break;
        case "South Carolina": stateCode = "SC"; break;
        case "South Dakota": stateCode = "SD"; break;
        case "Tennessee": stateCode = "TN"; break;
        case "Texas": stateCode = "TX"; break;
        case "Trust Territories": stateCode = "TT"; break;
        case "Utah": stateCode = "UT"; break;
        case "Vermont": stateCode = "VT"; break;
        case "Virginia": stateCode = "VA"; break;
        case "United States Virgin Islands": stateCode = "VI"; break;
        case "Washington": stateCode = "WA"; break;
        case "West Virginia": stateCode = "WV"; break;
        case "Wisconsin": stateCode = "WI"; break;
        case "Wyoming": stateCode = "WY"; break;
        default: stateCode = null;
    }
    if (stateCode === null) {
        // console.log(country);
        return country;
    } else {
        // console.log(stateCode);
        return stateCode;
    }
};