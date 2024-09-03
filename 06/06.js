// 1.Dom에서 제어할 노드 가져오기
// 2.6개 버튼 클릭을 확인
// 3. 버튼을 클릭이 되면
// -해당하는 버튼의 숫자를 추출 => 사용자 선택 숫자(user) => 이미지 변경
// - 랜덤수를 생성 => 컴퓨터 숫자(com) = > 이미지 변경
// -결과 출력
document.addEventListener("DOMContentLoaded", () => {
    //이미지 가져오기
    const imgs = document.querySelectorAll('.dice > img');
    //버튼 가져오기
    const bts = document.querySelectorAll('button');
    //결과 가져오기
    const msg = document.querySelector('#msg');
    console.log(bts);

    // 버튼 클릭
    for (let bt of bts) {
        // console.log(bt);
        bt.addEventListener("click", () => {
            //컴퓨터 랜덤수
            let comN = Math.floor(Math.random() * 6) + 1;
            imgs[0].setAttribute('src', `../img/${comN}.png`);
            imgs[0].setAttribute('alt', `${comN}.png`);
            
            // 사용자 선택수
            // console.log(bt.textContent.charAt(0));
            // 버튼의 이름이 숫자로 끝나면 slice(-1) 문자로 끝나면 charAt(0)
            // let userN = parseInt(bt.textContent.charAt(0));
            let userN = parseInt(bt.textContent.slice(-1));
            console.log(userN);
            imgs[1].setAttribute('src', `../img/${userN}.png`);
            imgs[1].setAttribute('alt', `${userN}.png`);

            if (comN === userN) {
                msg.innerHTML = `<h2>정답</h2>`;
            } else {
                msg.innerHTML = `<h2>틀림</h2>`;
            }
        });    
    }



});
