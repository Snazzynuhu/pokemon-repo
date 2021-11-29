import React from 'react'
import './Modal.style.css';


export const Modal = ({children, isOpen, handleToggle}) => {

    return isOpen ? (
        <div className="modal">
            <div className="modalContent">
                <div className="closeModal" onClick={handleToggle}>x</div>
{children}
            </div>
            
        </div>
    ) : null
}
