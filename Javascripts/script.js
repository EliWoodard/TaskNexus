document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-btn");
  const inputPanel = document.getElementById("input-panel");
  const closeBtn = document.getElementById("close-btn");
  const taskForm = document.getElementById("task-form");

  addButton.addEventListener("click", () => {
    inputPanel.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    inputPanel.classList.add("hidden");
  });

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("due-date").value;
    const description = document.getElementById("description").value;

    // Create the task element
    const taskColumnBottom = document.querySelector(".column-tasks .column-bottom");
    const newTask = document.createElement("div");
    newTask.classList.add("task-item");

    // Create the task info element (the button)
    const taskInfo = document.createElement("button");
    taskInfo.classList.add("task-info");

    // Create the task info content
    const titleElem = document.createElement("h3");
    titleElem.innerText = `${title}`;
    titleElem.style.float = "right";
    taskInfo.appendChild(titleElem);

    const subjectElem = document.createElement("h4");
    subjectElem.innerText = `${subject}`;
    taskInfo.appendChild(subjectElem);

    const dueDateElem = document.createElement("p");
    dueDateElem.innerText = `${dueDate}`;
    dueDateElem.style.float = "right";
    taskInfo.appendChild(dueDateElem);

    // Create the task panel element (the description panel)
    const taskPanel = document.createElement("div");
    taskPanel.classList.add("task-panel");
    taskPanel.style.display = "none";

    const descElem = document.createElement("p");
    descElem.innerText = `Description: ${description}`;
    taskPanel.appendChild(descElem);

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.addEventListener("click", () => {
      taskColumnBottom.removeChild(newTask);
    });
    taskPanel.appendChild(completeBtn);

    // Add event listener to task info button to toggle task panel visibility
    taskInfo.addEventListener("click", () => {
      if (taskPanel.style.display === "none") {
        taskPanel.style.display = "block";
      } else {
        taskPanel.style.display = "none";
      }
    });

    // Add task info and panel to task element
    newTask.appendChild(taskInfo);
    newTask.appendChild(taskPanel);

    // Append the new task to the task column's bottom container
    taskColumnBottom.appendChild(newTask);

    // Clear the input fields after submitting
    document.getElementById("subject").value = "";
    document.getElementById("title").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("description").value = "";

    // Hide the input panel after submitting
    inputPanel.classList.add("hidden");
  });
});
