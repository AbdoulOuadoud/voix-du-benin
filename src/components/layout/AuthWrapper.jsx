"use client";

import { useState, useEffect, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

// Création du contexte d'authentification
export const AuthContext = createContext({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    isAdmin: false,
    login: () => {},
    logout: () => {},
    updateUser: () => {}
});

// Hook personnalisé pour utiliser le contexte d'authentification
export const useAuth = () => useContext(AuthContext);

export default function AuthWrapper({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    
    // Vérifier si l'utilisateur est authentifié
    const isAuthenticated = !!user;
    
    // Vérifier si l'utilisateur est admin
    const isAdmin = user?.role === 'admin';
    
    // Vérifier si la page actuelle nécessite une authentification
    const requiresAuth = pathname.startsWith('/dashboard') || pathname.startsWith('/admin');
    
    // Vérifier si la page actuelle est réservée aux administrateurs
    const requiresAdmin = pathname.startsWith('/admin');
    
    // Charger les informations utilisateur au chargement
    useEffect(() => {
        const loadUser = async () => {
            try {
                // Simulation d'un appel API pour récupérer l'utilisateur
                // À remplacer par votre logique réelle d'authentification
                const storedUser = localStorage.getItem('user');
                
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Erreur lors du chargement de l\'utilisateur:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        loadUser();
    }, []);
    
    // Rediriger l'utilisateur si nécessaire
    useEffect(() => {
        if (!isLoading) {
            // Redirection si l'utilisateur n'est pas authentifié
            if (requiresAuth && !isAuthenticated) {
                router.replace('/auth/sign-in?returnUrl=' + encodeURIComponent(pathname));
            }
            
            // Redirection si l'utilisateur n'est pas administrateur
            if (requiresAdmin && !isAdmin) {
                router.replace('/dashboard');
            }
        }
    }, [isLoading, isAuthenticated, isAdmin, requiresAuth, requiresAdmin, pathname, router]);
    
    // Fonction de connexion
    const login = async (email, password) => {
        setIsLoading(true);
        
        try {
            // Simulation d'un appel API pour l'authentification
            // À remplacer par votre logique réelle d'authentification
            const mockUser = {
                id: '123',
                name: 'Utilisateur Test',
                email,
                role: email.includes('admin') ? 'admin' : 'user',
                avatar: 'https://i.pravatar.cc/150?u=' + email
            };
            
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            
            return { success: true };
        } catch (error) {
            console.error('Erreur de connexion:', error);
            return { success: false, error: 'Identifiants incorrects' };
        } finally {
            setIsLoading(false);
        }
    };
    
    // Fonction de déconnexion
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.replace('/');
    };
    
    // Fonction de mise à jour du profil utilisateur
    const updateUser = (updatedData) => {
        const updatedUser = { ...user, ...updatedData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };
    
    // Si la page est protégée et que les données sont en cours de chargement, afficher un loader
    if (isLoading && requiresAuth) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white">
                <div className="text-center">
                    <Loader2 size={40} className="animate-spin mx-auto text-benin-green mb-4" />
                    <p className="text-text-secondary">Chargement en cours...</p>
                </div>
            </div>
        );
    }
    
    // Fournir le contexte d'authentification à l'application
    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated,
                isAdmin,
                login,
                logout,
                updateUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}