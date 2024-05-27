import React from 'react';
import { Button } from '@/components/ui/button';

interface ConfirmCloseModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmCloseModal: React.FC<ConfirmCloseModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <h2 className="text-lg font-bold mb-4">Are you sure you want to leave?</h2>
        <p className="mb-6">You have some unsaved changes!</p>
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={onCancel}
          className='rounded-xl'>
            Cancel
          </Button>
          <Button onClick={onConfirm} className='px-4 rounded-xl'>OK</Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCloseModal;
