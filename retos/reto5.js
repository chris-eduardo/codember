const main = () => {
const url = 'https://codember.dev/mecenas.json'
  fetch(url)
  .then( res => res.json())
  .then( data => challenge(data))
}


const challenge = (nombres) => {
  const size = nombres.length
  console.log(size)
  const  datos = new Array(size).fill(0,0,size).map( (o,i) => o=i )
  // Algoritmo de barajado
  
  for(let idx=0;idx<size-1;idx++) {
    const num = datos[idx],
          pos = Math.floor( Math.random() * (size-idx) ) + idx
    datos[idx] = datos[pos]
    datos[pos] = num
  }
  

  let pos = 0, vivo = 1
  while(pos!==vivo) {
    datos[ vivo ] = 'X'
    pos = (vivo + 1)%size
    while( datos[pos] === 'X' ) pos = (pos+1)%size
    //const last = vivo
    vivo = (pos + 1)%size
    while( datos[vivo] === 'X' ) vivo = (vivo+1)%size
    //if( last> vivo ) console.log(datos)
  } 
  console.log(datos, datos[pos], nombres[datos[pos]])
}

//challenge('a,b,c,d,e,f,g,h,i,j'.split(','))

main()