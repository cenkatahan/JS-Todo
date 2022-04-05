class Note{
    constructor(note){
        this.note = note
    }

    getNote(){
        return this.note
    }

    checkDone(){
        this.isDone != this.isDone
    }

    addTo(list){
        const LINE = this.isDone ? "linethtroug" : ""
        const positionToInsert = "beforeend"
        const noteELement = `<li class="list-group-item d-flex justify-content-between">
        <p class="text-left">${this.note}</p>
        <div>
            <button class="btn btn-danger" type="button" id="button-remove">
                <img class="bi-plus-square" src="assets/ic_trash.svg" alt="">
            </button>
        </div>
        
        </li>`
    
        list.insertAdjacentHTML(positionToInsert, noteELement)
    }
}

const buttonClear = document.getElementById("clear-button")
const textInput = document.getElementById("text-input")
const buttonAdd = document.getElementById("button-add")
const buttonRemove = document.getElementById("button-remove")
const list = document.getElementById("list")

let notes = []


buttonAdd.addEventListener('click', () => {
    add()
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        add()
    }
})

buttonClear.addEventListener('click', function(){
    //clear the list
    list.innerHTML = ""
})

buttonRemove.addEventListener('click', function(e){
    //remove the item
    this.parentNode.parentNode.parentNode.innerHTML = ""
})

function add(){
    let input = textInput.value 
    var note = new Note(input)
    note.addTo(list)
    notes.push(note)
    textInput.value = ""
}

function readNotes(){

}