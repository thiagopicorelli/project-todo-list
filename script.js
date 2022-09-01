const addInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const apagarButton = document.getElementById('apaga-tudo');
const finalizadosButton = document.getElementById('remover-finalizados');
const salvarButton = document.getElementById('salvar-tarefas');

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

function criarTarefa(str, completed) {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = str;
  tarefa.setAttribute('pos', listCount);
  if (completed) {
    tarefa.setAttribute('class', 'completed');
  }
  tarefa.addEventListener('click', selecionaItem);

  list.appendChild(tarefa);
  listCount += 1;
}

function criarTarefaInput() {
  criarTarefa(addInput.value, false);
  listElements = document.getElementsByTagName('li');
  addInput.value = '';
}

addButton.addEventListener('click', criarTarefaInput);

function apagarTodos() {
  list.innerHTML = '';
  selected = 0;
  listCount = 0;
}

apagarButton.addEventListener('click', apagarTodos);

function apagarFinalizados() {
  for (let i = 0; i < listCount; i += 1) {
    if (listElements[i].className === 'completed') {
      list.removeChild(listElements[i]);
      listCount -= 1;
      i -= 1;
    }
  }

  for (let i = 0; i < listCount; i += 1) {
    listElements[i].setAttribute('pos', i);
  }

  selected = 0;
}

finalizadosButton.addEventListener('click', apagarFinalizados);

function salvar() {
  const saveObj = {
    tarefas: [],
    completed: [],
  };

  for (let i = 0; i < listCount; i += 1) {
    saveObj.tarefas.push(listElements[i].innerHTML);
    if (listElements[i].className === 'completed') {
      saveObj.completed.push(true);
    } else {
      saveObj.completed.push(false);
    }
  }

  localStorage.lista = JSON.stringify(saveObj);
}

salvarButton.addEventListener('click', salvar);

function carregarTarefas() {
  if (localStorage.lista === undefined) {
    return;
  }

  const lista = JSON.parse(localStorage.lista);

  for (let i = 0; i < lista.tarefas.length; i += 1) {
    criarTarefa(lista.tarefas[i], lista.completed[i]);
  }

  listCount = lista.tarefas.length;
  listElements = document.getElementsByTagName('li');
}

carregarTarefas();

/*function mover() {
  if (listElements[selected].className !== 'completed') {
    return;
  }



}*/