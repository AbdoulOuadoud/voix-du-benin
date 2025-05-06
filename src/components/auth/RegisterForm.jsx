"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';
import Input from '../ui/Input';

export default function RegisterForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
        allowResearch: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Validation basique
        if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }
        
        if (!formData.agreeTerms) {
            setError("Vous devez accepter les conditions d&apos;utilisation");
            return;
        }
        
        try {
            setIsSubmitting(true);
            
            // Simulation d&apos;un appel API pour l&apos;inscription
            // À remplacer par votre logique d&apos;authentification réelle
            const response = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        success: true,
                        message: "Inscription réussie"
                    });
                }, 1000);
            });
            
            if (response.success) {
                // Redirection vers la page de connexion ou tableau de bord
                router.push('/login?registered=true');
            } else {
                setError(response.message || "Erreur lors de l&apos;inscription");
            }
        } catch (err) {
            setError("Une erreur est survenue lors de l&apos;inscription");
            console.error("Erreur d&apos;inscription:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Rejoignez Voix du Bénin
            </h2>
            
            {error && (
                <div className="bg-rouge-terre/10 border border-rouge-terre/20 text-rouge-terre px-4 py-3 rounded-md mb-6">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Informations personnelles */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            Prénom
                        </label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Nom
                        </label>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Adresse email
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe
                        </label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmer le mot de passe
                        </label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="space-y-3 mt-6">
                    <div className="flex items-start">
                        <input
                            id="agreeTerms"
                            name="agreeTerms"
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                            className="mt-1 h-4 w-4 text-benin-green border-gray-300 rounded focus:ring-benin-green"
                        />
                        <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                            J'accepte les <Link href="/terms-of-service" className="text-benin-green hover:underline">conditions d&apos;utilisation</Link> et la <Link href="/privacy-policy" className="text-benin-green hover:underline">politique de confidentialité</Link>
                        </label>
                    </div>
                    
                    <div className="flex items-start">
                        <input
                            id="allowResearch"
                            name="allowResearch"
                            type="checkbox"
                            checked={formData.allowResearch}
                            onChange={handleChange}
                            className="mt-1 h-4 w-4 text-benin-green border-gray-300 rounded focus:ring-benin-green"
                        />
                        <label htmlFor="allowResearch" className="ml-2 block text-sm text-gray-700">
                            J'accepte que mes données anonymisées soient utilisées à des fins de recherche linguistique
                        </label>
                    </div>
                </div>

                <div className="flex justify-center pt-4">
                    <Button 
                        type="submit" 
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full max-w-md"
                    >
                        {isSubmitting ? 'Création du compte...' : 'Créer un compte'}
                    </Button>
                </div>
                
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Vous avez déjà un compte ? {' '}
                        <Link href="/login" className="text-benin-green hover:underline font-medium">
                            Connectez-vous
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}