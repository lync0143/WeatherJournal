// script.js
document.addEventListener('DOMContentLoaded', function() {
    // This would be the function to fetch weather data and display it
    fetchWeatherData();
});

function fetchWeatherData() {
    // Placeholder for where you'd call the weather API
    // For example, using fetch() to get data from a service like OpenWeatherMap

    // Assuming we have a JSON response, we would process it like this:
    const sampleWeatherData = [
        // Sample data structure
        {
            date: "2023-11-05",
            times: {
                "8am": { tempHigh: 10, tempLow: 5, condition: "Sunny" },
                "12pm": { tempHigh: 15, tempLow: 10, condition: "Partly Cloudy" },
                "8pm": { tempHigh: 8, tempLow: 3, condition: "Clear" }
            }
        },
        // More entries...
    ];

    const weatherEntriesSection = document.getElementById('weather-entries');

    sampleWeatherData.forEach(entry => {
        const article = document.createElement('article');
        article.classList.add('weather-entry');

        const date = document.createElement('h2');
        date.textContent = entry.date;
        article.appendChild(date);

        for (const [time, data] of Object.entries(entry.times)) {
            const timeDiv = document.createElement('div');
            timeDiv.classList.add('weather-time');
            timeDiv.textContent = `${time}: High of ${data.tempHigh}°, Low of ${data.tempLow}°, Condition: ${data.condition}`;
            article.appendChild(timeDiv);
        }

        weatherEntriesSection.appendChild(article);
    });
}
