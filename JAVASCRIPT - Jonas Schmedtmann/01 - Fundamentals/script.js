'use strict';

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName, lastName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0 && retirement <= 46) {
    return `${firstName} ${lastName} has ${retirement} years left until retirement!`;
  }
  if (retirement === 0) {
    return `${firstName} ${lastName} has retired this year!`;
  }
  if (retirement >= 65) {
    return `${firstName} ${lastName} has not been born yet!`;
  }
  if (retirement > 47 && retirement <= 64) {
    return `${firstName} ${lastName} is ${age} years old and hence is not of legal working age!`;
  }
  if (retirement < -40) {
    return `${firstName} ${lastName} has retired ${
      retirement * -1
    } years ago, but is not alive!`;
  } else {
    return `${firstName} ${lastName} has retired ${retirement * -1} years ago!`;
  }

  // Write a Switch Case alternative for the above If Else

  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, 'Jonas', 'Schmedtmann'));
console.log(yearsUntilRetirement(1993, 'Hamza', 'Khan'));
console.log(yearsUntilRetirement(1949, 'Brijesh', 'Pandey'));
console.log(yearsUntilRetirement(1952, 'Tony', 'Smith'));
console.log(yearsUntilRetirement(1872, 'Henry', 'Williamson'));
console.log(yearsUntilRetirement(2019, 'Anthony', 'Morato'));
console.log(yearsUntilRetirement(2072, 'Max', 'Payne'));

// Coding Challenge #1

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

// Match 1
// const averageDolphinScore = calcAverage(44,23,71);
// const averageKoalaScore = calcAverage(65,54,49);

// Match 2
const averageDolphinScore = calcAverage(85, 54, 41);
const averageKoalaScore = calcAverage(23, 34, 27);

const checkWinner = function (averageDolphinScore, averageKoalaScore) {
  if (averageDolphinScore >= 2 * averageKoalaScore) {
    return `Score is ${averageDolphinScore}-${averageKoalaScore} hence Team Dolphins are the winners`;
  }
  if (averageKoalaScore >= 2 * averageDolphinScore) {
    return `Score is ${averageDolphinScore}-${averageKoalaScore} hence Team Koala are the winners`;
  } else {
    return `Score is ${averageDolphinScore}-${averageKoalaScore} hence no Team is the clear winner yet!`;
  }
};

console.log(checkWinner(averageDolphinScore, averageKoalaScore));

// Arrays

const friend1 = 'Micheal';
const friend2 = 'Mike';
const friend3 = 'Mia';

const friends = ['Rahul', 'Payal', 'Arindam'];
console.log(friends);

const years = new Array(1991, 1983, 2002, 2011);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Ameera';
console.log(friends);

const hamza = ['Hamza', 'Khan', 2021 - 1993, '6ft', '95kgs', 'coder', friends];
console.log(hamza);

const birthYear = [1993, 1982, 1991, 1986, 1964, 2001, 2013];

// calcAge(birthYear);
// cannot do number minus an array, yields a NaN

