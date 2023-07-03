const hello = (name) => name!==''&&name!==undefined?`Hello, ${name.split('').map((l, i)=>i===0?l.toUpperCase():l.toLowerCase()).join('')}!`:'Hello, World!'

console.log(hello('alice'));

let actualJohn = hello('johN');

console.log(
    actualJohn,
    actualJohn,
    hello('alice'),
    hello(),
    hello('')
)