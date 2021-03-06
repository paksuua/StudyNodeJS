/* -------------------- */
/*   1. 배열의 선언 실습    */
/* -------------------- */

var server1 = ["박소연", "김초원", 43, null, true]; // 배열 리터럴ㄹ을 이용하는 방법
var server2 = Array("민경연", "이하진", 13);        // Array 객체의 생성자를 이용하는 방법
var server3 = new Array("이현주", "조충범", false, undefined);  // new 연산자를 이용한 Array 객체 생성 방법

/* -------------------- */
/*   2. 배열의 추가 실습    */
/* -------------------- */

server1.push(123);                      // push() 메소드를 이용하는 방법
server2[server2.length] = "뭐 넣지";       // length 프로퍼티를 이용하는 방법
server3[10] = "server3의 길이는 얼마일까요?"; // 특정 인덱스를 지정하여 추가하는 방법

console.log('server1 : ', server1);
console.log('server2 : ', server2);
console.log('server3 : ', server3);

/* -------------------- */
/*   3. 배열의 순회 실습    */
/* -------------------- */

// of -> item 자체
let str1 = 'server1 에는 "';
for (var item of server1) {
    str1 += item + ', ';        
}
str1 += '"이 들어있네요~';
console.log(str1);

// in -> index
let str2 = 'server2에는 "';
for (var item in server2){
    str2 += server2[item]+', '   
}
str2 += '"이 들어있네요~';
console.log(str2);

// forEach -> 엘리먼트를 하나씩 가져옴, 콜백 함수 등록 가능
let str3 = 'server3에는 "';
server3.forEach(item => str3 += item + ', ');
str3 += '"이(가) 들어있네요 ~';
console.log(str3);