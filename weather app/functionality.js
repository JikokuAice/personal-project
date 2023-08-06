//input field
const input = document.querySelector('#inputcity');
const button = document.querySelector('#submit')
const buttonoff = document.querySelector('#submit1')
//output field
const displays = document.querySelector('.display')
const city = document.querySelector('.cityname');
const currenttime = document.querySelector('.date-now');
const accTemp = document.querySelector('.temp');
const wind = document.querySelector('.wind');
const Pressure = document.querySelector('.visibility');
const feel = document.querySelector('.feelslike');

let apikey = '5c3c1d24642c3e658bad50578e84f778';
function convo(kelvin){
    let Cel = Math.floor(kelvin-273)
    return Cel;
}

button.addEventListener('click',function(){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey)
.then(res => res.json())
.then(data =>{
var N = data['name'];
var Ti = Date();

var TEM = data['main']['temp'];
var fel = data['main']['feels_like'];
var pressure= data['main']['pressure'];
var W = data['wind']['speed']

city.innerHTML=`City name: <span>${N} </span>`
currenttime.innerHTML=`Date/time: <span>${Ti}</span>`
accTemp.innerHTML=`Temp: <span> ${convo(TEM)} Celcius</span>`
feel.innerHTML=`The temp feels like: <span>${convo(fel)} Celcius</span>`
wind.innerHTML=`Wind: <span>${W}</span>Km/hr`
Pressure.innerHTML=`Pressure:<span>${pressure}</span> mb`
displays.style.display="flex"
});

 


});


buttonoff.addEventListener('click',function(){
    displays.style.display="none"
});