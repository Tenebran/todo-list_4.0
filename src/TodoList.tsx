import React from 'react';

export const TodoList = (props: TodoListPropsType) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.task.map(task => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} /> <span>{task.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  );
};

type TodoListPropsType = {
  title: string;
  task: Array<TaskType>;
};

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
