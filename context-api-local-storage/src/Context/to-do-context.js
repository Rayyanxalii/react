import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todoinput: 'Do this job',
            isCompleted: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleTodo: (id) => { }
});


export const ToDoProvider = ToDoContext.Provider;


export const useToDo = () => {
    return useContext(ToDoContext);
}