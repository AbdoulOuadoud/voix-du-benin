"use client";

import { motion } from 'framer-motion';
import { Heart, Share2, Handshake, Code } from 'lucide-react';
import Button from '../ui/Button';

export default function SupportSection() {
    const supportOptions = [
        {
            icon: <Heart size={28} className="text-rouge-terre" />,
            title: "Faire un don",
            description: "Soutenez financièrement le développement et la maintenance de notre plateforme via Ko-fi, Patreon ou autre.",
            action: "Contribuer",
            link: "/donate"
        },
        {
            icon: <Share2 size={28} className="text-jaune-sable" />,
            title: "Partager la plateforme",
            description: "Aidez-nous à atteindre plus de locuteurs et contributeurs en parlant de Voix du Bénin autour de vous.",
            action: "Partager",
            link: "/share"
        },
        {
            icon: <Handshake size={28} className="text-vert-beninois" />,
            title: "Devenir partenaire",
            description: "Établissez un partenariat avec nous en tant qu&apos;institution, association ou établissement scolaire.",
            action: "Contacter",
            link: "/partner"
        },
        {
            icon: <Code size={28} className="text-vert-beninois" />,
            title: "Contribuer techniquement",
            description: "Mettez vos compétences en design, développement ou data science au service du projet.",
            action: "Rejoindre",
            link: "/tech-contribute"
        }
    ];

    return (
        <section id="support" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block mb-2 text-sm font-medium px-3 py-1 rounded-full bg-vert-beninois/10 text-vert-beninois">
                        Soutien
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                        Soutenez Voix du Bénin
                    </h2>
                    <p className="text-texte-secondaire max-w-2xl mx-auto">
                        Notre mission de préservation des langues béninoises a besoin de votre soutien. 
                        Plusieurs façons de nous aider sont possibles.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {supportOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:border-vert-beninois/30"
                        >
                            <div className="p-8">
                                <div className="flex items-start gap-5">
                                    <div className="p-3 rounded-xl bg-gray-50">
                                        {option.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2 text-texte-principal">
                                            {option.title}
                                        </h3>
                                        <p className="text-texte-secondaire mb-4">
                                            {option.description}
                                        </p>
                                        <a 
                                            href={option.link} 
                                            className="inline-flex items-center gap-1 font-medium text-vert-beninois hover:underline"
                                        >
                                            {option.action}
                                            <svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 16 16" 
                                                fill="none" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="translate-y-[1px]"
                                            >
                                                <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Button 
                        href="/support#formulaire" 
                        variant="primary" 
                        size="lg"
                        className="inline-flex items-center gap-2"
                    >
                        Nous soutenir
                        <Heart size={16} className="fill-white" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}