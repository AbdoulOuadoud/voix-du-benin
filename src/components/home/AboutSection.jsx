"use client";

import { motion } from 'framer-motion';
import { Mic, Globe, Users, BookOpen } from 'lucide-react';

export default function AboutSection() {
    const features = [
        {
            icon: <Mic className="w-6 h-6 text-benin-green" />,
            title: 'Enregistrements audio',
            description: 'Collectez et partagez des enregistrements authentiques des langues béninoises'
        },
        {
            icon: <Globe className="w-6 h-6 text-benin-green" />,
            title: 'Cartographie linguistique',
            description: 'Visualisez la diversité linguistique sur une carte interactive du Bénin'
        },
        {
            icon: <Users className="w-6 h-6 text-benin-green" />,
            title: 'Plateforme collaborative',
            description: 'Contribuez et enrichissez la base de données collective'
        },
        {
            icon: <BookOpen className="w-6 h-6 text-benin-green" />,
            title: 'Documentation culturelle',
            description: 'Préservez les langues et leur contexte culturel pour les générations futures'
        }
    ];

    // Animation variants for consistent animations
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
            }
        })
    };

    return (
        <section id="about" className="py-28 bg-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div 
                    className="mb-16 max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 tracking-tight">
                        Notre mission pour le <span className="text-benin-green">patrimoine linguistique</span> béninois
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Voix du Bénin préserve et valorise les langues de notre territoire, 
                        témoins de notre héritage culturel et vecteurs d'identité pour l'avenir.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    {/* Image avec style moderne */}
                    <motion.div 
                        className="lg:col-span-2 relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        custom={0.5}
                    >
                        <div className="absolute inset-0 bg-gradient-radial from-benin-yellow via-benin-green to-blue-600 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('/beninLow.svg')] bg-center bg-no-repeat bg-contain opacity-20 mix-blend-overlay"></div>
                            <div className="relative z-10 bg-white/15 backdrop-blur-sm rounded-xl p-6 m-5 border-2 border-white/30 shadow-inner before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-benin-yellow/30 before:to-benin-green/30 before:rounded-xl before:z-[-1]">
                                <p className="text-slate-800 text-2xl font-medium leading-relaxed text-center drop-shadow-md bg-white/80 py-2 px-3 rounded-lg">
                                    Plus de <span className="font-bold text-3xl relative inline-block">
                                        <span className="absolute -inset-1 blur-sm bg-yellow-300 rounded-full opacity-70"></span>
                                        <span className="relative text-benin-green">50</span>
                                    </span> <span className="text-slate-800">langues à préserver et célébrer</span>
                                </p>
                                <div className="w-24 h-1 bg-gradient-to-r from-benin-yellow to-benin-green mx-auto mt-4 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Texte et caractéristiques */}
                    <div className="lg:col-span-3 space-y-8">
                        <motion.p 
                            className="text-slate-600 text-lg leading-relaxed"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            custom={0.7}
                        >
                            Face à la mondialisation, de nombreuses langues béninoises sont menacées. 
                            Notre plateforme numérique permet de documenter et rendre accessibles ces 
                            trésors linguistiques pour les générations actuelles et futures.
                        </motion.p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    custom={0.9 + index * 0.1}
                                >
                                    <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                                    <p className="text-slate-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}