import React, { useContext, useState } from "react";
import { Context } from "../context/TodaContext";
import Modal from "./Modal";

function List() {
    const { todos, deleteTodos } = useContext(Context);
    const [showModal, setShowModal] = useState(false);

    const handleUpdateBtnClick = (e) => {
        setShowModal(true);
        console.log("Update button clicked");
      };
      
    return (
        <div>
            {todos.map((item, index) => (
                <div key={index} className="flex justify-between items-center m-auto bg-slate-300 mb-[10px] w-[420px] p-[10px] rounded-lg">
                    <p className="text-white text-[15px] bg-slate-400 p-[10px] rounded-lg">{item.title}</p>
                    <div>
                        <button onClick={handleUpdateBtnClick} className="border-[2px] bg-green-500 p-2 rounded-lg hover:border-green-500 hover:text-green-500 hover:bg-white text-[15px] text-white duration-300">Update</button>
                        <button onClick={() => deleteTodos(item.id)} className="border-[2px] bg-red-500 p-2 rounded-lg hover:border-red-500 hover:text-red-500 hover:bg-white text-[15px] text-white duration-300">Delete</button>
                    </div>
                </div>
            ))}
            {showModal && (
        <Modal ShowModal={showModal} setShowModal={setShowModal}>
          <form className="w-full rounded-lg mb-[50px] mt-[20px] flex flex-col justify-between bg-slate-500 p-[20px] m-auto">
            <input className="p-2 rounded-md w-[100%] mb-[20px] border-[2px] border-slate" type="text"/>
            <button className=" p-[9px] rounded-md bg-green-200">Upate  </button>
        </form>
        </Modal>
      )}
        </div>
    );
}

export default List;
