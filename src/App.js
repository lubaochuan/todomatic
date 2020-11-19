import React, { useState } from "react";
import { nanoid } from "nanoid";

import "./styles.css";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const newTask = {
      id: "todo-" + nanoid(),
      name: name,
      completed: false
    };
    console.log("new task: " + JSON.stringify(newTask));
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    let updated;
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        updated = { ...task, completed: !task.completed };
        return updated;
      }
      return task;
    });
    console.log(updated);
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
