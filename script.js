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
<<<<<<< HEAD
<<<<<<< HEAD
  "Lavar o carro",
  "Tomar cerveja",
=======
=======
  "Fazer uma tarefa qualquer",
  "Trabalho de ED",
>>>>>>> c965b3c598ae163ff4f593eeaa0f10ffe7669c1e
  "dá uns bejo",
  "come",
>>>>>>> 63dfdbc3c7a05f28c55218cdd6961b3af54d85a5
  "fazer o rosh",
  "acender o carvão",
]
