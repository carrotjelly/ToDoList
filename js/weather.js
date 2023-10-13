
const API_KEY = "472fe01589c9a393e0258b2170a6f2c5"; 

function onGeoOk(position){
const lat = position.coords.latitude;  //현재위치 위도(lat)
const lon = position.coords.longitude; //현재위치 경도(lon)
const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //현재날씨 API

fetch(url)
.then((response) => response.json())
.then((data) => { 
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;//날씨 정보
  city.innerText = data.name; // 도시정보
}); 
}
function onGeoError(){
  alert("유저의 위치를 찾지 못했습니다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);// 유저 위치 확인