const sequenceSum = (begin, end, step) => {
  if(begin>end){
    return 0;
  } else{
    let array = [begin];
    let result = begin;
    for (let i = 1; i < Math.ceil(end/step); i++){
      array.push(result += step);
      console.log(array);
    }
    let x = 0;
    array.map(i=>x+=i);
    return x;
  }
};


console.log(sequenceSum(2, 6, 2));