const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 3. onLoginSubmit 함수는 event.preventDefault를 통해 기본동작을 막아주고 그 동작은 새로고침이다.
// 4. form을 다시 숨긴다.
// 5. loginInput.value를 username이라는 변수에 저장한다.
// 6. username값을 USERNAME_KEY와 함께 local storage에 저장한다.
// 7. paintGreetings호출 form안에 있는 input에 입력한 유저명을 받고있다.
function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
 
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// 8.function paintGreetings(username)은 h1요소 안에 `Hello ${username}`이라는 텍스트를 추가하고 h1요소로부터 "hidden"이라는 클래스명을 제거해준다.

//새로 추가한 부분
function paintGreetings(username){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  if(0<= hours && hours <= 4 || 20 < hours){ 
    // 시간이 0시~4시 이거나 20시 넘으면 굿나잇
    mention = 'Good night';
} else if (hours<12){
    // 시간이 5시~12시이면 굿모닝
    mention = 'Good morning';
} else{
    // 13시부터 20시까지는 굿애프터눈
    mention = 'Good afternoon';
}
// js-greeting에 innerText 넣어주기
  greeting.innerText = `Hello ${username},${mention}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// 1. 자바스트립트는 local storage를 먼저 확인하고 정보 저장, 정보 불러오기, 정보 삭제한다. 따라서 local storage는 db다.  local sortage에 없는 정보를 불러오려 한다면 null이 나온다. 존재하는 정보를 불러오면 value는 string으로 받게된다.
loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 2. savedusername의 정보가 null이라면 HIDDEN_CLASSNAME은 삭제된다. 즉 html form태그의 hidden클래스가 사라진다.
// 3. 삭제 후에 loginForm에 addEventListener를 더하고 submit을 기다린다. 그리고 submit event가 발생하면  onLoginSubmit 함수가 실행된다.
if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
}else{
  paintGreetings(savedUsername);
}





