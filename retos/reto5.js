const main = () => {
const url = 'https://codember.dev/mecenas.json'
  fetch(url)
  .then( res => res.json())
  .then( data => challenge(data))
}


const challenge = (nombres) => {
  const size = nombres.length
  const  datos = new Array(size).fill(0,0,size).map( (o,i) => o=i )
  let pos = 0, vivo = 1
  while(pos!==vivo) {
    datos[ vivo ] = 'X'
    pos = (vivo + 1)%size
    while( datos[pos] === 'X' ) pos = (pos+1)%size
    vivo = (pos + 1)%size
    while( datos[vivo] === 'X' ) vivo = (vivo+1)%size
  } 
  console.log(`submit ${nombres[datos[pos]]}-${datos[pos]}`)
}

challenge('a,b,c,d,e,f,g,h,i,j'.split(',').fill('test',0,10))

main()