let title = document.getElementById('title');

console.log(title);

let mainDiv = document.querySelector(".main-div");

console.log(mainDiv);

let listItems = document.querySelectorAll("ul.list > li");

console.log(listItems);

title.innerText = "RAFAEL HILARIO";
title.innerHTML = "<em>Rafael Hilario Manipulando el DOM</em>";

let image = document.querySelector("img");
image.setAttribute("src", "vite.svg");
image.classList.add("img-fluid");
mainDiv.style.backgroundColor = "#ffcc00";

let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

let newDiv = document.createElement("div");
newDiv.innerText = "Nuevo Div";
document.body.appendChild(newDiv);

let button = document.querySelector("button");
/*button.addEventListener("click",function(){
  alert("Boton presionado");
});*/

function showMessages(message){
  alert(message);
}
button.addEventListener(
  "click", 
  showMessages.bind(null,"Mostrare algo aqui")
);


let input = document.querySelector("#itemInput");
let addButton = document.querySelector("#addButton");
let list = document.querySelector("#dynamicList");

addButton.addEventListener("click",function(){
  if (input.value.trim() !== ""){
    let newItem = document.createElement("li");
    newItem.innerText = input.value;
    list.appendChild(newItem);
    input.value = "";
  }
});

//Filtrado
const filterInput = document.getElementById("filterInput");
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function(){
  const term = filterInput.value.toLowerCase();
  const items = itemsList.getElementsByTagName("li");

  Array.from(items).forEach(function(item){
      if (item.textContent.toLowerCase().indexOf(term) !== -1){
              item.style.display = "block";
      } else {
              item.style.display = "none";
      }
  });
});

const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");

draggable.addEventListener("dragstart", function(event){
  setTimeout(() => {this.style.display = 'none';},0);
})

dropzone.addEventListener("dragover", function(event){
    event.preventDefault();
})

dropzone.addEventListener("drop", function(){
  draggable.style.display = 'block';
  this.append(draggable);
})