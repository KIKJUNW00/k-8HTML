let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]
let isSuffle = false;
let cnt = 0

document.addEventListener("DOMContentLoaded", () => {
    const cols = document.querySelectorAll(".col");
    const startBtn = document.querySelector("button");
    const msg = document.querySelector("#msg");

    startBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!isSuffle) {
            arr.sort(() => Math.random() - 0.5);  // 배열을 섞음
            isSuffle = true;
            cnt = 0;  // 클릭 횟수 초기화
            startBtn.innerHTML = "게임중 ....";  // 버튼 텍스트 변경
            msg.innerHTML = "게임이 시작되었습니다! 칸을 클릭하세요.";
            cols.forEach((col) => {  // 칸을 초기화
                col.innerHTML = "";
                col.style.backgroundColor = "";
                col.style.pointerEvents = "auto";  // 클릭 가능하게 설정
            });
        }
    });

    // 각 칸 클릭 시 이벤트
    cols[0].addEventListener("click", () => handleClick(0));
    cols[1].addEventListener("click", () => handleClick(1));
    cols[2].addEventListener("click", () => handleClick(2));
    cols[3].addEventListener("click", () => handleClick(3));
    cols[4].addEventListener("click", () => handleClick(4));
    cols[5].addEventListener("click", () => handleClick(5));
    cols[6].addEventListener("click", () => handleClick(6));
    cols[7].addEventListener("click", () => handleClick(7));
    cols[8].addEventListener("click", () => handleClick(8));

    // 클릭 처리 함수 (화살표 함수)
    const handleClick = (i) => {
        if (cols[i].innerHTML !== "") return;  // 이미 클릭한 칸은 무시
        cnt++;

        if (arr[i] === 1) {  // 폭탄일 경우
            cols[i].style.backgroundColor = "red";
            cols[i].innerHTML = `<img src="../img/boom.png" alt="폭탄" width="50" height="50">`;  // 폭탄 이미지
            msg.innerHTML = `폭탄을 찾았습니다! 총 ${cnt}번 클릭했습니다.`;
            startBtn.innerHTML = "다시 시작";  // 버튼 텍스트 다시 시작으로 변경
            cols.forEach(col => col.style.pointerEvents = "none");  // 모든 칸 클릭 불가
        } else {  // 폭탄이 아닐 경우
            cols[i].style.backgroundColor = "green";
            cols[i].innerHTML = `<img src="../img/hart.png" alt="체크" width="50" height="50">`;  // 체크 이미지
            msg.innerHTML = `${cnt}번 클릭했습니다. 계속하세요!`;
        }
    };
    // 게임을 초기화하는 함수 (다시 시작)
    const resetGame = () => {
        arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];  // 배열 초기화
        isShuffle = false;  // 섞기 상태 초기화
        cnt = 0;  // 클릭 횟수 초기화
        startBtn.innerHTML = "게임 시작";  // 버튼 텍스트 초기화
        msg.innerHTML = "게임을 다시 시작하려면 버튼을 클릭하세요.";
        cols.forEach((col) => {  // 칸을 초기화
            col.innerHTML = "";
            col.style.backgroundColor = "";
            col.style.pointerEvents = "auto";  // 클릭 가능하게 설정
        });
    };
});
