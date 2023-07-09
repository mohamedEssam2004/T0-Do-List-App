const inputBox = document.getElementById("input-box");
const listContianer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Ypu must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContianer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

listContianer.addEventListener("click",(e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    };
}, false);

function saveData() {
    window.localStorage.setItem("tasks", listContianer.innerHTML);
};
function showData() {
    listContianer.innerHTML = window.localStorage.getItem("tasks");
};
showData();