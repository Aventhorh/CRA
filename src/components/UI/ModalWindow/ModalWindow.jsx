import React from "react";
import cl from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClass = [cl.modalWindow]
    if(visible){
        rootClass.push(cl.active);
    }

    return (
        <div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalWindowContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}

export default ModalWindow;