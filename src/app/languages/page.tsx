import { Suspense } from 'react';
import LanguagesList from '@/components/language/LanguagesList';

// Données de démonstration pour les langues (à remplacer par de vraies données d'API)
const mockLanguages = [
    {
        id: 'fon',
        name: 'Fon',
        speakersCount: 1700000,
        recordingsCount: 127,
        region: 'Centre et Sud du Bénin',
        colorAccent: 'bg-vert-beninois ',
    },
    {
        id: 'yoruba',
        name: 'Yoruba',
        speakersCount: 450000,
        recordingsCount: 84,
        region: 'Sud-Est du Bénin',
        colorAccent: 'bg-benin-yellow',
    },
    {
        id: 'dendi',
        name: 'Dendi',
        speakersCount: 320000,
        recordingsCount: 53,
        region: 'Nord du Bénin',
        colorAccent: 'bg-benin-red',
    },
    {
        id: 'bariba',
        name: 'Bariba',
        speakersCount: 590000,
        recordingsCount: 68,
        region: 'Nord-Est du Bénin',
        status: 'endangered',
        colorAccent: 'bg-purple-600',
    },
    {
        id: 'mina',
        name: 'Mina',
        speakersCount: 230000,
        recordingsCount: 42,
        region: 'Sud du Bénin',
        colorAccent: 'bg-blue-500',
    },
    {
        id: 'goun',
        name: 'Goun',
        speakersCount: 280000,
        recordingsCount: 36,
        region: 'Sud-Est du Bénin',
        colorAccent: 'bg-green-600',
    }
];

// Fonction qui récupérerait les données de l'API
async function getLanguages() {
    // Simuler un délai de chargement pour démontrer l'UI suspendue
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockLanguages;
}

export const metadata = {
    title: 'Langues du Bénin | Voix du Bénin',
    description: 'Explorez la richesse linguistique du Bénin à travers notre catalogue de langues locales et contribuez à leur préservation.',
};

export default async function LanguagesPage() {
    // Dans une vraie application, ceci serait un appel API
    const languages = await getLanguages();

    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            <div className="max-w-3xl mx-auto mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                    Les langues du Bénin
                </h1>
                <p className="text-texte-secondaire text-lg">
                    Découvrez la richesse linguistique du Bénin. Explorez notre catalogue de langues,
                    écoutez des enregistrements et contribuez à préserver ce patrimoine culturel unique.
                </p>
            </div>

            {/* Cartes de statistiques détaillées */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-vert-beninois">
                    <div className="text-3xl font-bold text-vert-beninois mb-2">
                        {languages.length}
                    </div>
                    <div className="text-texte-secondaire text-sm">
                        Langues documentées
                    </div>
                    <div className="text-xs text-texte-secondaire mt-1">
                        Sur 50+ langues parlées
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-jaune-sable">
                    <div className="text-3xl font-bold text-jaune-sable mb-2">
                        {languages.reduce((total, lang) => total + lang.recordingsCount, 0)}
                    </div>
                    <div className="text-texte-secondaire text-sm">
                        Enregistrements
                    </div>
                    <div className="text-xs text-texte-secondaire mt-1">
                        Audio disponibles
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-rouge-terre">
                    <div className="text-3xl font-bold text-rouge-terre mb-2">
                        {languages.reduce((total, lang) => total + (lang.speakersCount || 0), 0).toLocaleString()}
                    </div>
                    <div className="text-texte-secondaire text-sm">
                        Locuteurs estimés
                    </div>
                    <div className="text-xs text-texte-secondaire mt-1">
                        Toutes langues confondues
                    </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-purple-600">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                        {languages.filter(lang => lang.status === 'endangered').length}
                    </div>
                    <div className="text-texte-secondaire text-sm">
                        Langues menacées
                    </div>
                    <div className="text-xs text-texte-secondaire mt-1">
                        Nécessitent une préservation urgente
                    </div>
                </div>
            </div>


            {/* Liste des langues */}
            <Suspense fallback={
                <div className="text-center py-8">
                    <div className="animate-spin w-8 h-8 border-4 border-vert-beninois border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-texte-secondaire">Chargement des langues...</p>
                </div>
            }>
                <LanguagesList languages={languages} />
            </Suspense>
        </main>
    );
}