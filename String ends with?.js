const solution = (str, ending) => {
    const str1 = str.split('')
    const ending1 = ending.split('')
    let j = 0
    for(let i = str1.length-ending1.length; i<=str1.length+1; i++){
        if(str1[i]===ending1[j]){
            j++
            continue
        } else return false
    }
    return true
}

console.log(solution('aasdasdasdabc', 'abc'));