import React, { useContext, useRef } from "react";
import { Context } from "../context/TodaContext"

function From() {
    const { addTodos, todos } = useContext(Context)
    const inputRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodos({ id: todos.lenght + 1, title:inputRef.current.value })
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit} className="w-[480px] rounded-lg mb-[50px] mt-[50px] flex  justify-between bg-slate-500 p-[20px] m-auto">
            <input ref={inputRef} className="p-2 rounded-md w-[80%] border-[2px] border-slate" type="text"/>
            <button className=" p-[9px] rounded-md bg-green-200">Add</button>
        </form>
    )
}

export default From