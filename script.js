const addInput = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function criarTarefa() {
  const tarefa = document.createElement('li');
  tarefa.innerHTML = addInput.value;
  list.appendChild(tarefa);
  addInput.value = '';
}

addButton.addEventListener('click', criarTarefa);