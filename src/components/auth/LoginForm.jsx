"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { CheckCircle } from 'lucide-react';

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    
    // Détecter si l&apos;utilisateur vient de s&apos;inscrire
    useEffect(() => {
        const registered = searchParams?.get('registered');
        if (registered === 'true') {
            setShowSuccessMessage(true);
            // Masquer le message après 5 secondes
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            setIsSubmitting(true);
            
            // Simulation d&apos;un appel API pour la connexion
            // À remplacer par votre logique d&apos;authentification réelle
            const response = await new Promise(resolve => {
                setTimeout(() => {
                    // Simuler une connexion réussie
                    if (formData.email && formData.password) {
                        resolve({
                            success: true,
                            user: {
                                id: '123',
                                name: 'Utilisateur Test',
                                email: formData.email
                            }
                        });
                    } else {
                        resolve({
                            success: false,
                            message: "Email ou mot de passe incorrect"
                        });
                    }
                }, 1000);
            });
            
            if (response.success) {
                // Redirection vers le tableau de bord ou la page d&apos;accueil
                router.push('/dashboard');
            } else {
                setError(response.message || "Erreur lors de la connexion");
            }
        } catch (err) {
            setError("Une erreur est survenue lors de la connexion");
            console.error("Erreur de connexion:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Connexion à Voix du Bénin
            </h2>
            
            {showSuccessMessage && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>Inscription réussie ! Vous pouvez maintenant vous connecter.</span>
                </div>
            )}
            
            {error && (
                <div className="bg-rouge-terre/10 border border-rouge-terre/20 text-rouge-terre px-4 py-3 rounded-md mb-6">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
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
                
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <Link href="/forgot-password" className="text-sm text-benin-green hover:underline">
                            Mot de passe oublié ?
                        </Link>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="flex items-center">
                    <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="h-4 w-4 text-benin-green border-gray-300 rounded focus:ring-benin-green"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                        Se souvenir de moi
                    </label>
                </div>
                
                <div className="flex justify-center pt-4">
                    <Button 
                        type="submit" 
                        variant="primary"
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? 'Connexion...' : 'Se connecter'}
                    </Button>
                </div>
                
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Pas encore de compte ? {' '}
                        <Link href="/register" className="text-benin-green hover:underline font-medium">
                            Inscrivez-vous
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}