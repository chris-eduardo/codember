const test1 = ['red', 'blue', 'red', 'blue', 'green']
const test2 = ['green', 'red', 'blue', 'gray']
const test3 = ['blue', 'blue', 'blue', 'blue']
const test4 = ['red', 'green', 'red', 'green', 'red', 'green']
const test5 = ['blue', 'red', 'blue', 'red', 'gray']
const test6 = ['red', 'red', 'blue', 'red', 'red', 'red', 'green']
const test7 = ['red', 'blue', 'red', 'green', 'red', 'green', 'red', 'green']

const buscar = ( lista ) => {
 return lista.reduce( (a,b,idx) => {
  if( idx ) {
    const paridad = idx%2 === a.init%2 ? 0 : 1;
    if( b != lista[idx-1] && b === lista[a.init + paridad] ) a.last=a.last+1
    else { a.init = b != lista[idx-1]?idx-1:idx, a.last = idx }
    if( 1 + a.last-a.init >= a.size) { a.best = a.init, a.size = 1 + a.last-a.init } 
  } else {
    a.init = 0;
    a.last = 0;
    a.best = 0;
    a.size = 0;
  }
  return a
},{})
}

const challenge = ( lista ) => { 
  const result = buscar(lista)
  //console.log( result.size, lista[result.best+result.size-1])
  return {
    size: result.size,
    color: lista[result.best+result.size-1]
  }
}

console.log( challenge( test1 ) )
console.log( challenge( test2 ) )
console.log( challenge( test3 ) )
console.log( challenge( test4 ) )
console.log( challenge( test5 ) )
console.log( challenge( test6 ) )

const url = 'https://codember.dev/colors.txt'
fetch( url )
.then( res => res.json() )
.then( lista => {
  const submit = challenge(lista)
  console.log( submit )
  console.log( `submit ${submit.size}@${submit.color}`)
})

