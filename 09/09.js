document.addEventListener('DOMContentLoaded', () => {
    //요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');

    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    //회문
    bt1.addEventListener('click', (e) => {
        e.preventDefault();
        let n1 = txt1.value.replaceAll(' ', '');
        // let n1 = txt1.value.replaceAll('\n', '');
        let n2 = '';

        // 반복문사용
        // for (let i = n1.length - 1; i >= 0; i--) {
        //     n2 += n1[i];
        // }

        //split이용
        n2 = n1.split('').reverse().join('');

        console.log('n1=>', n1);
        console.log('n2=>', n2);

        if (n1 == n2) txt2.value = '회문입니다.';
        else txt2.value = '회문이 아닙니다.';
    });


    // 숫자합계
    bt2.addEventListener('click', (e) => {

        e.preventDefault();

        let n1 = txt1.value;
        let sum = 0;
        let cnt = 0;

        // for (let i = 0; i < n1.length; i++) {
        //     sum += parseInt(n1[i]);
        // }
        for(let c of n1){
            if (!isNaN(c)) {
                sum = sum + parseInt(c);
                cnt++;
            }
        }

        if (cnt == 0) txt2.value = '숫자가 없습니다.';
        else txt2.value = sum;

        console.log('n1=>', n1);
        console.log('sum=>', sum);
    });
});