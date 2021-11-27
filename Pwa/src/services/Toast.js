import React, { useContext } from 'react';
import { ToastContext } from './toastContext';

const Toast = () => {
    const {state} = useContext(ToastContext);

    return (
        <div className="notification-container">
            {state.map((notification, i) => {
                return(
                    <div key={notification.id} className="notification toast">
                        <div className="notification-image">
                        </div>
                        <div>
                            <p className="notification-title">
                            {notification.title}</p>
                            <p className="notification-message">
                            {notification.message}</p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Toast