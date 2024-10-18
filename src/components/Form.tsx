// src/components/Form.tsx
import React from "react";

interface FormProps {
  onSubmit: (e: React.FormEvent) => void;
  title?: React.ReactNode; // Slot for form title
  children: React.ReactNode; // Slot for form body (inputs, etc.)
  actions?: React.ReactNode; // Slot for form actions (buttons, etc.)
}

const Form: React.FC<FormProps> = ({ onSubmit, title, children, actions }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Title Slot */}
      {title && <div className="text-xl font-semibold mb-4">{title}</div>}

      {/* Form Body Slot */}
      {children}

      {/* Actions Slot */}
      {actions}
    </form>
  );
};

export default Form;
