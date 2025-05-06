"use client";

import { motion } from 'framer-motion';
import { 
    Type, 
    Mic, 
    Globe, 
    BarChart3, 
    FileSpreadsheet, 
    Users,
    ArrowRight
} from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Type size={64} className="text-vert-beninois" />,
            badge: "Contribution",
            title: "Soumettre des phrases",
            description: "Contribuez en ajoutant des expressions et des phrases dans votre langue béninoise maternelle.",
            link: "/contribute/text",
            linkText: "Ajouter une phrase"
        },
        {
            icon: <Mic size={64} className="text-vert-beninois" />,
            badge: "Enregistrement",
            title: "Ajouter un audio",
            description: "Enregistrez votre voix pour partager la prononciation authentique des langues béninoises.",
            link: "/contribute/audio",
            linkText: "Enregistrer ma voix"
        },
        {
            icon: <Globe size={64} className="text-vert-beninois" />,
            badge: "Exploration",
            title: "Découvrir et écouter",
            description: "Explorez la richesse linguistique du Bénin et écoutez des enregistrements dans différentes langues.",
            link: "/explore",
            linkText: "Explorer les langues"
        },
        {
            icon: <BarChart3 size={64} className="text-vert-beninois" />,
            badge: "Statistiques",
            title: "Voir vos contributions",
            description: "Suivez l&apos;ensemble de vos contributions et leur impact sur la préservation des langues béninoises.",
            link: "/profile/contributions",
            linkText: "Voir mon profil"
        },
        {
            icon: <FileSpreadsheet size={64} className="text-vert-beninois" />,
            badge: "Suggestion",
            title: "Proposer une langue",
            description: "Aidez-nous à enrichir notre base de données en suggérant une langue ou un dialecte béninois.",
            link: "/languages/suggest",
            linkText: "Proposer une langue"
        },
        {
            icon: <Users size={64} className="text-vert-beninois" />,
            badge: "Participation",
            title: "Contribuer librement",
            description: "Participez anonymement ou créez un compte pour suivre vos contributions à travers le temps.",
            link: "/auth/register",
            linkText: "Créer un compte"
        }
    ];

    return (
        <section id="features" className="py-24 bg-gray-50">
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
                        Superchargez votre contribution
                    </h2>
                    <p className="text-texte-secondaire max-w-2xl mx-auto">
                        Découvrez, apprenez et contribuez à la préservation des langues du Bénin
                        en quelques clics seulement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="h-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <div className="flex items-center mb-6">
                                    <div className="flex-1 pr-6">
                                        {/* Badge en haut */}
                                        <span className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-vert-beninois text-white">
                                            {feature.badge}
                                        </span>
                                        
                                        {/* Titre principal */}
                                        <h3 className="text-2xl font-bold mb-3 text-texte-principal">
                                            {feature.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Icône plus grande alignée à droite */}
                                    <div className="relative">
                                        {/* Effet de dégradé moderne */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-transparent rounded-full"></div>
                                        {feature.icon}
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-texte-secondaire mb-6">
                                    {feature.description}
                                </p>
                                
                                {/* Lien avec flèche */}
                                <a href={feature.link} className="inline-flex items-center text-vert-beninois font-medium hover:underline group">
                                    {feature.linkText}
                                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                                </a>
                                
                                {/* Effet de dégradé moderne au bas de la carte */}
                                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-tl from-vert-beninois/10 via-vert-beninois/5 to-transparent rounded-full blur-xl"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    className="mt-24 relative overflow-hidden"
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