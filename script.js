const addbtn = document.getElementById(`add`);

addbtn.addEventListener(`click`,()=> addNewNote(`Add New Note`));

function addNewNote(text = ``) {
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

        <div class="main ${text ? " " : "hidden"}"></div>
        <textarea class="${text ? "hidden" : " "}"></textarea>`;

        const deleteBtn = note.querySelector(`.delete`);
        const editBtn = note.querySelector(`.edit`);
        const main = note.querySelector(`.main`);
        const textarea = note.querySelector(`textarea`);

        text.value = text
        main.innerHTML = text

        deleteBtn.addEventListener(`click`, ()=>{
          note.remove();
        });

        editBtn.addEventListener(`click`, ()=> {
          main.classList.toggle(`hidden`)
          textarea.classList.toggle(`hidden`)
        })

        document.body.appendChild(note);
}