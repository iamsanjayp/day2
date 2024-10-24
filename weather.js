const apikey = '0d3e0d16e0d77a2d05ed526b276a6599';
const fetchweather = document.getElementById('fetchweather');
const result = document.getElementById('result');

fetchweather.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if(city){
        getweather(city);
    }
    else{
        result.innerHTML = "<p>Enter a city</p>";
    }
});

async function getweather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        displayweather(data);
    }
    catch(error){
        result.innerHTML = "<p>There was an error</p>";
    }
}

function displayweather(data) {
    const { name, main, weather } = data;
    const weatherHTML = `
        <h3>Weather in ${name}</h3>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
    `;
    result.innerHTML = weatherHTML;
}
