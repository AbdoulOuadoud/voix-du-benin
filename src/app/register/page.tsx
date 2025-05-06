import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
    title: 'Inscription | Voix du Bénin',
    description: 'Créez votre compte pour contribuer à la préservation des langues béninoises',
};

export default function RegisterPage() {
    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            <div className="max-w-3xl mx-auto mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                    Rejoignez la communauté Voix du Bénin
                </h1>
                <p className="text-texte-secondaire text-lg">
                    Créez votre compte pour contribuer à la préservation et valorisation
                    des langues béninoises.
                </p>
            </div>
            
            <RegisterForm />
        </main>
    );
}