document.addEventListener("DOMContentLoaded", () => {
  
    function addTask(description) {
      const taskItem = document.createElement('li');
      taskItem.textContent = description;
      listContainer.appendChild(taskItem);
    }
  
    let inputFields = document.querySelectorAll('.taskInput');
    let submitButtons = document.querySelectorAll('.submitTask');
    let listContainer = document.getElementById('taskList');
  
    submitButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const taskDescription = inputFields[index].value.trim();
  
        if (taskDescription !== '') {
          addTask(taskDescription);
          inputFields[index].value = '';
        }
      });
    });
  });
  
  