const age1 = calcAge(birthYear[0]);
const age2 = calcAge(birthYear[1]);
const age3 = calcAge(birthYear[birthYear.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(birthYear[0]),
  calcAge(birthYear[1]),
  calcAge(birthYear[birthYear.length - 1]),
];
console.log(ages);

// Basic Array Methods (Options)

// Add elements
friends.push('Pri');
console.log(friends);
// friends.push([friends]);
// console.log(friends);
friends.unshift('Ryan');
console.log(friends);

// Remove Elements

const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Ameera'));
console.log(friends.indexOf('Pri'));
// -1 value if not there in array

console.log(friends.includes('Ameera'));
console.log(friends.includes('Pri'));
// includes strict equality === to check

// .includes is useful for writing conditionals
if (friends.includes('Ameera')) {
  console.log('You have a friend called Ameera!');
} else {
  console.log('Person not among your friends!');
}

// CODING CHALLENGE #2

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// console.log(calcTip(200));

// const bills = [125, 555, 44];

// const tips = [
//   calcTip(bills[0]),
//   calcTip(bills[1]),
//   calcTip(bills[bills.length - 1]),
// ];
// console.log(tips);

// const totalBills = [
//   bills[0] + calcTip(bills[0]),
//   bills[1] + calcTip(bills[1]),
//   bills[bills.length - 1] + calcTip(bills[bills.length - 1]),
// ];
// console.log(totalBills);

// Objects

const hk = {
  firstName: 'Hamza',
  lastName: 'Khan',
  birthYear: 1993,
  job: 'Coder',
  friends: friends,
};
console.log(hk);

console.log(hk.lastName);
console.log(hk.friends);
console.log(hk['firstName']);

const nameKey = 'Name';
console.log(hk['first' + nameKey]);
console.log(hk['last' + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Hamza? Choose between firstName, lastName, age, job and friends"
// );

// if (hk[interestedIn]) {
//   console.log(hk[interestedIn]);
// } else {
//   console.log(
//     "Wrong Request!! Please choose between firstName, lastName, age, job and friends"
//   );
// }

hk.location = 'India';
hk['weight'] = '95kgs';
console.log(hk);

// Challenge

// "Hamza has 3 friends and his best friend is called Rahul"

console.log(
  `${hk.firstName} ${hk.lastName} has ${hk.friends.length} friends and his best friend is called ${hk.friends[0]}!`
);

// Object Methods

const hk2 = {
  firstName: 'Hamza',
  lastName: 'Khan',
  birthYear: 1993,
  job: 'Coder',
  friends: friends,
  hasDL: true,

  // calcAge: function(birthYear) {
  //     return 2021 - birthYear;
  // }

  // calcAge: function () {
  // console.log(this);
  // return 2021 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
};

//  console.log(hk2['calcAge'](1991));
console.log(hk2.calcAge());

console.log(hk2.age);
console.log(hk2.age);
console.log(hk2.age);

//   Challenge

// 'Hamza is a 28 year old coder, and he has a/no driver's license'

const dlCheck = function () {
  return hk2.hasDL ? 'a' : 'no';
};

console.log(
  `${hk2.firstName} is a ${hk2.calcAge()} year old ${
    hk2['job']
  }, and he has ${dlCheck()} driver's license`
);

// Coding Challenge #3

// const calcBMI = function(weight, height) {
//   return weight / (height * height)
// };

// console.log(calcBMI(78,1.69));

const personDetails = {
  firstName: ['Hamza', 'Rahul'],
  lastName: ['Khan', 'Prakash'],
  weight: [95, 68],
  height: [1.83, 1.7],

  calcBMI: function (weight, height) {
    return (personDetails.BMI = weight / (height * height));
  },
};

personDetails.BMI = [
  personDetails.calcBMI(personDetails.weight[0], personDetails.height[0]),
  personDetails.calcBMI(personDetails.weight[1], personDetails.height[1]),
];

if (personDetails.BMI[0] > personDetails.BMI[1]) {
  console.log(
    `${personDetails.firstName[0]} ${
      personDetails.lastName[0]
    }'s BMI (${personDetails.calcBMI(
      personDetails.weight[0],
      personDetails.height[0]
    )}) is higher than ${personDetails.firstName[1]} ${
      personDetails.lastName[1]
    }'s BMI (${personDetails.calcBMI(
      personDetails.weight[1],
      personDetails.height[1]
    )})!`
  );
} else {
  console.log(
    `${personDetails.firstName[1]} ${
      personDetails.lastName[1]
    }'s BMI (${personDetails.calcBMI(
      personDetails.weight[1],
      personDetails.height[1]
    )}) is higher than ${personDetails.firstName[0]} ${
      personDetails.lastName[0]
    }'s BMI (${personDetails.calcBMI(
      personDetails.weight[0],
      personDetails.height[0]
    )})!`
  );
}

// Iteration : FOR Loop

// FOR loop keeps running while condition is TRUE

const types = [];

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

// Looping Arrays, Breaking and Continuing

hamza.push(true);

for (let i = 0; i < hamza.length; i++) {
  // reading from hamza array
  console.log(hamza[i], typeof hamza[i]);
  // Filling types array
  // types[i] = typeof hamza[i];
  types.push(typeof hamza[i]);
}
console.log(types);

const ageOf = [];

for (let i = 0; i < birthYear.length; i++) {
  ageOf.push(2021 - birthYear[i]);
}
console.log(ageOf);

// continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < hamza.length; i++) {
  if (typeof hamza[i] !== 'string') continue;

  console.log(hamza[i], typeof hamza[i]);
}
console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < hamza.length; i++) {
  if (typeof hamza[i] === 'number') break;

  console.log(hamza[i], typeof hamza[i]);
}

// Looping Backwards and Loops in Loops

hamza.pop(true);

for (let i = hamza.length - 1; i >= 0; i--) {
  console.log(i, hamza[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting Exercise ${exercise}---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Execute ${exercise}: Lifiting weight rep ${rep}`);
  }
}

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 5) {
  // console.log(`WHILE: Lifting weights rep ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// CODING CHALLENGE #4

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

console.log(calcTip(200));

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalBills = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
for (let i = 0; i < tips.length; i++) {
  totalBills.push(bills[i] + tips[i]);
}

const calcAvg = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAvg(totalBills));
console.log(calcAvg(tips));

// Temperature Amplitude Calc

const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const t2 = [11, 2, 0, -8, -12, -10, -5, 0, 5, 11, 19, 'error', 15, 12, 8];

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(t1, t2);

console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  console.log(measurement);
  console.table(measurement);
  // console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// CODING CHALLENGE #5

const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    string += ` ... ${arr[i]}°C in ${[i + 1]} ${i + 1 === 1 ? 'day' : 'days'}`;
  }
  console.log(string);
};
console.log('---------DATA 1---------');
printForecast(maxTemps1);
console.log('---------DATA 2---------');
printForecast(maxTemps2);
