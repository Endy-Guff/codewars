const capitals = (word) => {
  let result = []
  word.split('').forEach((el, i) => {
    if(el==el.toUpperCase()){
      result.push(i)
    }
  });
  return result
};

console.log(capitals('CodEWaRs'));