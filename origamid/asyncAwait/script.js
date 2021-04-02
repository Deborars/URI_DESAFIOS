
async function puxaDados(){
  const responseDados = await fetch('./dados.json');
  const jsonDados = await responseDados.json();

  console.log(jsonDados);
}

puxaDados()