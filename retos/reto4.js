const calcular = (inf,sup) => {
  const result = []
  for( let i=inf ; i<=sup ; i++ ) {
    const numero = String(i)
    if( numero.match(/55/g) ) {
      if( numero === numero.split('').sort().join('') )
        result.push(numero)  
    }
  }
  return result
}
const inf = 11098, sup = 98123
const datos = calcular(inf, sup)

console.log(`submit ${datos.length}-${datos[55]}`)



