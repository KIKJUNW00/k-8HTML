// dom  생성된 후 이벤트 감지
document.addEventListener("DOMContentLoaded", ()=>{
// 버튼 요소 가져오기
const bt1 = document.getElementById("bt1");
const bt2 = document.querySelector("#bt2");
const bt3 = document.querySelector("#bt3");
const msg = document.getElementById("msg");

// 버튼 이벤트 달기
bt1.addEventListener("click", ()=>{
    alert(bt1.innerHTML) ;
});

bt2.addEventListener("click", ()=>{
    alert('화살표 점수') ;
});

bt3.addEventListener("click", ()=>{
    // alert('랜덤수 생성') ;
    // msg.innerHTML = '<h2>랜덤수 생성</h2>';
    // msg.innerHTML = `<h2>${Math.random}</h2>`;
    let n =Math.floor(Math.random()*6)+1;
    console.log(n);
    msg.innerHTML = `<h2>${bt3.textContent}:<span>${n}</span></h2>`;
});

}); 
