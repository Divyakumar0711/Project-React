import { createContext, useContext } from "react";

// 1. createContext and add value
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      checked: false,
    },
  ],
  addToDo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// 2. make a constum hook for useContext
export const useTodoContext = () => {
  return useContext(TodoContext);
};

// 3. make a variable for provider
export const TodoProvider = TodoContext.Provider;
