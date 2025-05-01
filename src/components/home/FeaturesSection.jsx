"use client";

import { motion } from 'framer-motion';
import { Headphones, MicVocal, Languages, Share2 } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <MicVocal size={32} className="text-vert-beninois" />,
            title: "Contribuez facilement",
            description: "Enregistrez votre voix dans votre langue maternelle et partagez des expressions caractéristiques du Bénin."
        },
        {
            icon: <Headphones size={32} className="text-vert-beninois" />,
            title: "Écoutez et apprenez",
            description: "Découvrez les prononciations authentiques et la richesse des langues béninoises."
        },
        {
            icon: <Languages size={32} className="text-vert-beninois" />,
            title: "Explorez les langues",
            description: "Naviguez parmi plus de 50 langues et dialectes sur une carte interactive du Bénin."
        },
        {
            icon: <Share2 size={32} className="text-vert-beninois" />,
            title: "Partagez le patrimoine",
            description: "Aidez à préserver et promouvoir la diversité linguistique béninoise pour les générations futures."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block mb-2 text-sm font-medium px-3 py-1 rounded-full bg-vert-beninois/10 text-vert-beninois">
                        Fonctionnalités
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                        Une plateforme simple et intuitive
                    </h2>
                    <p className="text-texte-secondaire max-w-2xl mx-auto">
                        Découvrez, apprenez et contribuez à la préservation des langues du Bénin
                        en quelques clics seulement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="h-full p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all hover:scale-[1.02] hover:border-vert-beninois/30">
                                <div className="mb-5 p-3 inline-flex items-center justify-center rounded-xl bg-vert-beninois/10">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-texte-principal">
                                    {feature.title}
                                </h3>
                                <p className="text-texte-secondaire">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-20 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-vert-beninois rounded-3xl p-12 text-white relative z-10">
                        <div className="max-w-2xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Rejoignez notre communauté
                            </h3>
                            <p className="text-white/90 mb-6 text-lg">
                                Plus de <span className="font-bold">3 000 enregistrements audio</span> déjà collectés grâce à des contributeurs passionnés comme vous.
                            </p>
                            <a href="/contribute" className="inline-flex items-center justify-center gap-2 bg-white text-vert-beninois font-medium px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                                Contribuer maintenant
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Éléments décoratifs */}
                    <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-jaune-sable/30 blur-3xl z-0"></div>
                    <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-vert-beninois/20 blur-3xl z-0"></div>
                </motion.div>
            </div>
        </section>
    );
}