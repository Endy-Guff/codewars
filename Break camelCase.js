const solution = (string) => {
    const indexes = []
    const str = string.split('')
    str.forEach((l, i)=>{
        if(l===l.toUpperCase()){
            indexes.push(i)
        }
    })
    indexes.forEach((id, i)=>{
       str.splice(id+i, 0, ' ') 
    })
    console.log(indexes);
    return str.join('')
}

console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));