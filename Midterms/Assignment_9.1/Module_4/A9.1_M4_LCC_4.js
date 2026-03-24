// --- Mock fetch and weather data for testing ---
const mockWeatherDB = {
    'Berlin': { wind: { speed: 16, deg: 117 }, clouds: 20, temp: 5, precipitation: 10 },
    'Oslo':   { wind: { speed: 8,  deg: 170 }, clouds: 0,  temp: 0,  precipitation: 0  },
    'Yakutsk':{ wind: { speed: 0,  deg: 0   }, clouds: 0,  temp: -40, precipitation: 0 }
};

// Mock fetch simulating REST service at localhost:3000/weather
function fetch(url) {
    return new Promise(resolve => {
        let urlObj = new URL(url);
        let city = urlObj.searchParams.get('city');
        let info = urlObj.searchParams.get('info');
        let data = mockWeatherDB[city];
        let weather = {};
        if (data) {
            if (info && info !== 'all' && data[info] !== undefined) {
                weather[info] = data[info];
            } else {
                weather = { ...data };
            }
        }
        resolve({ json: () => Promise.resolve({ city, weather }) });
    });
}

// --- Challenge #4 ---
function getWeather(cities, info = 'all') {
    // Normalize cities to array
    if (!Array.isArray(cities)) cities = [cities];

    let promises = cities.map(city => {
        let url = `http://localhost:3000/weather?city=${city}`;
        if (info && info !== 'all') url += `&info=${info}`;

        return fetch(url)
            .then(res => res.json())
            .then(data => {
                let w = data.weather;
                console.log(`CITY: ${data.city}`);
                if (w.wind !== undefined) {
                    console.log(`WIND: ${w.wind.speed} m/s, ${w.wind.deg} deg`);
                    // Warning if wind speed exceeds threshold
                    if (w.wind.speed > 15) console.log('WARNING! Wind speed over 15 m/s');
                }
                if (w.clouds !== undefined) console.log(`CLOUDS: ${w.clouds} %`);
                if (w.temp !== undefined) {
                    console.log(`TEMP: ${w.temp} C`);
                    // Warning if temperature is critically low
                    if (w.temp < -20) console.log('WARNING! Temperature below -20 degrees');
                }
                if (w.precipitation !== undefined) console.log(`PRECIPITATION: ${w.precipitation} %`);
            });
    });

    return Promise.all(promises);
}

let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %