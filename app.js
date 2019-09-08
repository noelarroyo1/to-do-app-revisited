function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById("addToDoForm");
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById("newToDoText");
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = "";
    id = id + 1;
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById("toDoList");

    toDoList.textContent = "";

    toDos.forEach(function(toDo) {
      const newLi = document.createElement("li");
      const checkbox = document.createElement("input");
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "<span>Delete</span>";
      checkbox.type = "checkbox";
      deleteBtn.className = "mdc-button mdc-button--raised";
      deleteBtn.id = "delete";
      deleteBtn.style.backgroundColor = "#FF0000";
      deleteBtn.style.margin = "5px 15px";

      newLi.textContent = toDo.title;
      newLi.id = toDo.id;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", event => {
        toDos = toDos.filter(item => {
          return item != toDo;
        });
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
