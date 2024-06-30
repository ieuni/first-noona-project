//랜덤 번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면,맞췄습니다
//랜덤 번호가 < 유저번호 DOWN!!
//랜덤 번호가 > 유저번호 UP!
//REST 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 끄면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다.기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다, 기회를 깎지 않는다.

let comeputerNum = 0
let playButton = document.getElementById("play-button")
let userinput = document.getElementById("user-input")
let resultarea = document.getElementById("result-area")

playButton.addEventListener("click",play)

function pickRandomNum(){
    comeputerNum = Math.floor (Math.random()*100)+1;
    console.log("정답",comeputerNum);
}

function play(){
    let uservalue = userinput.value
    if(uservalue < comeputerNum){
        resultarea.textContent = "Up"
    }else if(uservalue > comeputerNum){
        resultarea.textContent = "Down"
    }else{
        resultarea.textContent = "맞췄습니다"
    }
}
pickRandomNum();