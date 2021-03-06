import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const editText = async (id) => {
    try {
      const body = { description };

      const res = await fetch(
        `https://humailkhan-full-stack-todo-app.herokuapp.com/api/todos/${id}`,
        {
          method: "PUT",
          mode: "cors",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
        tabindex="-1"
        aria-labelledby="edit modal"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => editText(todo.todo_id)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
