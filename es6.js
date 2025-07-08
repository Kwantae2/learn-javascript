// Logical operators
// And
const user = {
  isLoggedIn: false, // 사용자 로그인 여부
  role: "admin", // 사용자 역할(admin, user, guest)
};

// 관리자 페이지 접근 허가
if (user.isLoggedIn && user.role === "admin") {
  // 로그인 되었으면서 역할이 admin인 경우
  console.log("관리자 페이지에 접근 가능");
} else {
  console.log("관리자 페이지에 접근 불가능!!");
}

// or
if (user.isLoggedIn || user.role === "admin") {
  console.log("유저페이지에 접근 가능합니다");
}

// Not
console.log("Not연산자:", !user.isLoggedIn);
console.log("Not연산자:", !user.role);

// Default parameter
const orderSandwich = (type = "basic") => {
  console.log("🚀 ~ orderSandwich ~ type:", type);
  type === "vegan" ? "🥖 + 🥬 + 🍅 + 🥑 + 🥒" : "🥖 + 🥬 + 🍅 + 🧀 + 🥓";
};
// // 함수 테스트 - 아래 코드는 수정하지 마세요
// console.log("기본 샌드위치 주문: " + orderSandwich());
// console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
// console.log("비건 샌드위치 주문: " + orderSandwich('vegan'));
