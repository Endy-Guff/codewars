const sumDigits = (number) => Array.from(String(number), Number).filter(n=>!isNaN(n)).reduce((acc, cur)=>acc+cur)

console.log(sumDigits(-32));