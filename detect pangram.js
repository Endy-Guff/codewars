function isPangram(string){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))