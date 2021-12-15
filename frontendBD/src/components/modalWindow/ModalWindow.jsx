import React from 'react';
import cl from "./ModalWindow.module.css"

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [cl.ModalWindow]

    if(visible === true){
        rootClasses.push(cl.active);
    }

    return (
        <div className = {rootClasses.join(' ')} onClick = {() => setVisible(false)}>
            <div className = {cl.ModalContent} onClick = {(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;