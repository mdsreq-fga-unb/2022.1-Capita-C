import React from "react";
import './index.css'

const ModalLoja = ({closeModal}: any) => {
    return(
        <div className="modalDiv" >
            <button onClick={() => closeModal(false)} >X</button>
            <text>Content</text>
        </div>
    )
}

export default ModalLoja;