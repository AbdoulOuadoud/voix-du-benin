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

            {/* Carte montrant la répartition des langues (optionnelle) */}
            <div className="mb-12 bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold text-center mb-4">
                    Répartition géographique des langues
                </h2>
                <div className="h-64 md:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Ici, vous pourriez intégrer une carte interactive du Bénin */}
                    <p className="text-texte-secondaire">Carte de la répartition des langues au Bénin</p>
                </div>
            </div>

            {/* Liste des langues avec filtre et recherche */}
            <Suspense fallback={<div className="text-center py-12">Chargement des langues...</div>}>
                <LanguagesList languages={languages} />
            </Suspense>

            {/* Section d'information */}
            <div className="mt-16 bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    À propos des langues béninoises
                </h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-texte-secondaire mb-4">
                        Le Bénin est d&apos;une richesse linguistique exceptionnelle avec plus de 50 langues
                        parlées sur son territoire. Malgré le français comme langue officielle, les
                        langues nationales sont essentielles à la vie quotidienne et à l&apos;identité culturelle.
                    </p>
                    <p className="text-texte-secondaire mb-4">
                        Certaines de ces langues sont menacées et risquent de disparaître dans les prochaines
                        décennies. Notre mission est de documenter et préserver ce patrimoine linguistique
                        pour les générations futures.
                    </p>
                    <p className="text-texte-secondaire">
                        En contribuant avec votre voix, vous participez activement à la préservation
                        de ces trésors culturels immatériels.
                    </p>
                </div>
            </div>
        </main>
    );
}