function DNAtoRNA(dna) {
    const result = dna.split('').map(el=>el==='T'?'U':el)
    return result.join('')
}

console.log(DNAtoRNA("TTTT"));