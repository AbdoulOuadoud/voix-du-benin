"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default', 
  hover = false 
}) => {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    primary: 'bg-vert-beninois/5 border border-vert-beninois/20',
    secondary: 'bg-jaune-sable/5 border border-jaune-sable/20',
    highlight: 'bg-white border-2 border-vert-beninois'
  };

  const hoverClasses = hover 
    ? 'transition-all hover:shadow-lg hover:border-vert-beninois/50' 
    : '';

  return (
    <motion.div 
      className={`rounded-xl p-6 ${variantClasses[variant]} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;