const body = document.getElementById("body");
const AD = createAD();

function createAD() {
  const tmp = document.createElement("img");
  tmp.src = "./ad/testad.png";
  body.appendChild(tmp);
  
  return tmp
}
