const addInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

let listElements;
let listCount = 0;
let selected = 0;

function selecionaItem(event) {
  listElements[selected].style.backgroundColor = 'transparent';
  listElements[event.target.pos].style.backgroundColor = 'rgb(128, 128, 128)';
  selected = event.target.getAttribute('pos');
}

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = addInput.value;
  tarefa.setAttribute('pos', listCount);
  tarefa.addEventListener('click', selecionaItem);

  list.appendChild(tarefa);
  listElements = document.getElementsByTagName('li');
  listCount += 1;

  addInput.value = '';
}

addButton.addEventListener('click', criarTarefa);
