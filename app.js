"use strict";
// setting up variables
let input = document.querySelector(".add-task input");
let AddButton = document.querySelector(".add-task .plus");
let content = document.querySelector(".tasks-content");
let noTasks = document.querySelector(".no-tasks-message");
let TaskCount = document.querySelector(".tasks-count span");
let TaskCompleted = document.querySelector(".tasks-completed span");

// Focus In Input
window.onload = function () {
  input.focus();
};

// Add The Task
AddButton.addEventListener("click", () => {
  if (input.value) {
    let newTask = document.createElement("span");
    let deletetask = document.createElement("span");
    let complete = document.createElement("span");
    complete.innerText = "finished";
    complete.classList.add("complete-sign");
    newTask.innerText = input.value;
    deletetask.innerText = "Delete";
    newTask.classList.add("task-box");
    noTasks.remove();
    deletetask.classList.add("delete");
    newTask.appendChild(deletetask);
    newTask.append(complete);
    content.appendChild(newTask);

    deletetask.addEventListener("click", () => {
      newTask.remove();
      Calc();
    });
    complete.addEventListener("click", function () {
      newTask.classList.toggle("finished");
      Calc();
    });
  } else {
    input.placeholder = "Type Your Task Here Please..";
  }
  Calc();
});

function Calc() {
  TaskCount.innerHTML = document.querySelectorAll(
    ".tasks-content .task-box"
  ).length;
  TaskCompleted.innerHTML = document.querySelectorAll(
    ".tasks-content .finished"
  ).length;
}
