let computerNum = 0;
let playBtn = document.getElementById('play-btn');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetBtn = document.getElementById('reset-btn');
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById('chance-area');
let history = [];

//랜덤번호 지정
function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  //Math.random() : 0부터 1 사이의 랜덤숫자를 지정하는 함수(소수점)
  //Math.floor() : 소수점 숫자를 버리는 함수
  //Math.random() 함수는 1를 불러오지 않기 때문에 + 1를 해 원하는 범위인 1~100을 불러올 수 있다
  console.log(computerNum);
}

//유저가 번호를 입력하고 go라는 버튼을 누른다
playBtn.addEventListener('click', play);

function play() {
  //input창에 유저가 입력한 값을 들고온다
  let userValue = userInput.value;

  //유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = '1과 100사이 숫자를 입력해주세요';
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다';
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  // "" : 정적인 값

  if (userValue < computerNum) {
    resultArea.textContent = 'UP!';
    //만약 유저가 랜덤번호를 맞추면 "맞췄습니다!"
  } else if (userValue > computerNum) {
    //랜덤번호 < 유저번호 "DOWN!"
    resultArea.textContent = 'Down!';
  } else {
    resultArea.textContent = '정답입니다!';
    gameOver = true;
    //랜덤번호 > 유저번호 "UP!"
  }

  //유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깍지 않는다
  history.push(userValue);

  //5번의 기회를 다쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playBtn.disabled = true;
  }
}

//Reset 버튼을 누르면 게임이 다시 시작한다
resetBtn.addEventListener('click', reset);

function reset() {
  pickRandomNum();
  userInput.value = '';
  chances = 5;
  chanceArea.textContent = `남은 기회: ${chances}번`;

  resultArea.textContent = '결과값이 나온다';
}

userInput.addEventListener('focus', function () {
  userInput.value = '';
});

pickRandomNum();
