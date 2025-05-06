"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    isExternal = false,
    disabled = false,
    size = 'medium',
    fullWidth = false,
}) {
    // Définition des classes CSS en fonction des variantes et tailles
    const getVariantClasses = () => {
        switch (variant) {
            case 'primary':
                return 'bg-vert-beninois  text-white hover:bg-vert-beninois /90';
            case 'secondary':
                return 'bg-benin-yellow text-text-primary hover:bg-benin-yellow/90';
            case 'accent':
                return 'bg-benin-red text-white hover:bg-benin-red/90';
            case 'outline':
                return 'bg-transparent border-2 border-vert-beninois text-benin-green hover:bg-vert-beninois /10';
            case 'ghost':
                return 'bg-transparent text-benin-green hover:bg-vert-beninois /10';
            default:
                return 'bg-vert-beninois  text-white hover:bg-vert-beninois /90';
        }
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'small':
                return 'py-1 px-3 text-sm';
            case 'large':
                return 'py-3 px-6 text-lg';
            default:
                return 'py-2 px-4';
        }
    };

    const baseClasses = `
        ${getVariantClasses()} 
        ${getSizeClasses()} 
        ${fullWidth ? 'w-full' : ''} 
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} 
        rounded-xl font-medium transition-all duration-200 
        flex items-center justify-center gap-2
        ${className}
    `.trim();

    const buttonContent = (
        <motion.span
            className="flex items-center justify-center gap-2"
            whileHover={!disabled ? { scale: 1.03 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
        >
            {children}
        </motion.span>
    );

    if (href && !disabled) {
        if (isExternal) {
            return (
                <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
                    {buttonContent}
                </a>
            );
        }
        return (
            <Link href={href} className={baseClasses}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button 
            onClick={disabled ? undefined : onClick} 
            className={baseClasses}
            disabled={disabled}
        >
            {buttonContent}
        </button>
    );
}