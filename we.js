const apikey=" ";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const wIcon=document.querySelector(".w-icon");
async function checkWeather(city)
{
    
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    if(response.status ==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    console.log(data);
        if(data.weather[0].main == "Clouds"){
        wIcon.src="clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        wIcon.src="rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        wIcon.src="drizzle.png";
    }
    else if(data.weather[0].main == "Clear"){
        wIcon.src="clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        wIcon.src="mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        wIcon.src="snow.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
    
    document.querySelector(".city").innerHTML=data.name;    
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";    
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})

