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
console.log("마지막 학생의 이름은 ", studentsList[2].name);
