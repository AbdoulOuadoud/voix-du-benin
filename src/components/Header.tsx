"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[var(--primary)]">
                        Voix du Bénin
                    </span>
                </Link>

                {/* Navigation desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/langues" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                        Langues
                    </Link>
                    <Link href="/a-propos" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                        À propos
                    </Link>
                    <Link href="/contribuer" className="text-gray-700 hover:text-[var(--primary)] transition-colors">
                        Contribuer
                    </Link>
                    <Button href="/inscription" variant="primary">
                        S&apos;inscrire
                    </Button>
                </nav>

                {/* Menu mobile */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-700"
                        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Menu mobile overlay */}
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-white z-40 p-6 pt-20 md:hidden flex flex-col items-center gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <Link
                        href="/langues"
                        className="text-xl font-medium text-gray-800 py-3"
                        onClick={toggleMenu}
                    >
                        Langues
                    </Link>
                    <Link
                        href="/a-propos"
                        className="text-xl font-medium text-gray-800 py-3"
                        onClick={toggleMenu}
                    >
                        À propos
                    </Link>
                    <Link
                        href="/contribuer"
                        className="text-xl font-medium text-gray-800 py-3"
                        onClick={toggleMenu}
                    >
                        Contribuer
                    </Link>
                    <Button
                        href="/inscription"
                        variant="primary"
                        className="mt-4 w-full"
                        onClick={toggleMenu}
                    >
                        S&apos;inscrire
                    </Button>
                </motion.div>
            )}
        </header>
    );
}