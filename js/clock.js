/*
일정 시간 지난 후에 원하는 함수를 예약 실행할 수 있게 해주는 
호출 스케줄링(cheduling a call)

- Timeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법
- Interval을 이용해 일정 시간 간격을 두고 함수를 실행하는 방법

함수의 첫번째 인자는 문자열을 이용해 함수를 만들고, 두번째 인자는 밀리초를 받으며 기본값은0 이다.

- padstart 함수는 String만 가능하며 첫번째 인자는 숫자의 자리수를 지정하며 두번째 인자는 해당 String문자열을 나타 낼 수 있다.
아래 함수에서는 padstart는 앞자리에 0이 붙어 01,02,03으로 나타내며 해당 숫자가 십의 자리라면 인자값을 받지 않는다.
padend는 뒷자리에 0이 붙어 10,20,30으로 나타낸다.  
*/
const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");  
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}
// getClock()을 통해 시간을 바로 호출한 후에 interval 함수를 적용한다.
getClock();
setInterval(getClock, 1000);
