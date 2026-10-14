const form = document.getElementById("task-form");
const titleInput = document.getElementById("title");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = titleInput.value;
    list.appendChild(li);

    titleInput.value = "";
});

