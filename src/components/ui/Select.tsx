"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Interface pour les options du sélecteur
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

// Interface pour les props du composant Select
interface SelectProps {
    id?: string;
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options?: SelectOption[];
    placeholder?: string;
    className?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    helpText?: string;
    icon?: React.ReactNode;
}

export default function Select({
    id,
    label,
    value,
    onChange,
    options = [],
    placeholder = 'Sélectionner une option',
    className = '',
    error = '',
    required = false,
    disabled = false,
    helpText = '',
    icon
}: SelectProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label htmlFor={id} className="block text-texte-principal font-medium mb-2">
                    {label} {required && <span className="text-rouge-terre">*</span>}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </div>
                )}
                
                <select
                    id={id}
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`
                        appearance-none w-full px-4 py-3 pr-10 rounded-xl border
                        transition-all duration-200
                        ${icon ? 'pl-10' : ''}
                        ${error 
                            ? 'border-rouge-terre focus:border-rouge-terre ring-2 ring-rouge-terre/20' 
                            : isFocused 
                                ? 'border-vert-beninois outline-none ring-2 ring-vert-beninois/20' 
                                : 'border-gray-300 hover:border-gray-400 focus:border-vert-beninois focus:ring-2 focus:ring-vert-beninois/20'}
                        ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white'}
                    `}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    
                    {options.map((option) => (
                        <option 
                            key={option.value} 
                            value={option.value}
                            disabled={option.disabled}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <ChevronDown size={18} />
                </div>
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