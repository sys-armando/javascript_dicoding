//imperatif style => how to solve

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`)
}

console.log(newNamesWithExcMark)

//deklaratif style = what to solve

const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas']

const newNamesWithExcMark1 = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark1);