/*function Button(text, background){
  this.text = text;
  this.background = background;
}

Button.prototype.element = function(){
  const buttonElement = document.createElement('div');
  buttonElement.innerHTML = this.text;
  buttonElement.style.background=this.background;
  return buttonElement;
}


const blueBtn = new Button("comprar", "blue");
console.log(blueBtn.element());*/

class Button{
  constructor(text, background){
    this.text = text;
    this.background =  background;
  }
  element(){
    const button = document.createElement('button');
    button.innerText = this.text;
    button.style.background=this.background;
    return button;
  }
}

const btnFilho = new Button("olá você", "blue");

console.log(btnFilho.element());

