const os = require('os');
const fs = require('fs');
const random_name = require('node-random-name');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


const maleNames = [];
const femaleNames = [];

for( let i = 0; i<20; i++){
  maleNames.push(
    {
      name: random_name({ random: Math.random, gender: "male"}),
      sex: 'M',
      age: getRandomInt(17,79),
    }
  );

  femaleNames.push(
    {
      name: random_name({ random: Math.random, gender: "female"}),
      sex: 'F',
      age: getRandomInt(17,79),
    }
  );
}

const data = { users: []};

for(let i = 0; i<20; i++){
  const random = getRandomInt(0,2)
  if (random) data.users.push(maleNames[i]);
  else data.users.push(femaleNames[i]);
}


const json = JSON.stringify(data, null, 2);

fs.writeFile('outputfile.json', json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
