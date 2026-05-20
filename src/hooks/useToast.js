/**
 * useToast.js - Toast Hook
 *
 * Custom hook for using toast notifications.
 * Separated from component file for better hot reload support.
 *
 * @author Kilo Code - TwinRally Team
 * @version 1.0.0
 */

import { useContext } from 'react';
import { ToastContext } from '../components/common/Toast';

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};