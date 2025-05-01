"use client";

import { useState } from 'react';

export default function Input({
    id,
    label,
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    className = '',
    error = '',
    required = false,
    disabled = false,
    icon,
    iconPosition = 'left',
    helpText = '',
}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-texte-principal font-medium mb-2">
                    {label} {required && <span className="text-rouge-terre">*</span>}
                </label>
            )}
            
            <div className={`relative ${error ? 'animate-shake' : ''}`}>
                {icon && iconPosition === 'left' && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
                
                <input
                    id={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`
                        w-full px-4 py-3 rounded-xl border
                        ${icon && iconPosition === 'left' ? 'pl-10' : ''}
                        ${icon && iconPosition === 'right' ? 'pr-10' : ''}
                        transition-all duration-200
                        ${error 
                            ? 'border-rouge-terre focus:border-rouge-terre ring-2 ring-rouge-terre/20' 
                            : isFocused 
                                ? 'border-vert-beninois outline-none ring-2 ring-vert-beninois/20' 
                                : 'border-gray-300 hover:border-gray-400 focus:border-vert-beninois focus:ring-2 focus:ring-vert-beninois/20'}
                        ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
                    `}
                />
                
                {icon && iconPosition === 'right' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
            </div>
            
            {error && (
                <p className="mt-1 text-rouge-terre text-sm">{error}</p>
            )}
            
            {helpText && !error && (
                <p className="mt-1 text-texte-secondaire text-sm">{helpText}</p>
            )}
        </div>
    );
}