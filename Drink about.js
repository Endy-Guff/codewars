function peopleWithAgeDrink(old) {
    const d = old<14?'toddy':old<18?'coke':old<21?'beer':'whisky'
    return `drink ${d}`;
};