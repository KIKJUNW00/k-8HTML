const disp = (divnum, divPlus, divBonus, dsp) => {
    divnum.style.display = dsp;
    divPlus.style.display = dsp;
    divBonus.style.display = dsp;
}
document.addEventListener('DOMContentLoaded', () => {

    // 요소 가져오기
    const divnum = document.querySelector('#divnum');
    const divPlus = document.querySelector('.divPlus');
    const divBonus = document.querySelector('#divBonus');
    const bt = document.querySelector('.sec > button');

    // 요소숨기기
    // divnum.style.display = 'none';
    // divPlus.style.display = 'none';
    // divBonus.style.display = 'none';
    disp(divnum, divPlus, divBonus, 'none');


    bt.addEventListener('click', (e) => {
        e.preventDefault();

        let n = [];

        while (n.length < 7) {
            let Rnumber = Math.floor(Math.random() * 45) + 1;
            if (!n.includes(Rnumber)) {  // 배열에 없는 숫자만 추가
                n.push(Rnumber);
            }
        }



        let arrBonus = n.splice(6, 1);
        n.sort((a, b) => a - b);
        console.log(arrBonus);

        n = n.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
        n = n.join('');
        divnum.innerHTML = n;
        console.log(n);

        arrBonus = arrBonus.map(item =>
            `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
        arrBonus = arrBonus.join('');
        divBonus.innerHTML = arrBonus;

        //요소 숨기기
        // divNum.style.display = 'block';
        // divplus.style.display = 'block';
        // divBonus.style.display = 'block';
        disp(divnum, divPlus, divBonus, 'block');
    });
});