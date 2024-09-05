//문자열 연습
let s = 'Hello, JS!';

console.log('문자열길이:',s); // 10
console.log('문자열길이:',s.length);
console.log('대문자 변경:',s.toUpperCase()); 
console.log('소문자 변경:',s.toLowerCase()); 
console.log('첫번째 글자:',s.charAt(0)); 
console.log('첫번째 글자2:',s[0]); 
console.log('맨마지막 글자:',s[s.length - 1]); 
console.log('맨마지막 글자2:',s.charAt(s.length - 1));  
console.log('맨마지막 글자3:',s.slice(-1));  
console.log('**문자열 분리:',s.split(''));

for(let c of s){
    console.log(c);
}

for(let i in s){
    console.log(i, '=>',s[i]);
}

//문자열 확인
console.log('JS문자열 확인: ', s.includes('JS')); // true
console.log('H문자열 확인: ', s.indexOf('H')); // true

// 문자열 특정부분 추출
console.log('문자열 자르기: ', s.substring(0, 5)); // true
console.log('문자열 자르기: ', s.slice(5, 0)); // true



// s = '1';
// console.log('숫자확인 :', isNaN(s)); // true