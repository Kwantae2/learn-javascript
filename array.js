const dayOfweeks = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ dayOfweeks:", dayOfweeks);

console.log(`오늘은 ${dayOfweeks[1]} 입니다.`);

// 멀티캠퍼스 수강생 명단
const students = [
  "강경덕",
  "김관태",
  "김다영",
  "김서진",
  "김태원",
  "이혜림",
  "장기만",
];

console.log("students 갯수 :", students.length);
console.log("마지막 수강생", students[students.length - 1]);

// 미션 1 : 내 이름 뽑아오기
console.log(`내 이름은 ${students[1]} 입니다`);

// 객체
const studentInfo = {
  name: "김관태",
  mbti: "INFJ",
  attendanceCheck: true,
};
console.log("🚀 ~ studentInfo:", studentInfo);

console.log("name :", studentInfo["name"]);
console.log("name :", studentInfo.name);

const studentsList = [
  {
    name: "강경덕",
    mbti: "ISTJ",
    favoriteFoods: ["국밥", "밀면"],
  }, //첫번째 학생정보
  {
    name: "김관태",
    mbti: "INFJ",
    favoriteFoods: ["치킨", "햄버거"],
  }, //두번째 학생정보
  {
    name: "김다영",
    mbti: "INTP",
    favoriteFoods: ["감자탕", "파스타"],
  }, //세번째 학생정보
];

// 미션 : 경덕님의 MBTI는?
console.log("경덕님의 MBTI는 ", studentsList[0].mbti);
// 미션 : 관태님의 최애 첫번째 음식은?
console.log("관태님의 최애 첫번째 음식은 ", studentsList[1].favoriteFoods[0]);
// 미션 : 마지막 학생의 이름은?
console.log(
  "마지막 학생의 이름은 ",
  studentsList[studentsList.length - 1].name
);

// 한줄복사 단축키 shift + alt + 방향아래

// --------------------------퀴즈 ------------------------------
// function add(a, b) {
//   return a + b;
// }

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;

console.log(add(5, 3)); // 예상 결과: 8

// 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
const minus = (a, b) => a - b;

// 함수 테스트
console.log(minus(60, 20)); // 예상 결과: 40

const introduce = (name, age) => {
  return "안녕하세요, " + name + "님. 당신의 나이는 " + age + "세입니다.";
};

// 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
console.log(introduce("김관태", 44)); // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// 여기에 orderSandwich 함수를 작성하세요
// orderSandwich 함수는 type 매개변수를 받고 타입에 따라 다른 재료를 반환해야 합니다

// const orderSandwich = (type) => {
//   if (type == null) {
//     return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
//   } else if (type == "basic") {
//     return "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
//   } else if (type == "vegan") {
//     return "🥖 + 🥬 + 🍅 + 🥑 + 🥒";
//   }
// };

const orderSandwich = (type = "basic") =>
  type === "vegan" ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";

// 함수 테스트 - 아래 코드는 수정하지 마세요
console.log("기본 샌드위치 주문: " + orderSandwich());
console.log("기본 샌드위치 주문: " + orderSandwich("basic"));
console.log("비건 샌드위치 주문: " + orderSandwich("vegan"));

/* 예상 결과:
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
기본 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🧀 + 🥓
비건 샌드위치 주문: 🥖 + 🥬 + 🍅 + 🥑 + 🥒
*/
