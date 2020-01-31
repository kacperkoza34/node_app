const os = require('os');
const fs = require('fs');

fs.writeFile('outputfile.txt', 'data', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

console.log('Witaj siwiecue');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
