const btnAdd = document.getElementById('add');
const btnAll = document.getElementById('all');
const btnDone = document.getElementById('done');
const btnOpen = document.getElementById('open');
const btnRemoveToDos = document.getElementById('remove-to-dos');
const inputText = document.getElementById('input-text');
const toDoListUl = document.getElementById('to-do-list');
//const li = document.getElementById('');

/*class CreateToDo {
    constructor (inputToDo) {
        this.description = inputToDo,
        this.done = false
    }
} */

//const filterOptions = ['all', 'done', 'open']
// 🔺 wohin mit der id im HTML? li?🔺
const todoAppState = {
    toDos: [
        {
            id: 1,
            description: 'Learn HTML',
            done: false,
        },
        {
            id: 2,
            description: 'Learn CSS',
            done: false,
        },
        {
            id: 3,
            description: 'Learn JavaScript',
            done: false,
        }
    ]
}

// 🔺 inputText.value wird nicht in den Funktionen aus GS erfasst🔺


function addNewToDo() {
    const inputTextValue = inputText.value;

    console.log(inputTextValue);
    console.log(inputTextValue.length);
    if (inputTextValue.length < 5) {
        alert("Please enter a task with at least five characters");
   } else {
    addToState();
    renderInHTML();
   }
}

function addToState() {
    const inputTextValue = inputText.value;

    console.log(inputTextValue);
    todoAppState.toDos.push({
        id: Date.now(),
        description: inputTextValue,
        done: false,
    });

    console.log(todoAppState.toDos);
}


function renderInHTML() {

    /*
    // Text aus input
    
    // li, label, input erstellen inkl. Klassen
    const li = document.createElement('li');
    li.className = 'flex-r-c-c ls-style-0  bg-clr-white-01 bdr-0 bdr-r-025 focus-bdr-ylw-sdw-red pdg-bl-05rem pdg-l-1rem';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.className = 'checkbox flex-gr-0 h-w-1rem';
    const label = document.createElement('label');
    label.className = 'fnt-s-1-5rem flex-gr-1';
    
    // label Text einfügen
    label.textContent = inputTextValue;
    
    // input, label, li platzieren
    li.appendChild(input);
    li.appendChild(label);
    toDoListUl.appendChild(li); */
    const stateArr = todoAppState.toDos;
    let output = "";  

// 🔺 Wieso muss es todo.descr sein und nicht stateArr.descr?🔺
    for (let todo of stateArr) {      
        output = `
        <li class="flex-r-c-c ls-style-0  bg-clr-white-01 bdr-0 bdr-r-025 focus-bdr-ylw-sdw-red pdg-bl-05rem pdg-l-1rem">
            <input id="" type="checkbox" class="checkbox flex-gr-0 h-w-1rem">
            <label for="" class="fnt-s-1-5rem flex-gr-1">
            ${todo.description}
            </label>
        </li>
        `
    }
    toDoListUl.insertAdjacentHTML("beforeend", output);
}

btnAdd.addEventListener('click', addNewToDo);



// add new "your to dos": document.appendChild()



// definieren: button add, input, input.value, li, button all, button done, button open ✅

// to-do hinzufügen
    // class anlegen ✅
    // state anlegen ✅
    // click-event @button = create (appendChild) @"new-to-dos" ✅ + insert text from "input" ✅
    // + add object to state/ erstelle neues Objekt im sate und füge in "description" Text aus Inputfeld ein
    // input muss mind. 5 Zeichen lang sein ✅

    //Klasse mit checkbox hinzufügen (Aussehen) ✅

    // to-do abhaken
    //click-event @checkbox = durchgestrichen/ add class + done: true
        //XXX.setDone(true) + function setDone (false) { this.done = false} 🖌

// delete done todos
    //forEach mit if bedingung?
    // andere Idee: state anders gliedern: toDos = All = [*]
        //* {open = [ {}, {}]}, {done = [ {}, {}]} -> Filter möglich + done = []; bei reset

// to-dos filtern
    // filter: default - "all" is activated
    // filter: nur 1 Objekt gleichzeitig klickbar
    //for schleife mit if bedingung


