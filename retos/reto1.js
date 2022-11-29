const main = () => {
  const url = 'https://codember.dev/users.txt'
  fetch(url)
  .then( request => request.text() )
  .then( users => challenge( users) )
  .catch( err => console.error(err) )
}


const keys = 'usr,eme,psw,age,loc,fll'.split(',')

const hasAllKeys = ( item ) => keys.every( key => typeof item[key] !== 'undefined' )

const challenge = ( users ) => {
  const reg  = users.split('\n\n')
  const regObj = reg.reduce( (lista,elemento) => {
    const data = elemento.split(/\s/)
    const objeto = data.reduce( (usuario,propiedad) => { 
      const parValor = propiedad.split(':') 
      usuario[ parValor[0] ] = parValor[1]
      return usuario
    },{} )
    if( data.length >= keys.length && hasAllKeys(objeto) )  
      lista.push( objeto )
    return lista;
  },[])
  
  const size = regObj.length
  const lastUser = regObj[ size - 1]
  const command = `submit ${size}${lastUser.usr}`

  //console.log( 'lastUser', lastUser, 'size', size )
  console.log( 'command', command )
  
}

main()