// dom  생성된 후 이벤트 감지
document.addEventListener("DOMContentLoaded", ()=>{
    // 버튼 요소 가져오기
    const bt1 = document.querySelector('button');
    const img = document.querySelector('#msg > img');
    
    // 버튼 이벤트 달기
    bt1.addEventListener('click', ()=>{
       let n = Math.floor(Math.random()*6)+1; 

       img.setAttribute('src', `../img/${n}.png`);  // img/img1.jpg ~ img/
       img.setAttribute('alt', `${n}`);  // img/img1.jpg ~ img/
       // `img/img${n}.jpg`);  // img/img1.jpg ~ img/img6.jpg 로 변경
    });
    
    }); 
    