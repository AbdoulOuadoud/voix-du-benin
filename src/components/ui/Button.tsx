"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className?: string;
    href?: string;
    isExternal?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    href,
    isExternal = false,
    ...props
}) => {
    // Utiliser les classes CSS définies dans globals.css
    const getVariantClass = () => {
        switch (variant) {
            case 'primary': return 'btn-primary';
            case 'secondary': return 'btn-secondary';
            case 'outline': return 'btn-outline';
            case 'danger': return 'btn-danger';
            default: return 'btn-primary';
        }
    };

    // Classes pour les différentes tailles
    const getSizeClass = () => {
        switch (size) {
            case 'sm': return 'text-sm px-3 py-1.5';
            case 'md': return 'text-base px-4 py-2';
            case 'lg': return 'text-lg px-6 py-3';
            default: return 'text-base px-4 py-2';
        }
    };

    const classes = `${getVariantClass()} ${getSizeClass()} ${className}`;

    const buttonContent = (
        <motion.span
            className="flex items-center justify-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.span>
    );

    if (href) {
        if (isExternal) {
            return (
                <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
                    {buttonContent}
                </a>
            );
        }
        return (
            <Link href={href} className={classes}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {buttonContent}
        </button>
    );
};

export default Button;