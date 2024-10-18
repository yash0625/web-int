// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode; // Title slot
  children: React.ReactNode; // Body slot
  footer?: React.ReactNode; // Footer slot (optional)
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        {/* Header Slot */}
        {title && <div className="text-xl font-semibold mb-4">{title}</div>}

        {/* Body Slot */}
        <div className="mb-6">{children}</div>

        {/* Footer Slot */}
        <div className="flex justify-end space-x-4">
          {footer || (
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
