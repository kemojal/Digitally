// components/settings/ConfirmDisconnectModal.tsx
import React from "react";

interface ConfirmDisconnectModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDisconnectModal: React.FC<ConfirmDisconnectModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg">
        <p>Are you sure you want to disconnect this bank account?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-200 text-gray-800 py-2 px-4 mr-2 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={onConfirm}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDisconnectModal;
