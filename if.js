//요구사항 : score값이 60점 이상이면 "합격"통지

const score = 75;

const pass = () => {
  console.log("합격");
};

const fail = () => {
  console.log("불합격");
};

if (score >= 60) {
  // 조건식이 true인 경우 실행
  pass();
} else {
  // 조건식이 false인 경우 실행
  fail();
}

// 삼항연산자
score >= 60 ? pass() : fail();

console.log("조건문 실행끝!!");

// 점수에 따라서 등급 지정
// 90점 이상 : A등급
// 80점 이상 : B등급
// 70점 이상 : C등급
// 70점 미만 : D등급

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else {
  console.log("D등급");
}

// `` : 특별한 따옴표

console.log("점수는", score, "점 입니다");
console.log(`점수는 ${score} 점 입니다`); // 문자열로 치환됨
