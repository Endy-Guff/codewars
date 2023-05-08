function roundToNext5(n){
    let result = n
    while(n%5!==0){
        n++
        result=n
    }
    return result
}

console.log(roundToNext5(-5));


