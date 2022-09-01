const addInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const apagarButton = document.getElementById('apaga-tudo');
const finalizadosButton = document.getElementById('remover-finalizados');

let listElements;
let listCount = 0;
let selected = 0;

function selecionaItem(event) {
  const pos = event.target.getAttribute('pos');

  listElements[selected].style.backgroundColor = 'transparent';

  if (selected !== pos) {
    listElements[pos].style.backgroundColor = 'rgb(128, 128, 128)';
    selected = pos;
  } else {
    if (listElements[selected].className === 'completed') {
      listElements[selected].className = '';
    } else {
      listElements[selected].className = 'completed';
    }
    selected = 0;
  }
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

function apagarTodos() {
  list.innerHTML = '';
}

apagarButton.addEventListener('click', apagarTodos);
