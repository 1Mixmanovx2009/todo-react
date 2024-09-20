function Modal({ children, setShowModal, ShowModal }) {
    const closeModal = (e) => {
      if (e.target.id === "wrapper") {
        setShowModal(false);
      }
    };
  
    return (
      <>
        <div
          id="wrapper"
          onClick={closeModal}
          className={`fixed top-0 bottom-0 right-0 left-0 backdrop-blur transition-transform duration-300 transform ${
            ShowModal ? "" : "scale-0 opacity-0"
          }`}
        >
          <div className="absolute m-auto top-0 bottom-0 right-0 left-0 w-[450px] h-[200px] bg-slate-400 rounded-md p-3">
            {children}
          </div>
        </div>
      </>
    );
  }
  
  export default Modal;
  