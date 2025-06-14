    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === "") {
            alert("Debes escribir algo!");
        } else {
            let newTask = document.createElement("li");
            newTask.innerHTML = inputBox.value;
            listContainer.appendChild(newTask);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            newTask.appendChild(span);
        }
        inputBox.value = "";
        saveData();
    }

    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();

    // Agregar un borrar todo si hay mas de 3 opciones