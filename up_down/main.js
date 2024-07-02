//랜덤 번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면,맞췄습니다
//랜덤 번호가 < 유저번호 DOWN!!
//랜덤 번호가 > 유저번호 UP!
//REST 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 끄면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다.기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깎지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let result = document.getElementById("result");
let history = []; 

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function() {
    userInput.value = "";
});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;

    if (userValue < 1 || userValue > 100) {
        resultArea.textContent = "1과 100 사이 숫자를 입력해 주세요";
        return;
    }
    if (history.includes(userValue)) {
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요";
        return;
    }
    chances--;
    chanceArea.textContent = `남은 기회: ${chances}번`;
    console.log("chances", chances); // 디버깅용, 필요시 삭제 가능

    if (userValue < computerNum) {
        resultArea.textContent = "Up";
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down";
    } else {
        resultArea.textContent = "맞췄습니다!";
        gameOver = true;
        result.textContent = `정답: ${computerNum}`;
    }

    history.push(userValue);
    console.log(history); // 디버깅용, 필요시 삭제 가능

    if (chances < 1) {
        gameOver = true;
        resultArea.textContent = `게임 오버! 정답은 ${computerNum}였습니다.`;
        result.textContent = `정답: ${computerNum}`;
    }

    if (gameOver) {
        playButton.disabled = true;
    }
}

function reset() {
    userInput.value = "";
    chances = 3;
    gameOver = false;
    history = [];
    playButton.disabled = false;
    pickRandomNum();

    resultArea.textContent = "결과가 나온다";
    chanceArea.textContent = `남은 기회: ${chances}번`;
    result.textContent = "정답:";
}

pickRandomNum();