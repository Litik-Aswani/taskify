import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import type { ToDo } from "./model";
import ToDoList from "./components/ToDoList";
import { DragDropContext, type DropResult } from "@hello-pangea/dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const activeTasks = [...todos];
    const completedTasks = [...completedToDos];

    const sourceList =
      source.droppableId === "ToDosList" ? activeTasks : completedTasks;

    const destinationList =
      destination.droppableId === "ToDosList" ? activeTasks : completedTasks;

    const [movedTodo] = sourceList.splice(source.index, 1);

    if (!movedTodo) return;

    const updatedTodo = {
      ...movedTodo,
      isDone: destination.droppableId === "ToDosComplete",
    };

    destinationList.splice(destination.index, 0, updatedTodo);

    setTodos(activeTasks);
    setCompletedToDos(completedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
