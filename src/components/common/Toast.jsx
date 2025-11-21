/**
 * Toast.jsx - Toast Notification System
 *
 * Provides temporary, non-intrusive notifications for user feedback.
 * Supports different toast types with auto-dismiss and manual close.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import React, { useState, useEffect, createContext } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

// Toast Context
const ToastContext = createContext();

// Toast Provider Component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info', duration = 5000) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, type, duration };

    setToasts(prev => [...prev, toast]);

    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (message, duration) => addToast(message, 'success', duration);
  const error = (message, duration) => addToast(message, 'error', duration);
  const warning = (message, duration) => addToast(message, 'warning', duration);
  const info = (message, duration) => addToast(message, 'info', duration);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, success, error, warning, info }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

// Hook to use toast (moved to separate file for hot reload)

// Individual Toast Component
const Toast = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300); // Match animation duration
  };

  const getToastStyles = (type) => {
    const baseStyles = "flex items-center p-4 mb-4 text-sm rounded-lg shadow-lg backdrop-blur-lg border transition-all duration-300";

    const typeStyles = {
      success: "bg-green-500/10 text-green-400 border-green-500/20",
      error: "bg-red-500/10 text-red-400 border-red-500/20",
      warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      info: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    };

    return `${baseStyles} ${typeStyles[type]}`;
  };

  const getIcon = (type) => {
    const iconClass = "w-5 h-5 flex-shrink-0 mr-3";

    switch (type) {
      case 'success':
        return <CheckCircle className={iconClass} />;
      case 'error':
        return <XCircle className={iconClass} />;
      case 'warning':
        return <AlertCircle className={iconClass} />;
      case 'info':
      default:
        return <Info className={iconClass} />;
    }
  };

  return (
    <div
      className={`${getToastStyles(toast.type)} ${
        isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } transform transition-all duration-300 ease-out`}
      role="alert"
    >
      {getIcon(toast.type)}
      <div className="flex-1 font-medium">
        {toast.message}
      </div>
      <button
        onClick={handleClose}
        className="ml-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Toast Container Component
const ToastContainer = ({ toasts, removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast toast={toast} onRemove={removeToast} />
        </div>
      ))}
    </div>
  );
};

// Standalone Toast Component (for one-off usage)
export const ToastNotification = ({
  message,
  type = 'info',
  duration = 5000,
  onClose
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const getToastStyles = (type) => {
    const baseStyles = "flex items-center p-4 text-sm rounded-lg shadow-lg backdrop-blur-lg border transition-all duration-300";

    const typeStyles = {
      success: "bg-green-500/10 text-green-400 border-green-500/20",
      error: "bg-red-500/10 text-red-400 border-red-500/20",
      warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      info: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    };

    return `${baseStyles} ${typeStyles[type]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`;
  };

  const getIcon = (type) => {
    const iconClass = "w-5 h-5 flex-shrink-0 mr-3";

    switch (type) {
      case 'success':
        return <CheckCircle className={iconClass} />;
      case 'error':
        return <XCircle className={iconClass} />;
      case 'warning':
        return <AlertCircle className={iconClass} />;
      case 'info':
      default:
        return <Info className={iconClass} />;
    }
  };

  return (
    <div className={getToastStyles(type)} role="alert">
      {getIcon(type)}
      <div className="flex-1 font-medium">
        {message}
      </div>
      <button
        onClick={handleClose}
        className="ml-4 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;