"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    Languages, 
    Mic, 
    Users, 
    FileDown, 
    Settings,
    ChevronRight,
    LogOut,
    Menu,
    X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AdminSidebar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navItems = [
        {
            name: 'Tableau de bord',
            href: '/admin',
            icon: <LayoutDashboard size={20} />
        },
        {
            name: 'Langues',
            href: '/admin/languages',
            icon: <Languages size={20} />
        },
        {
            name: 'Contributions',
            href: '/admin/contributions',
            icon: <Mic size={20} />
        },
        {
            name: 'Utilisateurs',
            href: '/admin/users',
            icon: <Users size={20} />
        },
        {
            name: 'Exports',
            href: '/admin/exports',
            icon: <FileDown size={20} />
        },
        {
            name: 'Paramètres',
            href: '/admin/settings',
            icon: <Settings size={20} />
        },
    ];
    
    // Vérifier si un lien est actif
    const isActive = (href) => {
        if (href === '/admin') {
            return pathname === '/admin';
        }
        return pathname.startsWith(href);
    };
    
    // Ouvrir/fermer le menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <>
            {/* Bouton de menu mobile */}
            <div className="md:hidden fixed top-4 left-4 z-30">
                <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg bg-white shadow-md text-text-primary"
                    aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            
            {/* Sidebar pour desktop */}
            <div className="hidden md:flex flex-col h-screen w-64 bg-white border-r border-gray-200 fixed left-0 top-0">
                <div className="p-6 border-b border-gray-100">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold text-benin-green">
                            Voix du Bénin
                        </span>
                    </Link>
                    <div className="mt-2 text-sm text-text-secondary">
                        Panneau d'administration
                    </div>
                </div>
                
                <nav className="flex-grow p-4 overflow-y-auto">
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                        isActive(item.href)
                                            ? 'bg-benin-green text-white'
                                            : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                                    }`}
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                    {isActive(item.href) && (
                                        <ChevronRight size={16} className="ml-auto" />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                <div className="p-4 border-t border-gray-100">
                    <Link 
                        href="/auth/sign-out" 
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Déconnexion</span>
                    </Link>
                </div>
            </div>
            
            {/* Sidebar pour mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed top-0 left-0 h-screen w-[280px] bg-white shadow-2xl z-20 md:hidden"
                    >
                        <div className="p-6 border-b border-gray-100">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="text-xl font-bold text-benin-green">
                                    Voix du Bénin
                                </span>
                            </Link>
                            <div className="mt-2 text-sm text-text-secondary">
                                Panneau d'administration
                            </div>
                        </div>
                        
                        <nav className="p-4">
                            <ul className="space-y-1">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link 
                                            href={item.href}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                                isActive(item.href)
                                                    ? 'bg-benin-green text-white'
                                                    : 'text-text-secondary hover:bg-gray-50 hover:text-text-primary'
                                            }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.icon}
                                            <span>{item.name}</span>
                                            {isActive(item.href) && (
                                                <ChevronRight size={16} className="ml-auto" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
                            <Link 
                                href="/auth/sign-out" 
                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-gray-50 hover:text-text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <LogOut size={20} />
                                <span>Déconnexion</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Overlay pour masquer le contenu en arrière-plan sur mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black z-10 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}