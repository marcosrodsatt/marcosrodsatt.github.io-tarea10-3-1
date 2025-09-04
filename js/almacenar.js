
const input = document.getElementById("item");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");


let items = JSON.parse(localStorage.getItem("items")) || [];


function renderList() {
  contenedor.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "list-group-item";
    contenedor.appendChild(li);
  });
}


btnAgregar.addEventListener("click", () => {
  const nuevoItem = input.value.trim();
  if (nuevoItem !== "") {
    items.push(nuevoItem);
    localStorage.setItem("items", JSON.stringify(items));
    renderList();
    input.value = ""; 
}});


btnLimpiar.addEventListener("click", () => {
items = [];
localStorage.removeItem("items");
 renderList();
});


renderList();





