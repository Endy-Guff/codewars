function hero(bullets, dragons){
    const need = dragons * 2;
    if((bullets - need) >= 0){
        return true
    } else return false
}

console.log(hero(10, 5));