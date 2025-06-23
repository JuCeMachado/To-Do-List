const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const clearAllButton = document.getElementById("clear-all");

function addTask() {
    if (inputBox.value === "") {
        alert("Debes escribir algo!");
    } else {
        let newTask = document.createElement("li");
        newTask.textContent = inputBox.value;
        listContainer.appendChild(newTask);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        newTask.appendChild(span);
        checkTaskCount();
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
        checkTaskCount();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    checkTaskCount(); // ✅ Verificamos al cargar tareas guardadas
}

function checkTaskCount() {
    const tasks = listContainer.getElementsByTagName("li");
    if (tasks.length >= 3) {
        clearAllButton.style.display = "block";
    } else {
        clearAllButton.style.display = "none";
    }
}

function clearAll() {
    listContainer.innerHTML = "";
    clearAllButton.style.display = "none";
    localStorage.removeItem("data");
}

showTask();

    // Agregar un borrar todo si hay mas de 3 opciones