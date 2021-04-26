
function anunciaranhadores (premio, ...ganhadores){
  ganhadores.forEach(ganhador=>{
    console.log(`O(A) ganhador(a) ${ganhador} vai levar como premio um ${premio}`)
})
}

anunciaranhadores("liquidificador", 'Maria', "Tomé", 'Rosa');
