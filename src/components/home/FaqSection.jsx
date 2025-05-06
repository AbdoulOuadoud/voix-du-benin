"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "Comment puis-je contribuer au projet Voix du Bénin ?",
            answer: "Vous pouvez contribuer en enregistrant votre voix dans votre langue maternelle ou une langue que vous maîtrisez. Il suffit de visiter la page 'Contribuer', de sélectionner une langue, d&apos;enregistrer une phrase ou une expression, et de soumettre votre contribution. Vous pouvez contribuer anonymement ou créer un compte pour suivre vos contributions."
        },
        {
            question: "Quelles langues sont disponibles sur la plateforme ?",
            answer: "Notre plateforme vise à couvrir toutes les langues et dialectes parlés au Bénin, y compris le Fon, le Yoruba, le Bariba, le Dendi, le Mina et bien d&apos;autres. Si votre langue n&apos;est pas encore répertoriée, vous pouvez nous aider à l&apos;ajouter en la proposant via le formulaire de contribution."
        },
        {
            question: "Comment sont utilisés les enregistrements audio ?",
            answer: "Les enregistrements audio sont utilisés à des fins éducatives et de préservation culturelle. Ils sont mis à disposition gratuitement pour permettre aux personnes intéressées d&apos;apprendre les langues béninoises et de découvrir la richesse de notre patrimoine linguistique. Les données sont également utilisées pour la recherche linguistique et le développement d&apos;outils numériques adaptés aux langues africaines."
        },
        {
            question: "Puis-je utiliser les ressources de Voix du Bénin dans mon projet ?",
            answer: "Oui, les ressources sont disponibles sous licence Creative Commons (CC BY-NC-SA), ce qui signifie que vous pouvez les utiliser à des fins non commerciales en citant la source. Pour une utilisation commerciale ou des partenariats, veuillez nous contacter directement via la page 'Support'."
        },
        {
            question: "Comment puis-je signaler une erreur ou proposer une correction ?",
            answer: "Vous pouvez signaler une erreur ou proposer une correction en utilisant le bouton 'Signaler' présent sur chaque enregistrement audio ou en nous contactant directement via le formulaire de contact. Votre feedback est précieux pour améliorer la qualité de notre plateforme."
        }
    ];

    const toggleItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center mb-4">
                        <HelpCircle className="h-10 w-10 text-benin-green mr-3" />
                        <h2 className="text-4xl md:text-5xl font-bold text-benin-green">
                            Questions fréquentes
                        </h2>
                    </div>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        Vous avez des questions sur notre projet ? Consultez nos réponses aux questions les plus courantes.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {faqItems.map((item, index) => (
                        <motion.div 
                            key={index}
                            className="mb-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className={`flex justify-between items-center w-full text-left p-6 rounded-xl ${activeIndex === index ? 'bg-benin-green/5' : ''}`}
                            >
                                <h3 className={`text-lg font-semibold ${activeIndex === index ? 'text-benin-green' : 'text-text-primary'}`}>
                                    {item.question}
                                </h3>
                                <div 
                                    className={`flex items-center justify-center h-8 w-8 rounded-full bg-benin-green/10 transform transition-all duration-300 ${activeIndex === index ? 'rotate-180 bg-benin-green/20' : ''}`}
                                >
                                    <ChevronDown className={`h-5 w-5 ${activeIndex === index ? 'text-benin-green' : 'text-benin-green/80'}`} />
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ 
                                            height: 'auto', 
                                            opacity: 1,
                                            transition: {
                                                height: { duration: 0.3 },
                                                opacity: { duration: 0.3, delay: 0.1 }
                                            }
                                        }}
                                        exit={{ 
                                            height: 0, 
                                            opacity: 0,
                                            transition: {
                                                height: { duration: 0.3 },
                                                opacity: { duration: 0.2 }
                                            }
                                        }}
                                        className="overflow-hidden border-t border-gray-100"
                                    >
                                        <p className="text-text-secondary p-6 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}