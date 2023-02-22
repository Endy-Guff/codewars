function countSmileys(arr){
    const smile = [':)', ':D', ';-D', ':~)', ';~D'];
    const trueSmiles = arr.filter(e => smile.includes(e));
    return trueSmiles.length;
}


console.log(countSmileys([':)', ';(', ';}', ':-D']));