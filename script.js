const btnAdd = document.getElementById("add");
const filter = document.getElementById("filter");
const btnRemoveToDos = document.getElementById("remove-to-dos");
const inputText = document.getElementById("input-text");
const toDoListUl = document.getElementById("to-do-list");

//const filterOptions = ['all', 'done', 'open']
let todoAppState = [
  {
    id: 1,
    description: "Learn HTML",
    done: false,
  },
  {
    id: 2,
    description: "Learn CSS",
    done: false,
  },
  {
    id: 3,
    description: "Learn JavaScript",
    done: false,
  },
];

function addNewToDo() {
  const inputTextValue = inputText.value;

  if (inputTextValue.length < 5) {
    alert("Please enter a task with at least five characters");
  } else {
    addToState(inputTextValue);
    renderInHTML();
  }
}

function addToState(value) {
  todoAppState.push({
    id: Date.now(),
    description: value,
    done: false,
  });
}

function renderInHTML() {
  let output = "";

  toDoListUl.innerHTML = "";
  for (let todo of todoAppState) {
    output += `
        <li class="flex-r-c-c ls-style-0  bg-clr-white-01 bdr-0 bdr-r-025 focus-bdr-ylw-sdw-red pdg-bl-05rem pdg-l-1rem">
            <input id="${todo.id}" type="checkbox" class="checkbox flex-gr-0 h-w-1rem">
            <label for="${todo.id}" class="fnt-s-1-5rem flex-gr-1">
            ${todo.description}
            </label>
        </li>
        `;
  }
  toDoListUl.innerHTML = output;
}
function updateToDo(e) {
  const id = Number(e.target.id);

  const index = todoAppState.findIndex(function (element) {
    return element.id === id;
  });
  // toggle done
  todoAppState[index].done = !todoAppState[index].done;
}

toDoListUl.addEventListener("change", updateToDo);
btnAdd.addEventListener("click", addNewToDo);

function deleteDoneToDos() {
  todoAppState = todoAppState.filter((toDo) => toDo.done === false);
  renderInHTML();
}

btnRemoveToDos.addEventListener("click", deleteDoneToDos);

function filterToDos(e) {
  const currentFilter = document.querySelector(
    'input[name="filter"]:checked'
  ).value;
  console.log(currentFilter);
}

filter.addEventListener("change", filterToDos);

renderInHTML();
