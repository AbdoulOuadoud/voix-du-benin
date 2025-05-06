"use client";

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Mic, Globe } from 'lucide-react';

export default function CtaSection() {
    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                {/* Conteneur principal avec position relative pour que les éléments absolus se positionnent par rapport à lui */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                    {/* Gradient de fond - z-index 1 pour être au-dessus du fond mais sous le contenu */}
                    <div 
                        className="absolute inset-0 z-[1]" 
                        style={{
                            background: `linear-gradient(to top right, var(--vert-beninois), var(--vert-beninois), rgba(0, 120, 71, 0.9))`
                        }}
                    ></div>
                    
                    {/* Formes décoratives - z-index 2 pour être au-dessus du gradient mais sous le contenu */}
                    <div 
                        className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/2 translate-x-1/3 z-[2]" 
                        style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}
                    ></div>
                    <div 
                        className="absolute bottom-0 left-0 w-80 h-80 rounded-full translate-y-1/2 -translate-x-1/3 z-[2]" 
                        style={{ backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                    ></div>
                    <div 
                        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full z-[2]" 
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    ></div>
                    <div 
                        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full z-[2]" 
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    ></div>
                    
                    {/* Contenu principal - z-index 10 pour être au-dessus de tous les éléments décoratifs */}
                    <div className="relative z-[10] p-8 md:p-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <motion.span 
                                    className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-white/20 text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Contribuez dès maintenant
                                </motion.span>
                                
                                <motion.h2 
                                    className="text-3xl md:text-4xl font-bold mb-6 text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                >
                                    Participez à la préservation des langues du Bénin
                                </motion.h2>
                                
                                <motion.p 
                                    className="mb-8 text-lg text-white/90"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    Chaque contribution compte. Enregistrez votre voix dans votre langue maternelle 
                                    ou celle que vous maîtrisez et contribuez à ce trésor linguistique national.
                                </motion.p>
                                
                                <motion.div 
                                    className="flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <Button 
                                        href="/contribute" 
                                        variant="secondary"
                                        className="bg-jaune-sable hover:bg-jaune-sable/90 text-texte-principal flex items-center gap-2"
                                    >
                                        <Mic size={18} />
                                        Faire un enregistrement
                                    </Button>
                                    
                                    <Button 
                                        href="/languages" 
                                        className="bg-transparent text-white hover:bg-white/10 border-2 border-white flex items-center gap-2 transition-all duration-300"
                                    >
                                        <Globe size={18} className="text-white" />
                                        Explorer les langues
                                    </Button>
                                </motion.div>
                            </div>
                            
                            <motion.div 
                                className="hidden md:block"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <div className="relative">
                                    {/* Illustration d&apos;une carte du Bénin stylisée avec des ondes sonores */}
                                    <div className="aspect-square max-w-md mx-auto rounded-3xl p-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}>
                                        <div className="h-full rounded-2xl border-2 border-white/30 flex items-center justify-center">
                                            <svg width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
                                                <path d="M82.5 20C90.5 15 100 18 105 23C107 25 113.5 35 114.5 36.5C115.5 38 120 45 121.5 47.5C123 50 123 55.5 123.5 59C124 62.5 128 73.5 133.5 77C139 80.5 152.5 84 156 85C159.5 86 164.5 87.5 166 91C167.5 94.5 167.5 100.5 168 103.5C168.5 106.5 169.5 115.5 166 119.5C162.5 123.5 158 125 152.5 126C147 127 127.5 129.5 122 131C116.5 132.5 109.5 136.5 108.5 139.5C107.5 142.5 105 151 103 155.5C101 160 93 170 88 174C83 178 70.5 180 65 180.5C59.5 181 50.5 179 46.5 176C42.5 173 37.5 166 35.5 162C33.5 158 27 144 25 138C23 132 19 123.5 18 120.5C17 117.5 15 103 14.5 99C14 95 14 88.5 13.5 84.5C13 80.5 14.5 65 15 61.5C15.5 58 19 49 21 45C23 41 30.5 29 33.5 25C36.5 21 42 17.5 45 16C48 14.5 56.5 14 60.5 14C64.5 14 74.5 25 82.5 20Z" fill="#FFFFFF" fillOpacity="0.4"/>
                                            </svg>
                                            
                                            {/* Ondes sonores animées */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="w-24 h-24">
                                                    <div className="absolute w-full h-full border-2 border-white/30 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
                                                    <div className="absolute w-full h-full border-2 border-white/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
                                                    <div className="absolute w-full h-full border-2 border-white/10 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}