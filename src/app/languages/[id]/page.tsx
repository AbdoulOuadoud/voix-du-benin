import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import LanguageDetail from '@/components/language/LanguageDetail';

// Define Props type for the page
interface LanguageDetailsPageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Définition de l'interface pour les langues
interface Language {
    id: string;
    name: string;
    speakersCount: number;
    region: string;
    coverImageUrl: string;
    description: string;
}

// Définition de l'interface pour les enregistrements
interface Recording {
    id: string;
    phrase: string;
    translation: string;
    phoneticTranscription: string;
    type: string;
    audioUrl: string;
    createdAt: string;
    plays: number;
}

// Données de démonstration pour les langues (à remplacer par de vraies données d'API)
const mockLanguages: Language[] = [
    {
        id: 'fon',
        name: 'Fon',
        speakersCount: 1700000,
        region: 'Centre et Sud du Bénin',
        coverImageUrl: '/languages/fon-cover.jpg',
        description: 'Le fon est une langue gbe parlée principalement au Bénin. C\'est la langue la plus parlée du pays et fait partie du patrimoine culturel béninois. Elle est particulièrement présente dans les régions du centre et du sud du Bénin.',
    },
    {
        id: 'yoruba',
        name: 'Yoruba',
        speakersCount: 450000,
        region: 'Sud-Est du Bénin',
        coverImageUrl: '/languages/yoruba-cover.jpg',
        description: 'Le yoruba est une langue parlée principalement au Nigeria et au Bénin. Au Bénin, elle est surtout présente dans les régions du sud-est. C\'est une langue riche avec une littérature orale importante.',
    },
    {
        id: 'dendi',
        name: 'Dendi',
        speakersCount: 320000,
        region: 'Nord du Bénin',
        coverImageUrl: '/languages/dendi-cover.jpg',
        description: 'Le dendi est une langue parlée dans le nord du Bénin. Elle est liée au songhaï et est influencée par les langues voisines comme le haoussa et le zarma.',
    },
    {
        id: 'bariba',
        name: 'Bariba',
        speakersCount: 590000,
        region: 'Nord-Est du Bénin',
        coverImageUrl: '/languages/bariba-cover.jpg',
        description: 'Le bariba (ou baatɔnum) est une langue parlée principalement dans le nord-est du Bénin. C\'est la langue des Baribas, l\'un des plus grands groupes ethniques du pays.',
    },
    {
        id: 'mina',
        name: 'Mina',
        speakersCount: 230000,
        region: 'Sud du Bénin',
        coverImageUrl: '/languages/mina-cover.jpg',
        description: 'Le mina est une langue gbe parlée dans le sud du Bénin et au Togo. Elle partage des similitudes avec l\'éwé et le gen.',
    },
    {
        id: 'goun',
        name: 'Goun',
        speakersCount: 280000,
        region: 'Sud-Est du Bénin',
        coverImageUrl: '/languages/goun-cover.jpg',
        description: 'Le goun est une langue gbe parlée dans le sud-est du Bénin. Elle est étroitement liée au fon et fait partie des langues importantes de la région de Porto-Novo.',
    }
];

