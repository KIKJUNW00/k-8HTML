//OPEN API 데이터 가져오기
const getData = (selDt, ul, nationCode) => {
    console.log(selDt);
    const testAPI = '82ca741a2844c5c180a208137bb92bd7';
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${testAPI}&targetDt=${selDt}`;

    if (nationCode !== 'T') {
        url = `${url}&repNationCd=${nationCode}`;
    }

    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

            let tm = dailyBoxOfficeList.map(item => 
                `<li class='mvli'>
                    <span class='rank'>${item.rank}</span>
                    <sapn class='movieNm'>${item.movieNm}</sapn>
                    <span class='openDt'>${item.openDt}</span>
                    <span class='rankInten'>
                    ${item.rankInten > 0 ?
                        '<span class="spRed"> ▲ <span>': item.rankInten < 0 ? 
                                        '<span class="spBlue"> ▼ <span>' : '-' }
                    ${item.rankInten != 0 ? Math.abs(item.rankInten): '' }
                    </span>
                  </li>`)
        
              tm = tm.join('')
              ul.innerHTML = tm ;

              console.log(tm)

        })
        .catch(err => console.log(err));

    console.log(url);
}

//어제 날짜 구하기 함수
const getYesterday = () => {
    const yesterday = new Date();
    // const yesterday = new Date(2024, 8, 12);
    yesterday.setDate(yesterday.getDate() - 1);

    const year = yesterday.getFullYear();
    let month = (yesterday.getMonth() + 1);
    let day = yesterday.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    // month = `0${month}`.slice(-2);
    // month = `${month}`.padStart(2, '0');
    // day = `0${day}`.slice(-2);

    return `${year}-${month}-${day}`;
}

//DOM생성후
document.addEventListener('DOMContentLoaded', () => {
    // DOM요소 가져오기
    const dt = document.querySelector('#dt');
    const ul = document.querySelector('.sec > ul');
    const sel1 = document.querySelector('#repNationCd');


    //어제 날짜 구하기
    let yesterday = getYesterday();
    console.log('yesterday: ', yesterday);

    // data요소 최대값
    dt.max = yesterday;

    // date의 기본값
    dt.value = yesterday;

     //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-',''), ul, sel1.value);

    //데이터 가져오기
    dt.addEventListener('change', (e) => {
        e.preventDefault();
        const nationCode = sel1.value;
        getData(dt.value.replaceAll('-',''), ul, nationCode);
    });

    // repNation 데이터 가져오기
    repNationCd.addEventListener('change', (e) => {
        e.preventDefault();
        const nationCode = sel1.value;
        getData(dt.value.replaceAll('-', ''), ul, nationCode);
    });

});