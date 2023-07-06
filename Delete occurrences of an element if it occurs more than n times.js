function deleteNth(arr, n) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        let repeating = 0
        res.forEach((el)=>el === arr[i] ? repeating += 1 : null)
        if ( repeating<n) {
            res.push(arr[i])
        } else continue
    }
    return res
}

console.log(deleteNth([20, 37, 20, 21], 1));