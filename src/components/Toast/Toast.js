import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) return null;

    return (
        <div className="toast">
            <p>{message}</p>
            <button className="close-button" onClick={onClose}>
                &times;
            </button>
        </div>
    );
};

export default Toast;
