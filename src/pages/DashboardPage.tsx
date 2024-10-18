import React, { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <button
        onClick={openModal}
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200 ease-in-out mb-4"
      >
        Open Modal
      </button>

      <button
        onClick={handleLogOut}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200 ease-in-out"
      >
        Log Out
      </button>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          <h2 className="text-xl font-semibold mb-4">Custom Modal Title</h2>
        } // Title Slot
        footer={
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                closeModal();
                // Handle Confirm action here
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Confirm
            </button>
          </div>
        } // Footer Slot
      >
        {/* Body Slot */}
        <p className="leading-relaxed">
          This is the body content of the modal. You can put anything here, like
          text or forms.
        </p>
      </Modal>
    </div>
  );
};

export default DashboardPage;
