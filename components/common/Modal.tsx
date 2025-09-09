import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XIcon } from '../icons/Icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const modalRoot = document.getElementById('modal-root');

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!modalRoot) return null;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-f1-light-dark rounded-lg shadow-xl w-full max-w-lg m-4 p-6 border border-gray-700 relative transform transition-all duration-300 scale-95 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
            aria-label="Close modal"
          >
            <XIcon />
          </button>
        </div>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

// Add keyframe animations to a style tag in the head for fade-in and scale-in effects
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade-in {
    animation: fadeIn 0.3s ease-out forwards;
  }
  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
  .animate-scale-in {
      animation: scaleIn 0.3s ease-out forwards;
  }
`;
document.head.appendChild(style);
