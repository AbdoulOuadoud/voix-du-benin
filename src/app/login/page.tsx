import LoginForm from '@/components/auth/LoginForm';
import { Suspense } from 'react';

export const metadata = {
    title: 'Connexion | Voix du Bénin',
    description: 'Connectez-vous à votre compte Voix du Bénin pour accéder à vos contributions',
};

export default function LoginPage() {
    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            <div className="max-w-3xl mx-auto mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                    Connexion à votre compte
                </h1>
                <p className="text-texte-secondaire text-lg">
                    Accédez à vos contributions et continuez à préserver 
                    le patrimoine linguistique béninois.
                </p>
            </div>
            
            <Suspense fallback={<div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-lg">Chargement...</div>}>
                <LoginForm />
            </Suspense>
        </main>
    );
}