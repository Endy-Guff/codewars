function reverseLetter(str) {
    return str.split('').filter(l=>/^[a-zA-Z]/.test(l)).reverse().join('')
  }

  console.log(reverseLetter('12qw'));