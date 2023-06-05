function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a, b)=>a-b).slice(0,2).map(n=>x+=n, x=0).reverse()[0]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));