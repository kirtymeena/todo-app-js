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
        const sideNav = document.querySelector("aside");
        const navItemNotes = document.getElementById("Notes")
        const navItemTrash = document.getElementById("Trash");
        const trashDiv = document.querySelector(".trash");
        const msg = document.querySelector(".msg");
        const trashNotes = document.querySelector(".trash__notes");

        let notesArr = [];
        let trash = [];


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
            console.log(data)
            notes.innerHTML = ""

            if (notesArr.length === 0 && data.length > 0) {
                notesArr = data
                console.log(notesArr)
            }

            data.forEach(note => {
                const notesWrapper = document.createElement("div");
                const title = document.createElement("p");
                const description = document.createElement("div");
                const footer = document.createElement("div")
                notesWrapper.classList.add("notesContainer");
                title.classList.add("title");
                footer.classList.add("footer")
                description.classList.add("description")

                title.innerHTML = note.title
                console.log(JSON.parse(note.description).length)
                description.innerHTML = JSON.parse(note.description).length > 300 ? `<p> ${JSON.parse(note.description).slice(0, 300)}... </p>` : `<p>${JSON.parse(note.description)}</p>`



                footer.innerHTML = `<lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors="primary:black,secondary:black"
                class="delete"
                id=${note.id}
                style="width:30px;height:30px">
                </lord-icon>
                `

                footer.setAttribute("id", note.id);
                notesWrapper.setAttribute('id', note.id)

                notesWrapper.appendChild(title)
                notesWrapper.appendChild(description)
                notesWrapper.appendChild(footer)
                notes.append(notesWrapper)
            })

        }

        // add notes logic
        const addNotes = (e) => {

            const title = addTitle.value;
            const text = addText.value
            console.log(JSON.stringify(text))

            notesArr.push({
                id: new Date().toISOString(),
                title: title,
                description: JSON.stringify(text),

            })
            localStorage.setItem("notes", JSON.stringify(notesArr))
            addTitle.value = "";
            addText.value = "";
            // if (e.target.id === "addNote") {
            //     window.location.reload()
            // }
            if (localStorage.getItem("notes")) {
                renderNotes()
            }
        }

        addNoteBtn.addEventListener('click', addNotes)

        // delete logic
        notes.addEventListener("click", (e) => {
            const oldTrash = JSON.parse(localStorage.getItem("trash"))
            if (oldTrash !== null && oldTrash.length > 0) {
                trash = oldTrash
            }
            if (e.target.className === "delete") {
                const getNotes = localStorage.getItem("notes")
                const data = JSON.parse(getNotes);
                const newData = data.filter(note => {
                    if (note.id === e.target.id) {
                        trash.push(note)
                    }
                    if (note.id !== e.target.id) {
                        return note
                    }
                })
                localStorage.setItem("notes", JSON.stringify(newData));
                localStorage.setItem("trash", JSON.stringify(trash))
                console.log(trash)
                renderNotes();

            }
        })


        // select sidenav options
        sideNav.addEventListener('click', (e) => {
            const item = document.getElementById(e.target.id);

            if (e.target.id === "Notes") {
                item.setAttribute("class", "selected__nav");
                navItemTrash.removeAttribute("class");
                notes.style.display = "flex";
                addWrapper.style.display = "flex";
                trashDiv.style.display = "none";
                navItemNotes.setAttribute("href", "#Notes")
            }
            if (e.target.id === "Trash") {
                item.setAttribute("class", "selected__nav");
                navItemNotes.removeAttribute("class");
                notes.style.display = "none";
                addWrapper.style.display = "none";
                trashDiv.style.display = "block";
                navItemTrash.setAttribute("href", "#Trash");

                renderTrash()

            }
        })

        const renderTrash = () => {
            trashDiv.innerHTML = "";
            msg.innerHTML = '<i>Notes in Trash will be deleted after 24 hour</i>'
            trashDiv.append(msg)
            const trashArr = JSON.parse(localStorage.getItem("trash"));
            trashArr !== null && trashArr.forEach(note => {

                const notesWrapper = document.createElement("div");
                const title = document.createElement("p");
                const description = document.createElement("div");
                notesWrapper.classList.add("notesContainer");
                title.classList.add("title");
                description.classList.add("description")

                title.innerHTML = note.title
                console.log(JSON.parse(note.description).length)
                description.innerHTML = JSON.parse(note.description).length > 300 ? `<p> ${JSON.parse(note.description).slice(0, 300)}... </p>` : `<p>${JSON.parse(note.description)}</p>`

                notesWrapper.setAttribute('id', note.id)

                notesWrapper.appendChild(title)
                notesWrapper.appendChild(description)
                trashNotes.append(notesWrapper)
                trashDiv.append(trashNotes)
            })
        }



        if (JSON.parse(localStorage.getItem("notes") !== null && localStorage.getItem("notes")).length > 0) {
            renderNotes()
        }

        if (new Date() < new Date(new Date().getTime() + 24 * 60 * 60 * 1000)){
            localStorage.removeItem("trash")
        }

    }


)()













