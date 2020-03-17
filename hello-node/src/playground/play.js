const os = require('os');
const fs = require('fs');

console.log('Moduel:', module);

module.exports.name = os.userInfo().username;


fs.appendFile('play.txt', 'Hello!\n', err => {
    console.log(err);

    
});
fs.appendFileSync('play.txt', 'Hello again!\n');
