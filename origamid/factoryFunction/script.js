/*function createButton(text){
  function element(){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return{
    element: element,
    text: text
  }
}

const comprarBtn = createButton('comprar');

console.log(comprarBtn);*/


/*function criarPessoa(nome, sobrenome){
  const nomeCompleto = `${nome} ${sobrenome}`;

  function andar(){
    return `${nomeCompleto} andou`;
  }
  function nadar(){
    return `${nomeCompleto} nadou`;
  }
  return{
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

const pessoa = criarPessoa("Debora", "Silva");

console.log(pessoa.nadar());*/

//constructor factory

function Pessoa(nome){
  if(!(this instanceof Pessoa))
    return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andou = function() {
  `${this.nome} andou`;
}

const programadora = Pessoa ("Debora")

console.log(programadora);