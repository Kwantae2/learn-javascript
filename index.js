// console.log("후츠릿 구독 좋아요");
// console.log(2 + 2);

// 자바스크립트 주석: 슬러시 2개
// 변수
const youtube = "후츠릿"; //상수
let comment = "구독 좋아요"; //변수
console.log("🚀 ~ comment:", comment);

console.log("youtube", youtube);

// youtube = "태요미네"; // const 변수는 재할당 불가능

comment = "알림설정";
console.log("🚀 ~ comment:", comment);

const number = 1; //숫자 타입
const number2 = "1";
console.log("🚀 ~ number:", number, typeof number);
console.log("🚀 ~ number2:", number2, typeof number2);

// boolean의 값 : true/false
const bool = false;
console.log("🚀 ~ bool:", bool, "bool 타입:", typeof bool);

// null, undefined
const empty = null;
console.log("empty type : ", empty);

let empty2;
console.log("empty2 type : ", typeof empty2);

// 미션1: 이름, 나이를 변수에 각각 저장하고 콘솔에 찍어보기
const myname = "김관태";
console.log("🚀 ~ myname is ", myname);
const myage = 44;
console.log("🚀 ~ myage is ", myage);

// 함수
console.log("👍👍👍👍👍👍👍👍👍👍👍👍👍");

// 함수를 정의한다, 선언한다
// function helloWorld() {
//   // 실행 로직 부분
//   console.log("🐱‍👓Hello World!");
// }

const helloWorld = () => {
  console.log("🐱‍👓Hello World!");
};

// 함수를 호출한다, 실행한다
helloWorld();

// 미션2 : userInfo : myname과 myage를 콘솔에 출력하는 함수 만들기

// 매개변수 (parameter)
const userInfo = (myname, myage) => {
  console.log(myname + "님 반갑습니다");
  console.log(myage + "세 이시군요");
  console.log("더블:" + myage * 2);
};

// 인자 (argument)
userInfo(myname, myage);

// 미션3 : 숫자 2개를 받아서 이 숫자들을 더해서 콘솔에 출력하는 함수 작성

const addNum = (a, b) => {
  const result = a + b;
  console.log("🚀 ~ 함수 내 합계 addNum:", result);
  return result;
};

const sum = addNum(30, 50);

const doubleSum = (num) => {
  return num * 2;
};

console.log("🚀 ~ doubleSum:", doubleSum(sum));

// 미션4: toUpperCase메소드를 이용해 영문이름을 대문자로 반환하는 함수. 단 이름은 parameter로 받기

// const upperString = (name) => {
//   return name.toUpperCase();
// };

const upperString = (name) => name.toUpperCase();

console.log("🚀 ~ upperString :", upperString("honggildong"));
