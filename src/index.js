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
        const notedModal = document.querySelector(".notes__modal");
        const notesContainer = document.querySelector(".notes__container");
        const overlay = document.querySelector(".overlay");
        const container = document.querySelector(".container");
        const noteTitle = document.querySelector(".note__title");
        const noteDesc = document.querySelector(".note__description");
        const search = document.querySelector("#search")
        let selectedNoteId = '';
        let selectedNote;

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
            const getNotes = localStorage.getItem("notes");
            notesContainer.style.display = "none";
            overlay.style.overflow = "auto";
            overlay.style.backgroundColor = "white";
            container.style.opacity = "1"
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

                footer.style.opacity = "0.7";
                footer.style.width = "100%";


                footer.innerHTML = `<div>
                <lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors="primary:black,secondary:black"
                class="delete"
                id=${note.id}
                style="width:25px;height:25px;cursor:pointer">
                </lord-icon>
               
                </div>
                <div>${new Date(note.id).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}</div>
                `
                footer.style.display = "flex";
                footer.style.fontSize = "12px"
                footer.style.alignItems = "center";
                footer.style.justifyContent = "space-between";

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
            console.log(text)
            if (localStorage.getItem("notes") !== null) {
                notesArr = JSON.parse(localStorage.getItem("notes"))
            }
            if (text.length > 0 || title.length > 0) {
                notesArr.push({
                    id: new Date().toISOString(),
                    title: title,
                    description: JSON.stringify(text),

                })
            }
            else {
                alert("Cannot add empty note");
                return
            }
            localStorage.setItem("notes", JSON.stringify(notesArr))
            addTitle.value = "";
            addText.value = "";

            console.log()
            if (localStorage.getItem("notes")) {
                renderNotes()
            }

        }

        addNoteBtn.addEventListener('click', addNotes)




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
        // delete logic

        notes.addEventListener("click", (e) => {
            const oldTrash = JSON.parse(localStorage.getItem("trash"))
            if (oldTrash !== null && oldTrash.length > 0) {
                trash = oldTrash
            }
            console.log(e.target)
            if (e.target.tagName === "P") {
                if (e.target.className === "title") {
                    selectedNoteId = e.target.parentElement.id
                }
                else {
                    selectedNoteId = e.target.parentElement.parentElement.id
                }

            }
            else if (e.target.className === "notesContainer") {
                selectedNoteId = e.target.id
            }

            else if (e.target.tagName === "DIV") {
                selectedNoteId = e.target.parentElement.id

            }
            else {
                selectedNoteId = e.target.id
            }
            if (selectedNoteId && e.target.className !== "delete") {
                viewNote()
            }
            if (e.target.className === "delete") {
                const getNotes = localStorage.getItem("notes")
                const data = JSON.parse(getNotes);
                deleteNote(data, e)


            }
        })

        const deleteNote = (data, e) => {
            let Id;

            const newData = data.filter(note => {
                console.log(e)
                if (e.target !== undefined) {
                    Id = e.target.id;
                }
                else {
                    Id = e.id
                }
                if (note.id === Id) {
                    console.log("from delete")
                    trash.push(note)
                }
                if (note.id !== Id) {
                    return note
                }
            })
            localStorage.setItem("notes", JSON.stringify(newData));
            localStorage.setItem("trash", JSON.stringify(trash))
            console.log(trash)
            renderNotes();
        }

        const viewNote = () => {
            const data = JSON.parse(localStorage.getItem("notes"))
            const noteOption = document.querySelector(".notes__option");

            selectedNote = data.filter(note => note.id === selectedNoteId);
            console.log(selectedNote)
            if (selectedNote) {
                notesContainer.style.display = "flex";
                overlay.style.backgroundColor = "rgb(254, 254, 254);";
                overlay.style.overflow = "hidden"
                container.style.opacity = "0.5"
                noteTitle.innerHTML = `<p>${selectedNote[0].title}</p>`
                noteDesc.innerHTML = `<p>${JSON.parse(selectedNote[0].description)}</p>`
                noteOption.setAttribute("id", selectedNote[0].id)
            }

        }

        notesContainer.addEventListener("click", (e) => {
            if (e.target.className === "notes__container") {
                notesContainer.style.display = "none";
                overlay.style.overflow = "auto";
                overlay.style.backgroundColor = "white";
                container.style.opacity = "1"
            }
            if (e.target.className === "delete") {
                console.log(e.target)

                deleteNote(JSON.parse(localStorage.getItem("notes")), e.target.parentElement.parentElement)
            }

        })

        // display deleted notes
        const renderTrash = () => {
            trashDiv.innerHTML = "";
            trashNotes.innerHTML = ""
            msg.innerHTML = '<i>Notes in Trash will be deleted after 24 hour</i> <button style="margin-left:2rem;padding:0.5rem;background:none;border:none;outline:none;color:#1e3a8a;cursor:pointer">Clear trash</button>'
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

        msg.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                const response = confirm("Are you sure you want to do clear trash?");
                if (response) {
                    localStorage.removeItem("trash")
                    renderTrash();
                    e.preventDefault()
                }
            }

        })
        const debounce = (cb, time) => {
            let timeout;

            if (timeout) {
                timeout = time
            }
            setTimeout(() => {
                cb()
            }, timeout)
        }



        search.addEventListener("keyup", (e) => {
            const s = search.value
            debounce((s) => {
                const data = JSON.parse(localStorage.getItem("notes"));
                console.log(data)
                if (data !== null) {
                    notes.innerHTML = ""
                    data.filter(note => {
                        if (note.title.toLowerCase().startsWith(search.value.toLowerCase()) || note.description.toLowerCase().includes(search.value.toLowerCase())) {
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

                            footer.style.opacity = "0.7";
                            footer.style.width = "100%";


                            footer.innerHTML = `<div>
                <lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors="primary:black,secondary:black"
                class="delete"
                id=${note.id}
                style="width:25px;height:25px;cursor:pointer">
                </lord-icon>
               
                </div>
                <div>${new Date(note.id).toLocaleString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}</div>
                `
                            footer.style.display = "flex";
                            footer.style.fontSize = "12px"
                            footer.style.alignItems = "center";
                            footer.style.justifyContent = "space-between";

                            footer.setAttribute("id", note.id);
                            notesWrapper.setAttribute('id', note.id)


                            notesWrapper.appendChild(title)
                            notesWrapper.appendChild(description)
                            notesWrapper.appendChild(footer)
                            notes.append(notesWrapper)
                        }
                    })
                }
            }, 300)
        })

        // debounce -  delay the search result


        // filter



        if (JSON.parse(localStorage.getItem("notes") !== null && localStorage.getItem("notes")).length > 0) {
            renderNotes()
        }

        if (new Date() === new Date(new Date().getTime() + 24 * 60 * 60 * 1000)) {
            localStorage.removeItem("trash")
        }

    }


)()













