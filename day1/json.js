/* -------------------- */
/*   1. JSON 객체 실습    */
/* -------------------- */

var sopt = {
    name: 'OUR SOPT',
    slogan: 'WE LEAD OUR SOPT',
    part: ['plan', 'design', 'android', 'iOS', 'server'],
    number: 180,
    printName: function () {
        console, log('name : ', this.name);
    },
    printNum: function () {
        console.log('number : ', this.number);
    }
};

console.log('typeof sopt : ' + typeof sopt); // object

console.log('sopt : ' + sopt); // type
console.log('sopt : ', sopt); // 변수 : 일반 변수 데이터 (단, 배열이나 객체에 대해서는 타입 or 크기 만)
console.log('sopt : ' + JSON.stringify(sopt)); // 해당 json 객체의 모든 구조와 데이터를 보여줌

/* -------------------- */
/*   2. JSON 배열 실습    */
/* -------------------- */

var dogs = [
    { name: '식빵', family: '웰시코기', age: 1, weight: 2.14 },
    { name: '콩콩', family: '포메라니안', age: 3, weight: 2.5 },
    { name: '두팔', family: '푸들', age: 7, weight: 3.1 }
];

console.log('dog : '+dogs); // 리스트의 크기, 대략적 구조
console.log('dogs : ', dogs); // 리스트의 구조와 모든 데이터
console.log('dogs :'+JSON.stringify(dogs));

dogs.forEach( // 배열의 한 요소씩 접근
    dog => console.log(dog.name+'이는 종이 '+dog.family+'이고 '+dog.age+'세 입니다~')
)