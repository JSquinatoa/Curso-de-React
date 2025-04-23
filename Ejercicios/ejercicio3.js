function persistencia(num) {
    let aux = String(num).split('')
    let solution = 0
    console.log(aux)
    while(aux.length>1){
        let newnumero = 1

        for (let i = 0; i < aux.length; i++) {
            console.log(aux[i])
            newnumero *= Number(aux[i])     
        }
        aux = String(newnumero).split('')
        solution+=1
    }

    return solution    
    
}

console.log(persistencia(4))