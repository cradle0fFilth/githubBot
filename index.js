const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';
const makeCommit = n => {
    if (n === 0) return simpleGit().push();
    const x = Math.floor(Math.random() * 54) + 0;
    const y = Math.floor(Math.random() * 6) + 0;
    const DATE = moment().add(x, 'w').add(y, 'd').subtract(5, 'y').add(1, 'd').format();

    const data = {
        date: DATE
    }
    console.log(Date);
    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, makeCommit.bind(this, --n));
    });

}

makeCommit(100);

