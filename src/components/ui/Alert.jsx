"use client";

import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Alert({
    type = 'info',
    title,
    message,
    onClose,
    autoClose = false,
    autoCloseDelay = 5000,
    showIcon = true,
    showCloseButton = true,
    className = '',
}) {
    const [isVisible, setIsVisible] = useState(true);

    // Configuration de la fermeture automatique
    useEffect(() => {
        let timer;
        if (autoClose && isVisible) {
            timer = setTimeout(() => {
                setIsVisible(false);
                if (onClose) onClose();
            }, autoCloseDelay);
        }
        return () => clearTimeout(timer);
    }, [autoClose, autoCloseDelay, isVisible, onClose]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    // Configuration des styles selon le type d'alerte
    const getAlertStyles = () => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-green-50',
                    border: 'border-green-200',
                    text: 'text-green-800',
                    iconColor: 'text-benin-green',
                    icon: <CheckCircle size={20} />
                };
            case 'error':
                return {
                    bg: 'bg-red-50',
                    border: 'border-red-200',
                    text: 'text-red-800',
                    iconColor: 'text-benin-red',
                    icon: <AlertCircle size={20} />
                };
            case 'warning':
                return {
                    bg: 'bg-yellow-50',
                    border: 'border-yellow-200',
                    text: 'text-yellow-800',
                    iconColor: 'text-benin-yellow',
                    icon: <AlertTriangle size={20} />
                };
            default: // info
                return {
                    bg: 'bg-blue-50',
                    border: 'border-blue-200',
                    text: 'text-blue-800',
                    iconColor: 'text-blue-500',
                    icon: <Info size={20} />
                };
        }
    };

    const styles = getAlertStyles();

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`rounded-xl border ${styles.bg} ${styles.border} p-4 ${className}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex">
                        {showIcon && (
                            <div className={`flex-shrink-0 mr-3 ${styles.iconColor}`}>
                                {styles.icon}
                            </div>
                        )}
                        <div className="flex-grow">
                            {title && (
                                <h3 className={`text-sm font-medium ${styles.text}`}>
                                    {title}
                                </h3>
                            )}
                            {message && (
                                <div className={`text-sm mt-1 ${styles.text}`}>
                                    {message}
                                </div>
                            )}
                        </div>
                        {showCloseButton && (
                            <div className="ml-auto pl-3">
                                <div className="-mx-1.5 -my-1.5">
                                    <button
                                        onClick={handleClose}
                                        className={`inline-flex p-1.5 rounded-md ${styles.text} hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                    >
                                        <span className="sr-only">Fermer</span>
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}