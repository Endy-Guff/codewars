function race(v1, v2, g) {
    if(v1>=v2) return null
    const seconds = (g/(v2-v1)*3600)
    return [Math.floor(seconds/3600), Math.floor(seconds%3600/60), Math.floor(seconds%60)]
}

console.log(race(720, 850, 70));
console.log(race(80, 91, 37));