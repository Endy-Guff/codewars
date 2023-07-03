const stray = (numbers) => numbers.filter(el=>el!==numbers.filter((n, i, numbers)=>numbers.indexOf(n)!==i)[0])[0]

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
