/*const sobre = fetch('./sobre.html');
const div = document.createElement("div");

sobre
.then((response)=> response.text())
.then((body)=> {
div.innerHTML = body;
console.log(body);
});
  */

/*
const imgURL = fetch('./images.jpg');

imgURL.then((response)=> response.blob())
.then((img)=>{
  const blobUrl = URL.createObjectURL(img);
  const imgDOM = document.querySelector('img');
  imgDOM.src = blobUrl;
})

*/
/*
const cep = fetch('https://viacep.com.br/ws/01001000/json/');

cep.then((r)=>{
  console.log(cep);
  const r2 = r.clone();
  r.text().then((response)=> {
console.log(response)})
r2.json().then((clone)=>{
console.log(clone)})
})*/


/*
const cep2 = fetch('https://viacep.com.br/ws/01001000/json/');

/*cep2.then((response)=>{
  response.headers.forEach(console.log);
})

cep2.then(response=>{
  Object.prototype.toString.call(response)
})
*/

const cep3 = fetch('./docs.txt');

cep3.then((response)=>{
  console.log(response.status, response.ok);
  if(response.status===404){
    console.log("Página não localizada")
  }
})