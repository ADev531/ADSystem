const body = document.getElementById("body");
const AD = createAD();

function createAD() {
  const ad = document.createElement("img");
  body.appendChild(ad);
  
  return ad
}
