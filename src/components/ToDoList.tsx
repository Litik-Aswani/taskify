import React from "react";
import "./ToDoList.css";
import type { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import { Droppable } from "@hello-pangea/dnd";

interface Props {
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  completedToDos: ToDo[];
  setCompletedToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
const ToDoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedToDos,
  setCompletedToDos,
}) => {
  const moveToCompleted = (todo: ToDo) => {
    setTodos((current) => current.filter((item) => item.id !== todo.id));

    setCompletedToDos((current) => [...current, { ...todo, isDone: true }]);
  };
  const moveToActive = (todo: ToDo) => {
    setCompletedToDos((current) =>
      current.filter((item) => item.id !== todo.id),
    );

    setTodos((current) => [...current, { ...todo, isDone: false }]);
  };

  return (
    <div className="container">
      <div className="todos active">
        <span className="todosHeading">Active Tasks</span>

        <Droppable droppableId="ToDosList">
          {(provided, snapshot) => (
            <div
              className={`todosBody ${snapshot.isDraggingOver ? "dragActive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <SingleToDo
                  index={index}
                  todo={todo}
                  todos={todos}
                  key={todo.id}
                  setTodos={setTodos}
                  onToggle={() => moveToCompleted(todo)}
                />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>

      <div className="todos completed">
        <span className="todosHeading">Completed Tasks</span>

        <Droppable droppableId="ToDosComplete">
          {(provided, snapshot) => (
            <div
              className={`todosBody ${snapshot.isDraggingOver ? "dragComplete" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {completedToDos.map((todo, index) => (
                <SingleToDo
                  index={index}
                  todo={todo}
                  todos={completedToDos}
                  key={todo.id}
                  setTodos={setCompletedToDos}
                  onToggle={() => moveToActive(todo)}
                />
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default ToDoList;
