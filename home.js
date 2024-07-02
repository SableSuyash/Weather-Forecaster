const apiKey="4de7f95ea955743f2e793c3ee711e0da";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".top input");
const searchBtn=document.querySelector(".top button");
const weatherImg=document.querySelector(".weather-icon");

async function checkWeather(location){
    const response = await fetch(apiUrl + location +`&apiKey=${apiKey}`);

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".section_two").style.display="none";
    }else{
        var data = await response.json();

    document.querySelector(".location").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherImg.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherImg.src = "images/snow.png";
    }
    document.querySelector(".section_two").style.display="block";
    document.querySelector(".error").style.display="none";
    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})