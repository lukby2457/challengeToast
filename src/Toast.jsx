import "./Toast.css";
import { useEffect, useState } from "react";
import EventBus from "./eventBus";
import { createPortal } from "react-dom";

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  const closeToast = (toastId) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId));
  }

  useEffect(() => {
    const handleToastEvent = (toast) => {
      setToasts((prevToasts) => [...prevToasts, { id: Date.now(), ...toast }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, 5000);
    };

    const unsubscribe = EventBus.subscribe("SHOW_TOAST", handleToastEvent);

    return () => unsubscribe;
  }, []);

  return createPortal(
    <div className="toast-container">
      {toasts.map((toast, index) => (
        <div key={index} className="toast">
          <button onClick={() => closeToast(toast.id)} className="toast-close">x</button>
          <div>
            {toast.message}
          </div>
        </div>
      ))}
    </div>,
    document.getElementById("toast-Container")
  );
};

export default Toast;