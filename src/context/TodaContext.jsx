import { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export const TodoContext = ({children}) => {
    const [todos, setTodos] = useState([])
    function addTodos(body){
        setTodos([...todos, body])
    }
    function deleteTodos(id){
        const deleteIndex = todos.findIndex(item => item.id == id)
        todos.splice(deleteIndex, 1)
        setTodos([...todos])
    }
    return (
        <Context.Provider value={{todos, addTodos, deleteTodos}}>{children}</Context.Provider>
    )

}