document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add-btn");
  const inputPanel = document.getElementById("input-panel");
  const closeBtn = document.getElementById("close-btn");
  const taskForm = document.getElementById("task-form");

  const currentDate = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = monthsOfYear[currentDate.getMonth()];
  const dayOfMonth = currentDate.getDate();

  const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

  const currentDateElem = document.getElementById("current-date");
  currentDateElem.innerText = formattedDate;

  addButton.addEventListener("click", () => {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);
    overlay.style.display = 'block';

    inputPanel.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    inputPanel.classList.add("hidden");

    var overlay = document.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);
  });

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    var overlay = document.querySelector('.overlay');
    overlay.parentNode.removeChild(overlay);

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const dueDate = document.getElementById("due-date").value;
    const description = document.getElementById("description").value;

    // Create the task element
    const taskColumnBottom = document.querySelector(".column-tasks .column-bottom");
    const newTask = document.createElement("div");
    newTask.classList.add("task-item");

    // Add event listener to task item to toggle task panel visibility
    newTask.addEventListener("click", () => {
      if (taskPanel.style.display === "none") {
        taskPanel.style.display = "block";
        newTask.classList.add("active");
      } else {
        taskPanel.style.display = "none";
        newTask.classList.remove("active");
      }
    });

    // Add task content to task item
    const titleElem = document.createElement("h3");
    titleElem.innerText = `${title}`;
    titleElem.style.float = "right";
    newTask.appendChild(titleElem);

    const subjectElem = document.createElement("h4");
    subjectElem.innerText = `${subject}`;
    newTask.appendChild(subjectElem);


    const [year, month, day] = dueDate.split('-');
    const formattedDueDate = new Date(year, month - 1, day).toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const dueDateElem = document.createElement("p");
    dueDateElem.innerText = `${formattedDueDate}`;
    dueDateElem.style.float = "right";
    newTask.appendChild(dueDateElem);

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

    // Add task panel to task item
    newTask.appendChild(taskPanel);

    // Add new task to task column's bottom container
    taskColumnBottom.appendChild(newTask);

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
