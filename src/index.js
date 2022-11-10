document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addNote(event.target.newTask.value);
    form.reset();
  });
});

function addNote(tsk) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", delNote);

  li.innerText = tsk;
  btn.setAttribute("class", "delBtn");

  btn.innerText = "x";

  let tasks = document.getElementById("tasks");
  addPriority(li);
  li.append(btn);
  tasks.append(li);
}

function delNote(e) {
  e.target.parentNode.remove();
}
function addPriority(note) {
  let pri = document.querySelector("select").value;

  if (pri === "high") {
    note.style.background = "#ffafcc95";
  } else if (pri === "medium") {
    note.style.background = "#a2d2ff85";
  } else if (pri === "low") {
    note.style.background = "#ddedea";
  }
}
