function snapCrackle(maxValue) {
    let saida = ""
    for(let i = 1; i <= maxValue; i++) {
        if(i % 2 != 0 && i % 5 == 0) {
            saida = saida + "SnapCrackle, "
        } else if( i % 2 != 0) {
            saida = saida + "Snap, "
        } else if( i % 5 == 0) {
            saida = saida + "Crackle, "
        } else {
            saida = saida + i + ", "
        }
    }
    return saida
}
console.log(snapCrackle(12))