//유저가 번호를 입력하고 go라는 버튼을 누른다
//만약 유저가 랜덤번호를 맞추면 "맞췄습니다!"
//랜덤번호 < 유저번호 "DOWN!"
//랜덤번호 > 유저번호 "UP!"
//Reset 버튼을 누르면 게임이 다시 시작한다
//5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다

let computerNum = 0;
let playBtn = document.getElementById('play-btn');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');

playBtn.addEventListener('click', play);

//랜덤번호 지정
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  //Math.random() : 0부터 1 사이의 랜덤숫자를 지정하는 함수(소수점)
  //Math.floor() : 소수점 숫자를 버리는 함수
  //Math.random() 함수는 1를 불러오지 않기 때문에 + 1를 해 원하는 범위인 1~100을 불러올 수 있다
  console.log(computerNum);
}

function play() {
  let userValue = userInput.value;
  //input창에 유저가 입력한 값을 들고온다
  if (userValue < computerNum) {
    resultArea.textContent = 'UP!';
  } else if (userValue > computerNum) {
    resultArea.textContent = 'Down!';
  } else {
    resultArea.textContent = '정답입니다!';
  }
}

pickRandomNum();
