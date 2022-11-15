const btnAdd = document.getElementById('add');
const btnAll = document.getElementById('all');
const btnDone = document.getElementById('done');
const btnOpen = document.getElementById('open');
const inputText = document.getElementById('input-text');
const inputTextValue = inputText.value;
const newToDos = document.getElementById('new-to-dos');
//const li = document.getElementById('');

class CreateToDo {
    constructor (inputToDo) {
        this.description = inputToDo,
        this.done = false
    }
} 

const filterOptions = ['all', 'done', 'open']
const todoAppState = {
    filter: 'all';
    toDos: [
    {
        description: 'Learn HTML',
        done: false,
    },
    {
        description: 'Learn CSS',
        done: false,
    },
    {
        description: 'Learn JavaScript',
        done: false,
    }]
}


function addNewToDo() {
    newToDos.appendChild('li');
    li.appendChild('input');
    li.appendChild('label');
    input.textContent(inputToDo);
}
// add new "your to dos": document.appendChild()



// definieren: button add, input, input.value, li, button all, button done, button open ✅

// to-do hinzufügen
    // class anlegen ✅
    // state anlegen ✅
    // click-event @button = create (appendChild) @"new-to-dos" + insert text from "input" + add object to state/ erstelle neues Objekt im sate und füge in "description" Text aus Inputfeld ein
    //Klasse mit checkbox hinzufügen (aussehen)

    // to-do abhaken
    //click-event @checkbox = durchgestrichen/ add class + done: true
        //XXX.setDone(true) + function setDone (false) { this.done = false}

// to-dos filtern
    // filter: default - "all" is activated
    // filter: nur 1 Objekt gleichzeitig klickbar
    //for schleife mit if bedingung

// delete done todos
    //for schleife mit if bedingung?s

