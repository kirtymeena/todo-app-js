import "./style.css"



// render all notes
(
    function () {
        const addTitle = document.getElementById("title");
        const addText = document.getElementById("task__text");
        const addNoteBtn = document.getElementById("addNote")
        const notes = document.querySelector(".notes");
        const main = document.querySelector('main');
        const addWrapper = document.querySelector(".add__wrapper");
        let notesArr = [];


        // auto resize textbox
        addText.addEventListener("keydown", () => {
            autoResize()
        })
        const autoResize = () => {
            addText.style.height = "auto";
            addText.style.height = addText.scrollHeight + 'px';
        }

        // display title input on click
        addWrapper.addEventListener("click", () => {
            addTitle.style.display = "block"
            addText.style.minHeight = "10rem"
        })

        // hide title input box when clicked away
        main.addEventListener("click", (e) => {
            console.log(e.target)
            addTitle.style.minHeight = "auto"
        })

        // render All notes
        const renderNotes = () => {
            const getNotes = localStorage.getItem("notes")
            const data = JSON.parse(getNotes);
            notes.innerHTML = ""
            if (notesArr.length === 0 && data.length > 0) {
                notesArr = data
                console.log(notesArr)
            }
            data.forEach(note => {
                const notesWrapper = document.createElement("div");
                const title = document.createElement("p");
                const description = document.createElement("p");
                const footer = document.createElement("div")
                notesWrapper.classList.add("notesContainer");
                title.classList.add("title");
                footer.classList.add("footer")
                description.classList.add("description")

                title.innerHTML = note.title
                description.innerHTML = note.description.length > 200 ? note.description.slice(0, 200) + "..." : note.description
                footer.setAttribute("id","dots")

                footer.innerHTML = `<lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors="primary:black,secondary:black"
                style="width:30px;height:30px">
                </lord-icon>
                `

                notesWrapper.appendChild(title)
                notesWrapper.appendChild(description)
                notesWrapper.appendChild(footer)
                notes.append(notesWrapper)
            })

        }

        // add notes logic
        const addNotes = () => {
            const title = addTitle.value;
            const text = addText.value
            console.log(text)
            notesArr.push({
                id: new Date().toISOString(),
                title: title,
                description: text,

            })
            localStorage.setItem("notes", JSON.stringify(notesArr))
            addTitle.value = "";
            addText.value = ""
            if (localStorage.getItem("notes")) {
                renderNotes()
            }
        }

        addNoteBtn.addEventListener('click', addNotes)



        // show options in dots
        const options = document.getElementById("dots-three")

       




        const allNotes = localStorage.getItem("notes")
        if (JSON.parse(allNotes).length > 0) {
            renderNotes()
        }


    }
)()





// render notes







