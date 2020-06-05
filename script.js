var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = doucment.getElementByTagName("ul");
var item = document.getElementsByTagName("li");



function carregarLista() {
  listaDeTarefas.forEach((item) => {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });
}

var listaDeTarefas = [
  "Arrumar a casa",
  "limpar o banheiro",
  "Fazer uma tarefa qualquer",
  "Trabalho de ED",
  "dá uns bejo",
  "come",
  "fazer o rosh",
  "acender o carvão",

  "arrumar as impressoras",
  "formatar o rwindows" 
]

