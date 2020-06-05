var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

var listaDeTarefas = [
  "Arrumar a casa",
  "limpar o banheiro",
  "Lavar o carro",
  "Tomar cerveja",
  "dá uns bejo",
  "come",
  "fazer o rosh",
  "acender o carvão",
  "Limpar a piscina",
  "FUgir dos porco",
  "arrumar as impressoras",
  "formatar o rwindows"
]

function carregarLista() {
  listaDeTarefas.forEach((item) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}

function addList() {
  listaDeTarefas.push(input.value)
  carregarLista();
}

enterButton.addEventListener("click", () => {
  addList();
})
carregarLista();