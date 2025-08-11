/**
 * Generate a random number between 10 to 20.
 * Math.random()*(max - min + 1) + min
 */
const rand = Math.round(Math.random()*(20 - 10 + 1)+10);
console.log(rand);