function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement("li");
    let checkbox = document.createElement("input");
    let deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";

    deleteBtn.className = "mdc-button mdc-button--raised";
    deleteBtn.innerHTML = "<span>Delete</span>";
    deleteBtn.id = "delete";
    deleteBtn.style.backgroundColor = "#FF0000";
    deleteBtn.style.margin = "5px 15px";

    newLi.textContent = title;
    newLi.className = "mdc-typography--body1";
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    toDoList.appendChild(newLi);

    newToDoText.value = "";

    deleteBtn.addEventListener("click", function() {
      newLi.parentNode.removeChild(newLi);
    });
  });
}

window.onload = function() {
  onReady();
};
