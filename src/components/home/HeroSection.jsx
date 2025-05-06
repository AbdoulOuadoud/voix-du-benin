"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BeninMap from '../ui/BeninMap';
import { useState } from 'react';

export default function HeroSection() {
    const [selectedRegion, setSelectedRegion] = useState(null);
    
    // Liste des langues béninoises populaires pour les tags
    const popularLanguages = [
        { name: "Fon", slug: "fon" },
        { name: "Yoruba", slug: "yoruba" },
        { name: "Goun", slug: "goun" },
        { name: "Bariba", slug: "bariba" },
        { name: "Dendi", slug: "dendi" },
        { name: "Mina", slug: "mina" }
    ];

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
        // Possibilité d&apos;ajouter des actions supplémentaires lors du clic sur une région
    };

    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 pb-16 pt-32 overflow-hidden">
            {/* Décoration d&apos;arrière-plan */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-vert-beninois  rounded-full filter blur-[120px]" />
                <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-benin-yellow rounded-full filter blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Contenu textuel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
                            Préservons les langues du <span className="text-benin-green">Bénin</span> ensemble
                        </h1>

                        <p className="text-lg text-text-secondary mb-8 max-w-xl">
                            Une plateforme collaborative pour collecter, partager et valoriser 
                            le patrimoine linguistique béninois pour les générations futures.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button href="/languages" variant="primary" size="large">
                                Contribuer dès maintenant
                            </Button>
                            <Button href="/contribute" variant="outline" size="large">
                                Contribuer anonymement
                            </Button>
                        </div>
                        
                        {/* Liste des langues sous forme de tags avec bordure en dégradé des couleurs du Bénin */}
                        <motion.div
                            className="mb-8 relative rounded-xl p-[1px] overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            style={{
                                background: `linear-gradient(90deg, var(--vert-beninois), var(--jaune-sable), var(--rouge-terre), var(--vert-beninois))`,
                                backgroundSize: '300% 100%',
                                animation: 'gradientBorder 6s ease infinite'
                            }}
                        >
                            <style jsx global>{`
                                @keyframes gradientBorder {
                                    0% { background-position: 0% 50% }
                                    50% { background-position: 100% 50% }
                                    100% { background-position: 0% 50% }
                                }
                            `}</style>
                            
                            <div className="bg-white rounded-xl py-3 px-4">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3 className="text-sm font-medium text-texte-secondaire mr-1">
                                        Langues populaires :
                                    </h3>
                                    
                                    {popularLanguages.map((language) => (
                                        <Link 
                                            key={language.slug} 
                                            href={`/languages/${language.slug}`}
                                            className="px-3 py-1.5 bg-white rounded-full text-texte-principal text-xs font-medium border border-gray-100 hover:border-vert-beninois/30 hover:shadow-sm transition-all"
                                        >
                                            {language.name}
                                        </Link>
                                    ))}
                                    
                                    <Link 
                                        href="/languages" 
                                        className="px-3 py-1.5 bg-vert-beninois/5 rounded-full text-vert-beninois text-xs font-medium border border-vert-beninois/20 hover:bg-vert-beninois/10 hover:border-vert-beninois/30 transition-all flex items-center gap-1"
                                    >
                                        Voir toutes
                                        <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex items-center text-sm text-text-secondary">
                            <div className="flex items-center relative mr-4">
                                {[
                                    { color: 'bg-vert-beninois', icon: false, offset: '0' },
                                    { color: 'bg-jaune-sable', icon: true, offset: '-0.75rem' },
                                    { color: 'bg-rouge-terre', icon: false, offset: '-1.5rem' },
                                    { color: 'bg-vert-beninois/80', icon: true, offset: '-2.25rem' }
                                ].map((item, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center ${item.color} absolute transform transition-all duration-200 hover:scale-110 hover:z-10`}
                                        style={{ 
                                            boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.8)',
                                            left: item.offset,
                                            zIndex: 5 - i
                                        }}
                                    >
                                        {item.icon && <User size={15} className="text-white" />}
                                    </div>
                                ))}
                                <div className="w-9 h-9 rounded-full bg-white border-2 border-vert-beninois flex items-center justify-center text-xs font-semibold text-vert-beninois ml-12 transition-transform duration-200 hover:scale-110" style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
                                    +496
                                </div>
                            </div>
                            <span className="text-texte-secondaire">
                                <strong className="font-medium">500+</strong> contributeurs actifs
                            </span>
                        </div>
                    </motion.div>

                    {/* Carte SVG interactive du Bénin */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {/* Titre et description de la carte placés clairement au-dessus */}
                        <div className="relative z-20 mb-3">
                            <h3 className="font-semibold text-texte-principal">Carte linguistique du Bénin</h3>
                            <p className="text-xs text-texte-secondaire">Cliquez sur les régions pour découvrir leurs langues</p>
                        </div>
                        
                        <div className="relative">
                            {/* Vue desktop: Carte à gauche, infos à droite */}
                            <div className="hidden md:flex md:flex-row">
                                {/* Conteneur de la carte avec animation de déplacement */}
                                <motion.div 
                                    className="h-[450px]"
                                    animate={{ 
                                        width: selectedRegion ? 'calc(100% - 300px)' : '100%',
                                        marginRight: selectedRegion ? '20px' : '0'
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    {/* Drapeau du Bénin en arrière-plan flou */}
                                    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-10">
                                        <div className="absolute inset-0 flex">
                                            <div className="w-1/3 bg-vert-beninois" />
                                            <div className="w-1/3">
                                                <div className="h-1/2 bg-jaune-sable" />
                                                <div className="h-1/2 bg-rouge-terre" />
                                            </div>
                                            <div className="w-1/3 bg-vert-beninois" />
                                        </div>
                                        <div className="absolute inset-0 backdrop-blur-sm" />
                                    </div>
                                    <div 
                                        className="relative p-[2px] w-full h-full rounded-2xl overflow-hidden shadow-lg"
                                    >
                                        <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden py-8">
                                            <BeninMap 
                                                onRegionClick={handleRegionClick}
                                                highlightedRegion={selectedRegion?.id}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                                
                                {/* Informations sur la région sélectionnée - affichage à droite avec animation */}
                                {selectedRegion && (
                                    <motion.div
                                        className="w-[300px] bg-white rounded-lg p-5 relative"
                                        initial={{ opacity: 0, x: 50, width: 0 }}
                                        animate={{ opacity: 1, x: 0, width: 300 }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: 0.2, 
                                            ease: "easeOut",
                                            staggerChildren: 0.1
                                        }}
                                    >
                                        {/* Bouton fermer */}
                                        <motion.button
                                            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-texte-secondaire transition-colors"
                                            onClick={() => setSelectedRegion(null)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: 0.6 }}
                                            title="Fermer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </motion.button>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            <h4 className="text-lg font-medium text-texte-principal">Région: {selectedRegion.name}</h4>
                                            <p className="text-sm text-texte-secondaire mb-3">
                                                Principales langues parlées:
                                            </p>
                                        </motion.div>
                                        
                                        <motion.div
                                            className="flex flex-col gap-2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            {selectedRegion.languages.map((lang, i) => (
                                                <motion.span 
                                                    key={i}
                                                    className="px-3 py-1.5 bg-vert-beninois/5 rounded-full text-texte-principal text-xs font-medium border border-vert-beninois/20 flex items-center gap-1"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-vert-beninois"></span>
                                                    {lang}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        
                                        <motion.div
                                            className="mt-4"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.8 }}
                                        >
                                            <Link 
                                                href={`/languages?region=${selectedRegion.id}`}
                                                className="text-sm font-medium text-vert-beninois hover:underline inline-flex items-center gap-1"
                                            >
                                                Explorer les langues de cette région
                                                <ChevronRight size={16} />
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                            
                            {/* Vue mobile: Infos en superposition sur la carte */}
                            <div className="md:hidden relative">
                                {/* Carte en pleine largeur */}
                                <div className="h-[350px]">
                                    {/* Drapeau du Bénin en arrière-plan flou */}
                                    <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl opacity-10">
                                        <div className="absolute inset-0 flex">
                                            <div className="w-1/3 bg-vert-beninois" />
                                            <div className="w-1/3">
                                                <div className="h-1/2 bg-jaune-sable" />
                                                <div className="h-1/2 bg-rouge-terre" />
                                            </div>
                                            <div className="w-1/3 bg-vert-beninois" />
                                        </div>
                                        <div className="absolute inset-0 backdrop-blur-sm" />
                                    </div>
                                    <div 
                                        className="relative p-[2px] w-full h-full rounded-2xl overflow-hidden shadow-lg"
                                    >
                                        <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden">
                                            <BeninMap 
                                                onRegionClick={handleRegionClick}
                                                highlightedRegion={selectedRegion?.id}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Informations superposées sur la carte en version mobile */}
                                {selectedRegion && (
                                    <motion.div
                                        className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-6 z-10 overflow-y-auto"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Bouton fermer plus visible pour mobile */}
                                        <motion.button
                                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-texte-principal transition-colors"
                                            onClick={() => setSelectedRegion(null)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                            title="Fermer"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </motion.button>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            <h4 className="text-xl font-medium text-texte-principal mb-2">Région: {selectedRegion.name}</h4>
                                            <p className="text-sm text-texte-secondaire mb-4">
                                                Principales langues parlées:
                                            </p>
                                        </motion.div>
                                        
                                        <motion.div
                                            className="flex flex-wrap gap-2 mb-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        >
                                            {selectedRegion.languages.map((lang, i) => (
                                                <motion.span 
                                                    key={i}
                                                    className="px-3 py-2 bg-vert-beninois/5 rounded-full text-texte-principal text-sm font-medium border border-vert-beninois/20 flex items-center gap-1"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-vert-beninois"></span>
                                                    {lang}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: 0.8 }}
                                            className="text-center"
                                        >
                                            <Link 
                                                href={`/languages?region={selectedRegion.id}`}
                                                className="px-4 py-2 bg-vert-beninois text-white rounded-md inline-flex items-center justify-center gap-1 hover:bg-vert-beninois/90 transition-colors"
                                            >
                                                Explorer les langues de cette région
                                                <ChevronRight size={16} />
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


