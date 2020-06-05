var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

var listaDeTarefas = [
  "Arrumar a casa",
  "limpar o banheiro",
  "Fazer uma tarefa qualquer",
  "Trabalho de ED",
  "dá uns bejo",
  "come",
  "fazer o rosh",
  "acender o carvão",
]


function carregarLista() {
  listaDeTarefas.forEach((item) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}


