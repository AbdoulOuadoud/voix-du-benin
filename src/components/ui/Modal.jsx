"use client";

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = 'medium',
    closeOnClickOutside = true,
    showCloseButton = true,
    className = '',
}) {
    const modalRef = useRef(null);

    // Gestion de la fermeture avec la touche Escape
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'visible';
        };
    }, [isOpen, onClose]);

    // Gestion du clic en dehors de la modale
    const handleBackdropClick = (e) => {
        if (closeOnClickOutside && modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    // Définition des classes de taille
    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'max-w-md';
            case 'large':
                return 'max-w-4xl';
            case 'full':
                return 'max-w-[95vw] max-h-[95vh]';
            default:
                return 'max-w-2xl';
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 overflow-y-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0"
                        onClick={handleBackdropClick}
                    />
                    
                    <motion.div
                        ref={modalRef}
                        className={`bg-white rounded-2xl shadow-lg w-full overflow-hidden ${getSizeClasses()} ${className}`}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        {/* En-tête de la modale */}
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-text-primary">{title}</h3>
                            {showCloseButton && (
                                <button 
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1.5 hover:bg-gray-100"
                                    aria-label="Fermer"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                        
                        {/* Corps de la modale */}
                        <div className="px-6 py-4">
                            {children}
                        </div>
                        
                        {/* Pied de la modale (si fourni) */}
                        {footer && (
                            <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}