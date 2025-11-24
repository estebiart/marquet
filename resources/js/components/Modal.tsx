import React from "react";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {children}
    </div>
  );
};

export default Modal;
