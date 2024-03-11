const addBtn = document.querySelector("#addBtn")
const note_main = document.querySelector("#note_main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    if(data.length === 0){
        localStorage.removeItem("notes")
    } else{
        localStorage.setItem("notes", JSON.stringify(data))
    }

}

addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="icons">
        <i class="fa-solid fa-floppy-disk save" style="color: #fff;"></i>
        <i class="fa-solid fa-trash trash" style="color: #fff;"></i>
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function(){
            saveNotes()
        }
    )

    note_main.appendChild(note);
    saveNotes()
}

(
    function(){
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        lsNotes.forEach(
            (lsNotes) => {
                addNote(lsNotes)
            }
        )
        if(lsNotes.length === 0){
            localStorage.removeItem("notes")
        } else {
            addNote()
        }
    }
)()