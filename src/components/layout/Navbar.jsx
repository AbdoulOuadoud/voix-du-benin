"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Button from '../ui/Button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Détecte le défilement pour ajouter un effet de glassmorphisme
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 10);
            
            // Calculer une valeur d'opacité progressive basée sur le défilement
            // Jusqu'à 200px de défilement pour une transition complète
            const progress = Math.min(scrollPosition / 200, 1);
            setScrollProgress(progress);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Calculer les styles dynamiques basés sur le défilement
    const glassOpacity = 0.6 + (scrollProgress * 0.3); // Opacité entre 60% et 90%
    const blurStrength = 8 + (scrollProgress * 8); // Flou entre 8px et 16px
    const borderOpacity = 0.08 + (scrollProgress * 0.08); // Bordure entre 8% et 16% d'opacité
    
    return (
        <header 
            className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 max-w-5xl mx-auto px-4 rounded-2xl ${
                isScrolled ? 'shadow-lg' : ''
            }`}
            style={{
                background: `rgba(255, 255, 255, ${glassOpacity})`,
                backdropFilter: `blur(${blurStrength}px)`,
                WebkitBackdropFilter: `blur(${blurStrength}px)`,
                border: isScrolled ? `1px solid rgba(255, 255, 255, ${borderOpacity})` : 'none',
                boxShadow: isScrolled ? `0 10px 30px -10px rgba(0, 0, 0, 0.08)` : 'none'
            }}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo et nom */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-vert-beninois flex items-center justify-center">
                        <Globe size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-vert-beninois">
                        Voix du Bénin
                    </span>
                </Link>

                {/* Navigation desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    <div className="flex gap-1 mr-4 rounded-full bg-white/40 backdrop-blur-sm px-2 py-1.5">
                        <Link 
                            href="/languages" 
                            className="px-4 py-1.5 rounded-full text-texte-secondaire hover:text-vert-beninois hover:bg-white hover:shadow-sm transition-all"
                        >
                            Langues
                        </Link>
                        <Link 
                            href="/about" 
                            className="px-4 py-1.5 rounded-full text-texte-secondaire hover:text-vert-beninois hover:bg-white hover:shadow-sm transition-all"
                        >
                            À propos
                        </Link>
                        <Link 
                            href="/contribute" 
                            className="px-4 py-1.5 rounded-full text-texte-secondaire hover:text-vert-beninois hover:bg-white hover:shadow-sm transition-all"
                        >
                            Contribuer
                        </Link>
                    </div>
                    
                    <div className="flex gap-3">
                        <Button href="/auth/login" variant="outline" size="sm">
                            Connexion
                        </Button>
                        <Button href="/auth/sign-up" variant="primary" size="sm">
                            S'inscrire
                        </Button>
                    </div>
                </nav>

                {/* Menu mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className={`p-2 rounded-full transition-colors ${isMenuOpen ? 'bg-rouge-terre text-white' : 'bg-white/50 text-texte-secondaire hover:bg-white/80'}`}
                        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

            </div>

            {/* Menu mobile avec animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-5 rounded-2xl bg-white shadow-lg"
                        initial={{ opacity: 0, y: -20, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, y: -20, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <nav className="flex flex-col gap-4">
                            <Link 
                                href="/languages"
                                className="px-4 py-3 text-texte-principal font-medium rounded-xl hover:bg-vert-beninois/10 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Langues
                            </Link>
                            <Link 
                                href="/about"
                                className="px-4 py-3 text-texte-principal font-medium rounded-xl hover:bg-vert-beninois/10 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </Link>
                            <Link 
                                href="/contribute"
                                className="px-4 py-3 text-texte-principal font-medium rounded-xl hover:bg-vert-beninois/10 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contribuer
                            </Link>
                            
                            <hr className="border-gray-100 my-2" />
                            
                            <div className="flex flex-col gap-3 pt-2">
                                <Button 
                                    href="/auth/login" 
                                    variant="outline" 
                                    size="sm"
                                    className="w-full justify-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Connexion
                                </Button>
                                <Button 
                                    href="/auth/sign-up" 
                                    variant="primary" 
                                    size="sm"
                                    className="w-full justify-center"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    S'inscrire
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}