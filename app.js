function onReady() {
  const addToDoForm = document.getElementById("addToDoForm");
  const newToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", event => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement("li");
    let checkbox = document.createElement("input");
    let button = document.createElement("button");

    button.className = "mdc-button mdc-button--raised";
    button.id = "delete";
    button.textContent = "DELETE";
    button.style.backgroundColor = "#FF0000";
    button.style.margin = "5px 15px";

    newLi.textContent = title;
    newLi.className = "mdc-typography--body1";
    newLi.appendChild(button);
    toDoList.appendChild(newLi);

    newToDoText.value = "";
  });

  toDoList.addEventListener("click", element => {
    var element = document.querySelector("li");
    element.parentNode.removeChild(element);
  });
}

window.onload = function() {
  onReady();
};
