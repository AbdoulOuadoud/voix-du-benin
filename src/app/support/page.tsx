"use client";

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            {/* Hero Section */}
            <div className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-texte-principal">
                                Votre soutien fait la différence
                            </h2>
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-vert-beninois text-white rounded-lg hover:bg-vert-beninois/90 transition-colors flex-shrink-0"
                            >
                                <ArrowLeft size={16} />
                                Retour à l&lsquo;accueil
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>


            {/* Main Content */}
            <div className="container mx-auto px-6 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Formulaire Google Forms */}
                    <div id="formulaire" className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                        <div className="p-8 border-b border-gray-200 text-center">
                            <h3 className="text-2xl font-bold text-texte-principal mb-2">
                                Formulaire de soutien
                            </h3>
                            <p className="text-texte-secondaire">
                                Remplissez ce formulaire pour nous faire part de votre soutien et découvrir comment vous pouvez contribuer
                            </p>
                        </div>
                        
                        <div className="flex justify-center p-4">
                            <iframe 
                                src="https://docs.google.com/forms/d/e/1FAIpQLSfiGtnd6NB8H4H5MNDZOIcokwurZn8C1qqqlc7inIhQ3EbTzg/viewform?embedded=true" 
                                width="640" 
                                height="774" 
                                frameBorder="0" 
                                marginHeight={0} 
                                marginWidth={0}
                                className="w-full max-w-full rounded-lg"
                                title="Formulaire de soutien Voix du Bénin"
                            >
                                Chargement…
                            </iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}