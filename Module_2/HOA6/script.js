// script.js
document.addEventListener('DOMContentLoaded', () => {
    const getLocationButton = document.getElementById('getLocation');
    const resultElement = document.getElementById('result');
    
    getLocationButton.addEventListener('click', () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                let continent = "Unknown";
                let facts = "";
                
                // Complete continent ranges
                if (latitude >= 10 && latitude <= 72 && longitude >= -170 && longitude <= -50) {
                    continent = "North America";
                    facts = "Home to Rocky Mountains, Great Lakes, and Niagara Falls.";
                } else if (latitude >= -60 && latitude <= 15 && longitude >= -85 && longitude <= -30) {
                    continent = "South America";
                    facts = "Features Amazon Rainforest and Andes Mountains.";
                } else if (latitude >= 35 && latitude <= 72 && longitude >= -25 && longitude <= 45) {
                    continent = "Europe";
                    facts = "Contains Alps, Mediterranean Sea, and Danube River.";
                } else if (latitude >= -35 && latitude <= 40 && longitude >= -20 && longitude <= 55) {
                    continent = "Africa";
                    facts = "Hosts Sahara Desert, Nile River, and Victoria Falls.";
                } else if (latitude >= 0 && latitude <= 80 && longitude >= 60 && longitude <= 180) {
                    continent = "Asia";
                    facts = "Boasts Himalayas, Gobi Desert, and Yangtze River.";
                } else if (latitude >= -50 && latitude <= -10 && longitude >= 110 && longitude <= 180) {
                    continent = "Australia/Oceania";
                    facts = "Features Great Barrier Reef and Outback deserts.";
                }
                
                resultElement.innerHTML = `<strong>${continent}</strong>! ${facts} (Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)})`;
            });
        } else {
            resultElement.textContent = "Geolocation is not supported by your browser.";
        }
    });
});
