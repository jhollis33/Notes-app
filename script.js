const addbtn = document.getElementById(`add`);

addbtn.addEventListener(`click`,()=> addNewNote(`Add New Note`));

function addNewNote() {
  const note = document.createElement(`div`);
  note.classList.add(`note`)

  note.innerHTML = `<div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="hidden"></div>
        <textarea class=""></textarea>`;

        const deleteBtn = note.querySelector(`.delete`)
        deleteBtn.addEventListener(`click`, ()=>{
          note.remove();
        })

        document.body.appendChild(note);
}