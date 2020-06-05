var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = doucment.getElementByTagName("ul");
var item = document.getElementsByTagName("li");

var listaDeTarefas = [
  "Arrumar a casa",
  "limpar o banheiro",
]

function carregarLista() {
  listaDeTarefas.forEach((item) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}