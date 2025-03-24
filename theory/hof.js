//배열과 함께 사용되는 고차함수
let numbers = [50, 10, 30, 55, 60];
numbers.sort((a, b) => a - b); // 가격, 배열
// sort;
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

//배열과 함께 쓰이는 고차함수

//forEach, find, findIndex
// some, every,filter, map

//flatmap, sort, reduce
const fruits = ['사과', '배', '바나나', '딸기'];
fruits.forEach((item, i, arr) => {
  console.log(item, i);
});
const item1 = { name: '김밥', price: 1000 };

const item2 = { name: '순대', price: 70000 };

const item3 = { name: '오뎅', price: 5500 };
const item4 = { name: '치킨', price: 15500 };
const products = [item1, item2, item3, item4];

//find 조건에 맞는 아이템을 찾는 함수
console.clear();
let find1 = products.find((item) => item.name === '오뎅');
console.log('find', find1);
//findindex: 제일 먼저 조건에 맞는 아이템의 인덱스 반환
find1 = products.some((item) => item.name === '치킨');
console.log('some---', find1);

//every- 전제조건이 맞는지 확인
// 반환값 bool

find1 = products.every((item) => item.name === '김밥');
console.log('every--', find1);

//filter - 조건에 맞는 아이템을 새로운 배열로 반환

find1 = products.filter((item) => item.name === '치킨');
console.log('filter---', find1);

//map

let numbers2 = [50, 10, 30, 55, 60];
let result = numbers2.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log('map---', result);

// flatmap - 중첩된 배열을 펼처서 새로운 배열로 생성
result = result.flatMap((item) => [1, 2]);
console.log(result);

result = ['test'].flatMap((text) => text.split(''));
console.log(result);

const num = [0, 5, 20, 5, 800];
let test = num.sort((a, b) => a - b);
console.log(test);
let test2;
//reduce
let test3 = num.reduce((sum, v) => (sum = sum + v), 0);
console.log(test3);
