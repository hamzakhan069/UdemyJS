'use strict';

/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// 1. Simple Array Methods
// ____________________________________

console.log('________________________________________________');
console.log('1. Simple Array Methods');
console.log('________________________________________________');

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE METHOD
// creates shallow copy of array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice());

// SPLICE METHOD
// mutates original array
console.log(arr.splice(2));
console.log(arr);

// REVERSE
// mutates original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
// creates shallow copy of array
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN

console.log(letters.join('-'));

// 2. The new '.at()' method
// _________________________________

console.log('________________________________________________');
console.log("2. The new '.at()' method");
console.log('________________________________________________');

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

// getting last element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

// 'at' method also works in strings

// 3. Looping Arrays: 'forEach()'
// ___________________________________________

console.log('________________________________________________');
console.log("3. Looping Arrays: '.forEach()'");
console.log('________________________________________________');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('==== forOf() ====');
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('==== forEach() ====');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Transaction ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// continue and break statements do NOT work in the forEach() loop!!

// 4. forEach() with Maps and Sets
// ________________________________________________
console.log('________________________________________________');
console.log('4. forEach() with Maps and Sets');
console.log('________________________________________________');
//Map
console.log('=== Map ===');
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
//Set
console.log('=== Set ===');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${_} : ${value}`);
});

// 5. The 'map' method
// ___________________________________________

console.log('________________________________________________');
console.log("5. The 'map' method");
console.log('________________________________________________');

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToInr = 86;

const movementsInr = movements2.map(mov => mov * eurToInr);
console.log(movements2);
console.log(movementsInr);

// const movementsInrFor = [];
// for (const mov of movements2) movementsInrFor.push(mov * eurToInr);

// console.log(movementsInrFor);

const movementsDescriptions = movements2.map(
  (mov, i) =>
    `Transaction ${i + 1}: You ${mov < 0 ? 'withdrew' : 'deposited'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

// 6. The 'filter' method
// ___________________________________________

console.log('________________________________________________');
console.log("6. The 'filter' method");
console.log('________________________________________________');

const deposits = movements2.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements2.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

// 7. The 'reduce' method
// ___________________________________________

console.log('________________________________________________');
console.log("7. The 'reduce' method");
console.log('________________________________________________');

// accumulator is first argument of the reduce method
const balance = movements2.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

console.log(balance);

// Maximum value of the array

const max = movements2.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements2.at(0));

console.log(max);

// 8. The magic of chaining methods
// ___________________________________________

console.log('________________________________________________');
console.log('8. The magic of chaining methods');
console.log('________________________________________________');

console.log(movements2);
// PIPELINE of Methods
const totalDepositsInr = movements2
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToInr;
  })
  // .map(mov => mov * eurToInr)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsInr);

// 9. The 'find' method
// ___________________________________________

console.log('________________________________________________');
console.log("9. The 'find' method");
console.log('________________________________________________');

const firstWithdrawal = movements2.find(mov => mov < 0);

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// 10. some and every
// ___________________________________________

console.log('________________________________________________');
console.log('10. some and every');
console.log('________________________________________________');

// some
const anyDeposits = movements2.some(mov => mov > 0);

console.log(anyDeposits);

// every

console.log(movements2.every(mov => mov > 0));

// seperate callback fn

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// 11. flat and flatMap method
// ___________________________________________

console.log('________________________________________________');
console.log('11. flat and flatMap method');
console.log('________________________________________________');

// flat method
// de-nests a nested array
const array = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(array.flat());

const arrayDeep = [
  [[1, 2], 3],
  [4, [5, 6]],
  7,
  [[[8, 9, [10, [[11, 12], 13]]], 14], 15],
];
console.log(arrayDeep.flat(6));

// ======= DO READ =====

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat(1);
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat(1)
//   .reduce((acc, mov) => acc + mov * 86, 0);
// console.log(overallBalance);
// //flatMap can only be used for 1st degree nesting in array
// const overallBalanceFM = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov * 86, 0);
// console.log(overallBalanceFM);

// 12. Sorting Arrays
// ___________________________________________

console.log('________________________________________________');
console.log('12. Sorting Arrays');
console.log('________________________________________________');

// mutates arrays
const alphs = ['x', 'a', 'e', 'b', 'j', 'y', 'i'];
console.log(alphs.sort());

// return < 0 => cur, nxt (keeps order)
// return > 0 => nxt, cur (switches order)

// movements2.sort((cur, nxt) => {
//   if (cur > nxt) return 1;
//   if (nxt > cur) return -1;
// });
// console.log(movements2);

// Ascending order sorting for numbers
movements2.sort((cur, nxt) => cur - nxt);
console.log(movements2);

// Descending order sorting for numbers
movements2.sort((cur, nxt) => nxt - cur);
console.log(movements2);

// 13. More ways of Creating and Filling Arrays
// _______________________________________________

console.log('________________________________________________');
console.log('13. More ways of Creating and Filling Arrays');
console.log('________________________________________________');

const x = new Array(7);

console.log(x);

// x.fill(4);
x.fill(1, 3, 5);
console.log(x);

// Array.from

const y = Array.from({ length: 8 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Challenge

const randomDiceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 7)
);

console.log(randomDiceRolls);

const avgDiceRolls =
  randomDiceRolls.reduce((cur, nxt) => cur + nxt) / randomDiceRolls.length;

console.log(avgDiceRolls);
