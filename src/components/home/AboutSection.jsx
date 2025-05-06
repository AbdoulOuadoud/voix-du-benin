"use client";

import { motion } from 'framer-motion';
import { Mic, Globe, Users, BookOpen, ChevronRight } from 'lucide-react';

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

    const slideIn = {
        hidden: { opacity: 0, x: -30 },
        visible: (i = 0) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
            }
        })
    };

    return (
        <section id="mission" className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête de section */}
                <motion.div 
                    className="mb-16 max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="inline-block mb-3 bg-green-100 text-benin-green px-4 py-1 rounded-full text-sm font-medium">
                        Notre Mission
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 tracking-tight">
                        Préservation du <span className="text-benin-green">patrimoine linguistique</span> béninois
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Voix du Bénin préserve et valorise les langues de notre territoire, 
                        témoins de notre héritage culturel et vecteurs d&apos;identité pour l&apos;avenir.
                    </p>
                </motion.div>

                {/* Statistique clé */}
                <motion.div 
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={0.3}
                >
                    <div className="bg-white shadow-xl rounded-2xl py-6 px-8 max-w-md mx-auto border border-slate-100">
                        <span className="text-6xl font-bold text-benin-green">50+</span>
                        <p className="text-slate-700 text-lg mt-2">Langues béninoises à préserver et célébrer</p>
                        <div className="h-1 w-24 bg-gradient-to-r from-benin-yellow to-benin-green mx-auto mt-4 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Problématique et solution */}
                <motion.div 
                    className="mb-16 bg-white p-8 rounded-xl shadow-sm border border-slate-100"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={0.5}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-slate-800">Le défi actuel</h3>
                            <p className="text-slate-600">
                                Face à la mondialisation, de nombreuses langues béninoises sont menacées d&apos;extinction. 
                                Cette richesse culturelle unique risque de disparaître sans documentation adéquate.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-slate-800">Notre approche</h3>
                            <p className="text-slate-600">
                                Notre plateforme numérique permet de documenter et rendre accessibles ces 
                                trésors linguistiques pour les générations actuelles et futures.
                            </p>
                            <a href="#contact" className="inline-flex items-center text-benin-green hover:text-benin-yellow transition-colors font-medium">
                                Rejoignez notre initiative <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Caractéristiques */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            className="group"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideIn}
                            custom={index * 0.2}
                        >
                            <div className="bg-white p-8 rounded-xl shadow-md h-full flex flex-col hover:shadow-lg transform hover:-translate-y-1 transition-all overflow-hidden relative border-2 border-transparent hover:border-transparent" 
                                style={{
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box',
                                    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #008751, #FCD116, #CE1126)'
                                }}>
                                <div className="mb-5 p-3 bg-green-50 w-14 h-14 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold text-slate-800 mb-3 text-lg">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}