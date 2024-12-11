const apiKey = "2c45b22c0db30b57105d9e37b41105ec";

async function checkWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        // Update the DOM with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${data.main.temp}°c`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
        const weatherIcon = document.querySelector(".weather-icon");
        console.log(data.weather[0].main);
if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/clouds.png";
} else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear.png";
} else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/rain.png";
} else if (data.weather[0].main === "Drizzle"||data.weather[0].main === "Thumderstorm") {
    weatherIcon.src = "images/drizzle.png";
} else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
} 
else if (data.weather[0].main === "Haze") {
    weatherIcon.src = "images/mist.png";
} 

    } catch (error) {
        alert(error.message);
    }
}

// Event listener for the search button
document.querySelector("button").addEventListener("click", () => {
    const city = document.querySelector("input").value;
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
