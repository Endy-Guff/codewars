// const factorial = (n) =>{
//     if(n===1){
//         return 1
//     } else return n*factorial(n-1)
// }

const factorial = (n) =>{
    if(n<0||n>12){
        throw new RangeError()
    } else{
        let res = 1
    for(let i = 1; i<=n;i++){
        res = res * i
    }
    return res
    }
}

console.log(factorial(5));