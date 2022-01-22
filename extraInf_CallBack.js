function a1() {
  console.log('Sth do in a1');
}

const a2 = function () {
  console.log('Sth do in a2');
};

const a3 = () => console.log('Sth do in a3');

// const a4 = () => {
//   let d = 4 + 8;
//   return 5 + 7 + d;
// };

a1();
a2();
a3();

function funcWithArgCallBack(arg1, arg2) {
  let temp = `Sth calc with ${arg1}`;
  arg2();
  console.log(temp);
}

function c1() {
  console.log('We do sth in c1');
}

// funcWithArgCallBack(777, c1);
// console.log('_'.repeat(30));
// funcWithArgCallBack(777, c2);

function onChange(arg2) {
  let objListener = {
    type: 'click',
    x: 100,
    y: 200,
    target: { value: 'Alex' },
  };

  arg2(objListener);
}

const changeAge = (e, id) => {
  console.log('We do sth in c2 with arg: ', e.target.value);
  console.log('We do sth ID: ', id);
};

onChange(changeAge);

onChange((e) => changeAge(e, 'our_ID'));

((arg) => console.log('ODESSA ' + arg))('LA');

const arr1 = [1, 2, 3, 4, 5];

const [a, , DDD, ...d] = arr1;

console.log(a, DDD, d);

const obj = { r: 12, p: 'line' };

const { p, r: D } = obj;

console.table(arr1);

const arr2 = [2, 1, 4];

function sortArr(arr) {
  return arr.sort((a, b) => a - b);
}

function sortArr2(arr) {
  let temp = [...arr];
  return temp.sort((a, b) => a - b);
}

// console.table(sortArr(arr2));
console.log('_'.repeat(30));

console.table(sortArr2(arr2));

console.log('_'.repeat(30));
console.table(arr2);

const arr3 = [2, 1, 4];

console.table(
  arr3.filter((item) => {
    if (item > 1) return item;
  })
);
console.table(arr3);
