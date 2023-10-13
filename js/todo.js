const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];  

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
  //localstorage는 텍스트만 가능하기 때문에 JSON.stringify() 를 사용하여 배열을 문자열로 변환.(JavaScript 객체를 JSON 문자열로 변환)
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); 
   // filter function은 return값이 true면 결과값을 새로운 array를 준다. 
   // 현재 id값이 숫자이기 때문에 parseInt로 문자열(li.id)을 숫자로 바꿔준다
  saveToDos(); // 삭제된 데이터를 제외한 나머지 데이터들을 다시 저장한다.
}

function paintToDo(newTodo){
  const li =document.createElement("li")
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText="X"
  button.addEventListener("click",deleteToDo)
  li.appendChild(span); // appendChild로 마지막에 순차적으로 정렬
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();  //기본동작을 막는 함수
  const newTodo = toDoInput.value; 
  toDoInput.value="";
  const newTOdoObj = {
    text:newTodo,
    id: Date.now(), // Date.now로 현재시간 밀리초에 해당하는 값을 id값으로 함. 
  };
  toDos.push(newTOdoObj); //push 함수를 통해 배열 마지막에 value 값을 추가
  paintToDo(newTOdoObj);
  saveToDos(); // 저장
};

toDoForm.addEventListener("submit",handleToDoSubmit);// 지정한 유형의 이벤트를 대상이 수신할 때마다 호출할 함수를 설정(이벤트유형, 수신할 객체),수신기는 중복x 

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){ 
  const parsedToDos = JSON.parse(savedToDos); 
  // JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성 (10번째 줄과 역임)
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);// forEach함수로 배열 각 요소마다 id값 설정.
}
