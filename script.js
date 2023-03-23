document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-btn");
  const inputPanel = document.getElementById("input-panel");
  const taskForm = document.getElementById("task-form");
  const taskInfoInput = document.getElementById("task-info");
  const tasksColumnBottom = document.querySelector(".column-tasks .column-bottom");

  addButton.addEventListener("click", () => {
    inputPanel.classList.toggle("hidden");
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskInfo = taskInfoInput.value.trim();

    if (taskInfo) {
      const taskBox = document.createElement("div");
      taskBox.classList.add("task-box");
      taskBox.textContent = taskInfo;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-btn");
      deleteButton.textContent = "x";
      deleteButton.title = "Delete task";

      taskBox.appendChild(deleteButton);
      tasksColumnBottom.appendChild(taskBox);

      taskInfoInput.value = "";
      inputPanel.classList.add("hidden");
    }
  });

  // Add a click event listener to the delete button
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const taskBox = e.target.parentElement;
      tasksColumnBottom.removeChild(taskBox);
    }
  });
});
