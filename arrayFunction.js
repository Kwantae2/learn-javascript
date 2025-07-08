const names = ["alice", "bob", "chutzrit"];

// map : 기존 배열을 조작해서 새로운 배열을 리턴
const upperNames = names.map((name) => name.toUpperCase() + "🍘");
console.log("🚀 ~ upperNames ~ upperNames:", upperNames);

// filter : 필터링된 배열 리턴
const filterNames = names.filter((name) => name.startsWith("a"));
console.log("🚀 ~ filterNames:", filterNames);

// find : 필터링된 요소 혹은 undefined 리턴
const findName = names.find((name) => typeof name === "string");
console.log("🚀 ~ findName:", findName);

// some / every : 조건에 부합하는지 체크
const checkSome = names.some((name) => name.length >= 5);
console.log("🚀 ~ checkSome:", checkSome);

const checkEvery = names.every((name) => name.length >= 5);
console.log("🚀 ~ checkEvery:", checkEvery);
