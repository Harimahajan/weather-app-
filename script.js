const key="35c6ca672f7b4cbea8e110522252703"

const search=document.getElementById("search");
async function weather(p) {
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${p}&aqi=yes`)
return await promise.json();
}
search.addEventListener("click",async function d(){
    const city=document.getElementById("city").value
   const data=await weather(city)
console.log(data,city);
document.getElementById("temp").innerHTML=data.current.temp_c+"<sup>o</sup><span>C</span>"
document.getElementById("citys").innerHTML=city
document.getElementById("wind").innerHTML="Wind-"+data.current.wind_kph+"kph"
document.getElementById("humidity").innerHTML="Humidity-"+data.current.humidity
document.getElementById("country").innerHTML="Country-"+data.location.country
document.getElementById("time").innerHTML="Date&Time-"+data.location.localtime
})
