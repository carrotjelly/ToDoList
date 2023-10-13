const quotes = [
  {
    quote : "좋은 인간이 되는 것과 좋은 시민이 되는 것이 항상 같은 것은 아니다.",
    author : "아리스토텔레스 Aristotle"
  },
  {
    quote : "젊음은 매우 새로운 것이다. 20년 전에는 아무도 이것을 언급하지 않았다.",
    author : "가브리엘(코코)샤넬 Gabriel Coco Chanel"
  },
  {
    quote : "가장 비참하고 보잘 것 없어보이는 사람들이 대개 가장 야심차고 질투가 많다.",
    author : "바뤼흐 스피노자 Baruch Spinoza"
  },
  {
    quote : "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author : "벤 스타인 Ben Stein"
  },
  {
    quote : "우리는 받아서 삶을 꾸려나가고 주면서 인생을 꾸며나간다.",
    author : "윈스턴 처칠 Sir Winston Churchill"
  },
  {
    quote : "우리는 나이가 들면서 변하는 게 아니다. 보다 자기다워지는 것이다.",
    author : "린 홀 Lynn Hall"
  },
  {
    quote : "실패가 나태함에 대한 유일한 징벌은 아니다. 다른 이들의 성공도 있지 않은가.",
    author : "쥘 르나르 Jules Renard"
  },
  {
    quote : "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다.",
    author : "마하트마 간디 Mahatma Gandhi"
  },
  {
    quote : "아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라. 우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.",
    author : "토마스 제퍼슨 Thomas Jefferson"
  },
  {
    quote : "성실함의 잣대로 스스로를 평가하라, 그리고 관대함의 잣대로 남들을 평가하라.",
    author : "존 미첼 메이슨 John Mitchell Mason"
  },
  {
    quote : "그 어떤 것에서라도 내적인 도움과 위안을 찾을 수 있다면 그것을 잡아라.",
    author : "마하트마 간디 Mahatma Gandhi"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// math 함수 - round 반올림,ceil 올림,floor 내림
// math.random 0~1까지 랜덤숫자를 호출하기때문에 floor를 통해 소수점 자리 수를 내림한다.
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
