const isIsogram = (str) => !/(\w).*\1/i.test(str)


console.log(isIsogram('axs'));