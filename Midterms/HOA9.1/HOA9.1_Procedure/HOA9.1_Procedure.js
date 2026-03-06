class WeatherDashboard {
  #cities;
  #weatherData;

  constructor() {
    this.#cities = new Set();
    this.#weatherData = new Map();
  }

  addCity(city) {
    this.#cities.add(city);
  }

  async syncData(fetchFunction) {
    const results = await Promise.allSettled(
      [...this.#cities].map(city =>
        fetchFunction(city).then(data => ({ city, data }))
      )
    );

    for (const result of results) {
      if (result.status === 'fulfilled') {
        const { city, data } = result.value;
        this.#weatherData.set(city, data.weather);
      } else {
        console.error('Failed to fetch:', result.reason.message);
      }
    }
  }

  getHottestCity() {
    if (this.#weatherData.size === 0) return null;

    let hottestCity = null;
    let highestTemp = -Infinity;

    for (const [city, weather] of this.#weatherData) {
      if (weather.temp > highestTemp) {
        highestTemp = weather.temp;
        hottestCity = city;
      }
    }

    return hottestCity;
  }
}

// Do not modify! Test code
// Mock fetch function simulating an API call
const mockWeatherFetch = async (city) => {
  const delay = Math.floor(Math.random() * 500) + 100;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city === 'Atlantis') reject(new Error('City not found'));
      const mockData = {
        Oslo: { temp: -5, wind: 12 },
        Manila: { temp: 32, wind: 5 },
        Tokyo: { temp: 15, wind: 8 }
      };
      resolve({ city: city, weather: mockData[city] || { temp: 20, wind: 2 } });
    }, delay);
  });
};

const dashboard = new WeatherDashboard();
dashboard.addCity('Oslo');
dashboard.addCity('Manila');
dashboard.addCity('Tokyo');
dashboard.addCity('Oslo');
dashboard.addCity('Atlantis');

(async () => {
  console.log('Synchronizing data...');
  await dashboard.syncData(mockWeatherFetch);
  console.log('Hottest city is:', dashboard.getHottestCity());
})();