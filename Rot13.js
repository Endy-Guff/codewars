const rot13 = (message) =>{
    const input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');

    return message.split('').map(l=>input.find(el=>l===el)?output[input.findIndex(el=>el===l)]:l).join('')
}

console.log(rot13("test"));