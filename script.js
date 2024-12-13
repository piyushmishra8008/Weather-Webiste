let key="f0438da020500fcbfbe74b15af8e0efa";
let cityinput =document.getElementById("cityinput")
console.log(cityinput)
let btn= document.getElementById("search-button")
console.log(btn)
let city =document.getElementById("city-name")
let weatherinfocard = document.getElementById("weather-info")
let temperature= document.getElementById("temperature")
let description=document.getElementById("description")
let errormessage= document.getElementById("error-message")
let icon= document.getElementById("weather-icon")


btn.addEventListener("click",()=>{
	const city1 =cityinput.value
	console.log(city1)
	if(city1){
		getweather(city1)
	}
})
async function getweather(city1) {
	const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${key}&units=metric`
	); 
	const data= await response.json();
	console.log(data)
	if(response.ok){
		displayweather(data)
	}
	else{
showerror(data.message)
	}
}
	function displayweather(data){
city.textContent =`${data.name},${data.sys.country}`
temperature.textContent =`${Math.round(data.main.temp)}`

description.textContent =`${data.weather[0].description.toUpperCase()}`



errormessage.textContent=""
	}
	function showerror(message){
		errormessage.textContent =message;
		weatherinfocard.style.display = "none"
	}

