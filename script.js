const apikey = "9dd98bb6dbb582cbeab4e1970ae8d95e";
// const weatherDataE1 = document.getElementById("Weather-id");
/*const cityInputE1= document.getElementById("city-input");

const formE1=document.querySelector("form");

formE1.addEventListener("submit", (event)=> {
    event.preventDefault();
    const cityValue=cityInputE1.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try {
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
} */


const weatherDataE1 = document.getElementById("Weather-data")

const cityInputE1 = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=> {
    weatherDataE1.querySelector('.error').textContent='';
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        
        const data = await response.json();
        
        const temperature = Math.round(data.main.temp)
        
        const description = data.weather[0].description
        
        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.feels_like}`,
            `Wind speed: ${data.wind.speed}`,
        ]
        weatherDataE1.querySelector('.temperature').textContent = `${temperature}°C`;
        weatherDataE1.querySelector('.description').textContent=description;
        weatherDataE1.querySelector('.details').innerHTML=details.map((detail)=>`<div>${detail}</div>`).join('');

        }   catch (error) {
            weatherDataE1.querySelector('.error').nthtextContent='Please Enter Valid Name';
        }
}