import React, { useState } from "react";
import type { ToDo } from "../model";
import { MdDeleteForever, MdEditNote, MdCheckCircle } from "react-icons/md";
import "./SingleToDo.css";
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  index: number;
  todo: ToDo;
  todos: ToDo[];
  setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  onToggle: () => void;
};
const SingleToDo = ({ index, todo, todos, setTodos, onToggle }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.todo);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isPopupClosing, setIsPopupClosing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  const closeDeleteConfirm = () => {
    setIsPopupClosing(true);

    setTimeout(() => {
      setShowDeleteConfirm(false);
      setIsPopupClosing(false);
    }, 250);
  };
  const handleDelete = (id: number) => {
    setIsPopupClosing(true);
    setIsDeleting(true);

    setTimeout(() => {
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    }, 900);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editToDo } : todo,
      ),
    );
    setEdit(false);
  };
  const handleToggle = () => {
    if (isMoving) return;

    setIsMoving(true);

    setTimeout(() => {
      onToggle();
    }, 400);
  };
  return (
    <>
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided, snapshot) => (
          <form
            className={`todosSingle
            ${todo.isDone ? "todosSingle-done" : ""}
            ${showDeleteConfirm ? "todosSingle-deleteWarning" : ""}
            ${isDeleting ? "todosSingle-deleting" : ""}
            ${
              isMoving
                ? todo.isDone
                  ? "todosSingle-movingLeft"
                  : "todosSingle-movingRight"
                : ""
            }
            ${snapshot.isDragging ? "drag" : ""}`}
            onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {edit ? (
              <input
                autoFocus
                value={editToDo}
                onChange={(e) => setEditToDo(e.target.value)}
                className="todosSingle-text"
              />
            ) : (
              <span className="todosSingle-text">{todo.todo}</span>
            )}

            <div className="todoIcons">
              <span
                className="icon editIcon"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <MdEditNote />
              </span>
              <span
                className="icon deleteIcon"
                onClick={() => setShowDeleteConfirm(true)}
              >
                <MdDeleteForever />
              </span>
              <span className="icon doneIcon" onClick={handleToggle}>
                <MdCheckCircle />
              </span>
            </div>
          </form>
        )}
      </Draggable>

      {showDeleteConfirm && (
        <div
          className={`deleteConfirmOverlay ${
            isPopupClosing ? "deleteConfirmOverlay-closing" : ""
          }`}
          onClick={() => closeDeleteConfirm()}
        >
          <div
            className="deleteConfirmPopup"
            onClick={(event) => event.stopPropagation()}
          >
            <p>Delete Task?</p>

            <div className="deleteConfirmActions">
              <button type="button" onClick={() => closeDeleteConfirm()}>
                Cancel
              </button>

              <button
                type="button"
                className="confirmDeleteButton"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleToDo;
