import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  // TODO: Implement function to add a new task
  const addTask = (newTask) => {
    // TODO: Generate a unique ID for the task
    const taskId = // Generate a unique ID

    // TODO: Create a new task object with the provided data
    const task = {
      id: taskId,
      // ...newTask data
    };

    // TODO: Update the tasks state by adding the new task
    setTasks([...tasks, task]);
  };

  // TODO: Implement function to update a task
  const updateTask = (taskId, updatedTask) => {
    // TODO: Find the task in the tasks state array based on its ID
    const taskToUpdate = // Find the task to update

    // TODO: Update the task object with the provided data
    const updatedTaskObj = {
      ...taskToUpdate,
      // ...updatedTask data
    };

    // TODO: Create a new array with the updated task and other tasks
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return updatedTaskObj;
      }
      return task;
    });

    // TODO: Update the tasks state with the updated array
    setTasks(updatedTasks);
  };

  // TODO: Implement function to delete a task
  const deleteTask = (taskId) => {
    // TODO: Filter out the task to delete from the tasks state
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    // TODO: Update the tasks state with the filtered array
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      {/* TODO: Render the TaskForm component and pass the addTask function as a prop */}
      
      {/* TODO: Render the TaskList component and pass the tasks array, updateTask and deleteTask functions as props */}
    </div>
  );
};

const TaskForm = ({ addTask }) => {
  // TODO: Implement state for capturing task input

  // TODO: Implement function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Invoke the addTask function and pass the task data
    // TODO: Clear the form input fields after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Implement input fields to capture task details */}
      {/* TODO: Implement a submit button */}
    </form>
  );
};

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {/* TODO: Render TaskItem component for each task */}
    </ul>
  );
};

const TaskItem = ({ task, updateTask, deleteTask }) => {
  // TODO: Implement state for capturing updated task details

  // TODO: Implement function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Invoke the updateTask function and pass the task ID and updated task data
    // TODO: Clear the form input fields after submitting
  };

  return (
    <li>
      <div>
        {/* TODO: Display task details */}
        
        {/* TODO: Render a form to update task details and pass handleSubmit function */}
      </div>
      {/* TODO: Implement a button to delete the task and invoke the deleteTask function */}
    </li>
  );
};

export default TaskManager;

// Challenge: Building a Task Manager

// Your task is to create a task management application in React. The application should allow users to perform CRUD operations on tasks. Users should be able to create new tasks, view a list of existing tasks, update task details, and delete tasks.

// Requirements:

// Create a parent component, TaskManager, that manages the task data and functionality.
// Implement state management using hooks (useState, useEffect) to store the list of tasks in the parent component.
// Create child components to handle different operations:
// TaskForm to create new tasks.
// TaskList to display the list of existing tasks.
// TaskItem to render individual task details and handle updates and deletion.
// Pass the necessary data and functions from the parent component to the child components using props.
// Implement the functionality to add new tasks by capturing input from the user in the TaskForm component and updating the task list.
// Implement the functionality to display the list of tasks in the TaskList component using data passed from the parent component.
// Implement the functionality to update task details by allowing users to edit the task details in the TaskItem component and updating the task list.
// Implement the functionality to delete tasks by allowing users to remove tasks from the TaskList component and updating the task list.
// Style the task manager application to create a user-friendly and visually appealing interface.
// Instructions:

// Create the TaskManager component as a functional component.
// Use hooks (useState, useEffect) to manage the task data state and functionality.
// Implement functions to add, update, and delete tasks within the TaskManager component.
// Render the TaskForm component within the TaskManager component and pass the necessary functions to handle task creation.
// Render the TaskList component within the TaskManager component and pass the list of tasks and the necessary functions to handle task updates and deletions.
// In the TaskForm component, capture user input to create new tasks and invoke the add task function.
// In the TaskList component, iterate over the list of tasks and render an instance of TaskItem component for each task, passing the task details and the necessary functions.
// In the TaskItem component, display the task details and allow users to edit and delete tasks, invoking the corresponding functions.
// Remember to handle loading and error states appropriately, and ensure proper error handling throughout the application.

// Feel free to enhance the application with additional features such as task priorities, due dates, or task filtering.

// Good luck, and happy coding!