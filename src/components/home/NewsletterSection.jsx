"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Send } from 'lucide-react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim()
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Erreur lors de l\'inscription');
            }

            // Succès - d'abord afficher le message de succès
            setIsSubmitted(true);
            
            // Si il y a un avertissement, l'afficher dans la console pour le développeur
            if (data.warning) {
                console.log('⚠️ Avertissement newsletter:', data.warning);
            }
            
            // Vider les champs après un petit délai pour que l'utilisateur voie le changement
            setTimeout(() => {
                setEmail('');
                setName('');
            }, 100);
            
            // Réinitialiser le formulaire après 5 secondes pour permettre une nouvelle inscription
            setTimeout(() => {
                setIsSubmitted(false);
                // S'assurer que les champs sont bien vides au retour du formulaire
                setEmail('');
                setName('');
            }, 5000);

        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            // Affichage d'une alerte plus détaillée
            const errorMessage = error.message.includes('Format d\'email invalide') 
                ? 'Veuillez vérifier le format de votre adresse email.'
                : error.message.includes('sont requis')
                ? 'Veuillez remplir tous les champs obligatoires.'
                : 'Erreur lors de l\'inscription. Veuillez réessayer dans quelques instants.';
            
            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    // Animation variants
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

    const slideUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* En-tête de section */}
                <motion.div 
                    className="mb-16 max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <div className="inline-block mb-3 bg-green-100 text-vert-beninois px-4 py-1 rounded-full text-sm font-medium">
                        Restez connecté
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 tracking-tight">
                        Suivez l'évolution du <span className="text-vert-beninois">patrimoine linguistique</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Recevez les dernières actualités sur la préservation des langues béninoises, 
                        les nouvelles fonctionnalités et les événements communautaires.
                    </p>
                </motion.div>
                
                {/* Formulaire de newsletter */}
                <motion.div 
                    className="max-w-2xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    custom={0.3}
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 relative overflow-hidden">
                        {/* Décoration d'arrière-plan */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-vert-beninois/5 to-jaune-sable/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-jaune-sable/5 to-vert-beninois/5 rounded-full transform -translate-x-12 translate-y-12"></div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-3 bg-green-50 rounded-full mr-3">
                                    <Mail className="w-8 h-8 text-vert-beninois" />
                                </div>
                                <h3 className="text-2xl font-semibold text-slate-800">
                                    Newsletter Voix du Bénin
                                </h3>
                            </div>
                            
                            {isSubmitted ? (
                                <motion.div 
                                    className="text-center py-8"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="mb-4">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                                    </div>
                                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                                        Merci pour votre inscription !
                                    </h4>
                                    <p className="text-slate-600">
                                        Vous recevrez bientôt nos dernières actualités sur la préservation 
                                        des langues béninoises.
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.form 
                                    onSubmit={handleSubmit} 
                                    className="space-y-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    key="newsletter-form"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                                Nom complet
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-vert-beninois focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="Votre nom complet"
                                            />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                                Adresse email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                disabled={isLoading}
                                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-vert-beninois focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="votre.email@exemple.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <motion.button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-vert-beninois hover:bg-vert-beninois/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-vert-beninois focus:ring-offset-2 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Inscription en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                S'inscrire maintenant
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                            
                            <p className="text-sm text-slate-500 mt-6 text-center">
                                En vous inscrivant, vous acceptez de recevoir nos communications par email. 
                                Vous pouvez vous désabonner à tout moment.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}