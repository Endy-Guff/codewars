const addLength = (str) => str.split(' ').map(word=>`${word} ${word.length}`)

console.log(addLength('apple ban'));