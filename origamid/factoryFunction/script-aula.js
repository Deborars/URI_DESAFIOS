
function $$(selectedElements){
  const elements = document.querySelectorAll(selectedElements);

  function hide(){
    elements.forEach(element=>{
      element.style.display="none";
    })
    return $$(selectedElements);
  }

  function show(){
    elements.forEach(element=>{
      element.style.display="initial";
    })
    return $$(selectedElements);
  }

  function on(onEvent, callback){
    elements.forEach((element)=>{
      element.addEventListener(onEvent, callback);
    })
  }

  return {
    elements,
    hide,
    show,
    on,
  }
}

function handleClick(event){
  console.log(event.target);
}
const btns = $$("button");

console.log(btns.on("click", handleClick));