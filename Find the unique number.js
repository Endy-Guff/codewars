function findUniq(arr) {
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
    return arr.filter((item)=> item !== repeated[0])[0]
}

console.log(findUniq([1, 1, 1, 2]))
  