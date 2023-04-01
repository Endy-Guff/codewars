// // write the function isAnagram
// const isAnagram = (test, original) => {
//     const w1 = Array.from(test.toLowerCase());
//     const w2 = Array.from(original.toLowerCase());
//     let result = true
//     if(w1.length === w2.length){
//         for (let i = 0; i < w1.length; i++){
//             if(w2.find(item=>item === w1[i]) === undefined){
//                 result = false
//                 break
//             } else continue
//         }
//     } else{
//         result = false
//     }
//     return result
// };


// console.log(isAnagram('qwe', 'ewq'))


const isAnagram = (test, original) => {
    const w1 = test.toLowerCase().split('').sort().join('');
    const w2 = original.toLowerCase().split('').sort().join('');
    return w1===w2?true:false
}

console.log(isAnagram('qwe', 'ewq'))
