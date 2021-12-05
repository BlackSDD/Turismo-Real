import React from "react";
import '../../assetss/css/bootstrap.min.css';
import '../../assetss/css/modal.css';
///import PWA
<link rel="manifest" href="../../public/manifest.json"></link>

const Modal = ({ isOpen, closeModal, title, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <div className="modal-header">
                    <h4 class="modal-title">{title}</h4>
                    <button type="button" class="btn-close" onClick={closeModal} data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button onClick={closeModal}>
                        Close Modal
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
