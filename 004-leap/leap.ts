// Instructions
// Given a year, report if it is a leap year.

// The tricky thing here is that a leap year in the Gregorian calendar occurs:

// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.

// Notes
// Though our exercise adopts some very simple rules, there is more to learn!

// For a delightful, four minute explanation of the whole leap year phenomenon, go watch this youtube video.

export function isLeap() {
  throw new Error('Remove this statement and implement this function')
}

console.log(isLeap(2015)) // false
console.log(isLeap(1996)) // true

const amigos = { first: 'man', bitches: 4 }
