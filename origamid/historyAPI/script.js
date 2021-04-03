//window.history.pushState(null,null, 'oi.html');

const links = document.querySelectorAll('a');


 function handleClick(event){
  event.preventDefault();
  fetchPage(event.target.href);
}

async function fetchPage(url){
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(text){
  const div= document.createElement('div');
  div.innerHTML = text;
  console.log(div);
}

links.forEach((item)=>{
  item.addEventListener('click', handleClick);
})