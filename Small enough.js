function smallEnough(a, limit) {
  let result
  for (let i = 0; i < a.length; i++) {
    if(a[i]>limit){
      result = false
      break
    } else{
      result = true
    }
  }
  return result
}

console.log(smallEnough([66, 101], 200));