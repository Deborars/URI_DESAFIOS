//window.history.pushState(null,null, 'oi.html');

const links = document.querySelectorAll('a');


 function handleClick(event){
  event.preventDefault();
  fetchPage(event.target.href);//passando a url do link
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url){
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
  
  
}

function replaceContent(newText){
  
  const newHtml= document.createElement('div');
  newHtml.innerHTML = newText;
  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');
  oldContent.innerHTML=newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText;
}


links.forEach((item)=>{
  item.addEventListener('click', handleClick);
})