String.prototype.toAlternatingCase = function () {
    return this.split('').map(l=>l===l.toUpperCase()?l.toLowerCase():l.toUpperCase()).join('')
}

console.log('LoL'.toAlternatingCase());