// Données de démonstration pour les enregistrements
const mockRecordings: Record<string, Recording[]> = {
    'fon': [
        {
            id: 'fon-1',
            phrase: 'Azɔn é nyi',
            translation: 'Bonjour (Comment va le travail)',
            phoneticTranscription: 'Ah-zon eh nyee',
            type: 'phrase',
            audioUrl: '/audio/fon/azɔn-é-nyi.mp3',
            createdAt: '2025-03-15T10:30:00Z',
            plays: 245
        },
        {
            id: 'fon-2',
            phrase: 'A fɔ gbɛ',
            translation: 'Merci',
            phoneticTranscription: 'Ah foh gbeh',
            type: 'word',
            audioUrl: '/audio/fon/a-fɔ-gbɛ.mp3',
            createdAt: '2025-03-10T14:45:00Z',
            plays: 187
        },
        {
            id: 'fon-3',
            phrase: 'N wa dandan',
            translation: 'Au revoir',
            phoneticTranscription: 'N wah dahn-dahn',
            type: 'phrase',
            audioUrl: '/audio/fon/n-wa-dandan.mp3',
            createdAt: '2025-04-05T09:15:00Z',
            plays: 163
        }
    ],
    'yoruba': [
        {
            id: 'yoruba-1',
            phrase: 'Ẹ nlẹ',
            translation: 'Bonjour',
            phoneticTranscription: 'Eh n-leh',
            type: 'phrase',
            audioUrl: '/audio/yoruba/ẹ-nlẹ.mp3',
            createdAt: '2025-03-22T11:20:00Z',
            plays: 112
        },
        {
            id: 'yoruba-2',
            phrase: 'O dabo',
            translation: 'Au revoir',
            phoneticTranscription: 'Oh dah-boh',
            type: 'phrase',
            audioUrl: '/audio/yoruba/o-dabo.mp3',
            createdAt: '2025-02-28T16:30:00Z',
            plays: 98
        }
    ],
    'dendi': [
        {
            id: 'dendi-1',
            phrase: 'Mate ni?',
            translation: 'Comment ça va?',
            phoneticTranscription: 'Mah-teh nee',
            type: 'phrase',
            audioUrl: '/audio/dendi/mate-ni.mp3',
            createdAt: '2025-04-10T08:45:00Z',
            plays: 76
        }
    ],
    'bariba': [
        {
            id: 'bariba-1',
            phrase: 'A doobee',
            translation: 'Bonjour',
            phoneticTranscription: 'Ah doo-bee',
            type: 'phrase',
            audioUrl: '/audio/bariba/a-doobee.mp3',
            createdAt: '2025-03-05T12:15:00Z',
            plays: 62
        }
    ],
    'mina': [
        {
            id: 'mina-1',
            phrase: 'Afio',
            translation: 'Bienvenue',
            phoneticTranscription: 'Ah-fio',
            type: 'word',
            audioUrl: '/audio/mina/afio.mp3',
            createdAt: '2025-02-20T09:30:00Z',
            plays: 54
        }
    ],
    'goun': [
        {
            id: 'goun-1',
            phrase: 'A do wiwi',
            translation: 'Bonjour',
            phoneticTranscription: 'Ah do wee-wee',
            type: 'phrase',
            audioUrl: '/audio/goun/a-do-wiwi.mp3',
            createdAt: '2025-03-18T10:10:00Z',
            plays: 48
        }
    ]
};

// Fonction qui récupérerait les données de la langue spécifique
async function getLanguage(id: string): Promise<Language | undefined> {
    // Simuler un délai de chargement pour démontrer l'UI suspendue
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockLanguages.find(lang => lang.id === id);
}

// Fonction qui récupérerait les enregistrements pour une langue
async function getRecordings(id: string): Promise<Recording[]> {
    // Simuler un délai de chargement
    await new Promise(resolve => setTimeout(resolve, 1200));
    return mockRecordings[id] || [];
}

// Fonction pour générer les métadonnées dynamiques
export async function generateMetadata({ params }: LanguageDetailsPageProps) {
    const resolvedParams = await params;
    const language = await getLanguage(resolvedParams.id);
    
    if (!language) {
        return {
            title: 'Langue non trouvée | Voix du Bénin',
            description: 'La langue recherchée n\'existe pas dans notre base de données.',
        };
    }
    
    return {
        title: `${language.name} - Langue du Bénin | Voix du Bénin`,
        description: `Découvrez la langue ${language.name} parlée au Bénin. Écoutez des enregistrements, apprenez des expressions et contribuez à sa préservation.`,
    };
}

// Génération des paramètres statiques pour optimiser le rendu
export async function generateStaticParams() {
    // Dans une vraie application, ces IDs proviendraient d'une base de données
    return mockLanguages.map(language => ({
        id: language.id,
    }));
}

export default async function LanguageDetailsPage({ params }: LanguageDetailsPageProps) {
    // Await the params promise to get the actual parameters
    const resolvedParams = await params;
    
    // Récupérer les données de la langue et des enregistrements
    const language = await getLanguage(resolvedParams.id);
    
    // Si la langue n'existe pas, afficher une page 404
    if (!language) {
        notFound();
    }
    
    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            <Suspense fallback={<div className="text-center py-12">Chargement des détails de la langue...</div>}>
                <LanguageDetailContent id={resolvedParams.id} language={language} />
            </Suspense>
        </main>
    );
}

// Composant pour charger les détails de la langue de manière asynchrone
async function LanguageDetailContent({ id, language }: { id: string, language: Language }) {
    // Chargement des enregistrements
    const recordings = await getRecordings(id);
    
    return <LanguageDetail language={language} recordings={recordings} />;
}