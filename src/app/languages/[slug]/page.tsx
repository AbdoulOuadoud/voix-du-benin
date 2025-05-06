import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import LanguageDetail from '@/components/language/LanguageDetail';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

// Définitions des interfaces
interface Language {
    id: string;
    name: string;
    speakersCount: number;
    region: string;
    coverImageUrl: string;
    description: string;
}

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

type LanguagesRecord = {
    [key: string]: Language;
}

type RecordingsRecord = {
    [key: string]: Recording[];
}

interface PageParams {
    params: {
        slug: string;
    };
}

// Données de démonstration pour les langues (à remplacer par de vraies données d'API)
const mockLanguages: LanguagesRecord = {
    'fon': {
        id: 'fon',
        name: 'Fon',
        speakersCount: 1700000,
        region: 'Centre et Sud du Bénin',
        coverImageUrl: '/languages/fon-cover.jpg',
        description: 'Le Fon est une langue béninoise de la famille des langues gbe parlée principalement dans le sud du Bénin. C\'est l\'une des langues nationales les plus parlées du pays, notamment dans les départements du Zou, de l\'Atlantique et du Littoral. Il est étroitement lié à d\'autres langues comme le Goun et le Mahi.'
    },
    'yoruba': {
        id: 'yoruba',
        name: 'Yoruba',
        speakersCount: 450000,
        region: 'Sud-Est du Bénin',
        coverImageUrl: '/languages/yoruba-cover.jpg',
        description: 'Le Yoruba est une langue nigéro-congolaise parlée principalement dans le sud-est du Bénin, ainsi qu\'au Nigeria et au Togo. Au Bénin, il est surtout présent dans les départements de l\'Ouémé et du Plateau. C\'est une langue tonale avec une riche tradition orale et littéraire.'
    },
    'dendi': {
        id: 'dendi',
        name: 'Dendi',
        speakersCount: 320000,
        region: 'Nord du Bénin',
        coverImageUrl: '/languages/dendi-cover.jpg',
        description: 'Le Dendi est une langue songhaï parlée dans le nord du Bénin, principalement dans la région de Djougou et le long du fleuve Niger. C\'est une langue importante pour le commerce transfrontalier avec le Niger et le Nigeria.'
    },
    'bariba': {
        id: 'bariba',
        name: 'Bariba',
        speakersCount: 590000,
        region: 'Nord-Est du Bénin',
        coverImageUrl: '/languages/bariba-cover.jpg',
        description: 'Le Bariba (ou Batonu) est une langue gur parlée par les Baribas dans le nord-est du Bénin, principalement dans les départements de l\'Alibori et du Borgou. C\'est la langue principale des Baatombu, l\'un des plus grands groupes ethniques du nord du Bénin.'
    },
    'mina': {
        id: 'mina',
        name: 'Mina',
        speakersCount: 230000,
        region: 'Sud du Bénin',
        coverImageUrl: '/languages/mina-cover.jpg',
        description: 'Le Mina (ou Gen) est une langue de la famille des langues gbe parlée principalement dans la région côtière du Bénin et du Togo. Au Bénin, on le trouve surtout dans le département du Mono. C\'est une langue importante pour le commerce dans la région.'
    },
    'goun': {
        id: 'goun',
        name: 'Goun',
        speakersCount: 280000,
        region: 'Sud-Est du Bénin',
        coverImageUrl: '/languages/goun-cover.jpg',
        description: 'Le Goun (ou Gun) est une langue gbe parlée dans le sud-est du Bénin, principalement dans la région de Porto-Novo. Étroitement lié au Fon, il est parlé par le peuple Goun et joue un rôle important dans la vie culturelle et traditionnelle de la capitale.'
    }
};

// Exemples d'enregistrements pour démonstration
const mockRecordings: RecordingsRecord = {
    'fon': [
        {
            id: 'rec1',
            phrase: 'Akwaba',
            translation: 'Bienvenue',
            phoneticTranscription: 'a-kwa-ba',
            type: 'word',
            audioUrl: '/audio/fon/akwaba.mp3',
            createdAt: '2025-04-15T10:30:00Z',
            plays: 245
        },
        {
            id: 'rec2',
            phrase: 'E ku se',
            translation: 'Merci pour votre travail',
            phoneticTranscription: 'e-ku-se',
            type: 'phrase',
            audioUrl: '/audio/fon/ekuse.mp3',
            createdAt: '2025-04-10T14:20:00Z',
            plays: 189
        },
        {
            id: 'rec3',
            phrase: 'Fié dé gbé achi',
            translation: 'Comment allez-vous aujourd\'hui?',
            phoneticTranscription: 'fi-é dé gbé a-chi',
            type: 'phrase',
            audioUrl: '/audio/fon/fiedegbeachi.mp3',
            createdAt: '2025-04-02T09:15:00Z',
            plays: 312
        }
    ],
    'yoruba': [
        {
            id: 'rec4',
            phrase: 'Báwo ni',
            translation: 'Bonjour/Comment ça va',
            phoneticTranscription: 'bá-wo ni',
            type: 'phrase',
            audioUrl: '/audio/yoruba/bawoni.mp3',
            createdAt: '2025-04-12T11:30:00Z',
            plays: 178
        },
        {
            id: 'rec5',
            phrase: 'O dabo',
            translation: 'Au revoir',
            phoneticTranscription: 'o-da-bo',
            type: 'phrase',
            audioUrl: '/audio/yoruba/odabo.mp3',
            createdAt: '2025-04-08T16:45:00Z',
            plays: 203
        }
    ],
    'dendi': [
        {
            id: 'rec6',
            phrase: 'Fofo',
            translation: 'Bonjour',
            phoneticTranscription: 'fo-fo',
            type: 'word',
            audioUrl: '/audio/dendi/fofo.mp3',
            createdAt: '2025-04-14T08:20:00Z',
            plays: 142
        }
    ],
    'bariba': [
        {
            id: 'rec7',
            phrase: 'Doo yeru',
            translation: 'Bienvenue',
            phoneticTranscription: 'doo ye-ru',
            type: 'phrase',
            audioUrl: '/audio/bariba/dooyeru.mp3',
            createdAt: '2025-04-05T13:10:00Z',
            plays: 97
        }
    ],
    'mina': [
        {
            id: 'rec8',
            phrase: 'Efo',
            translation: 'Bonjour',
            phoneticTranscription: 'e-fo',
            type: 'word',
            audioUrl: '/audio/mina/efo.mp3',
            createdAt: '2025-04-09T10:05:00Z',
            plays: 124
        }
    ],
    'goun': [
        {
            id: 'rec9',
            phrase: 'Adayi',
            translation: 'Merci',
            phoneticTranscription: 'a-da-yi',
            type: 'word',
            audioUrl: '/audio/goun/adayi.mp3',
            createdAt: '2025-04-11T09:30:00Z',
            plays: 156
        }
    ]
};

// Fonction qui récupérerait les données d'une langue spécifique de l'API
async function getLanguage(slug: string): Promise<Language | undefined> {
    // Simuler un délai de chargement pour démontrer l'UI suspendue
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockLanguages[slug];
}

// Fonction qui récupérerait les enregistrements pour une langue spécifique
async function getRecordings(slug: string): Promise<Recording[]> {
    // Simuler un délai de chargement pour démontrer l'UI suspendue
    await new Promise(resolve => setTimeout(resolve, 1500));
    return mockRecordings[slug] || [];
}

export async function generateMetadata({ params }: PageParams) {
    const { slug } = params;
    const language = mockLanguages[slug];

    if (!language) {
        return {
            title: 'Langue non trouvée | Voix du Bénin',
            description: 'Cette langue n\'est pas disponible dans notre base de données.'
        };
    }

    return {
        title: `${language.name} | Langues du Bénin | Voix du Bénin`,
        description: `Découvrez la langue ${language.name} parlée au Bénin. Écoutez des enregistrements et contribuez à sa préservation.`
    };
}

export default async function LanguageDetailPage({ params }: PageParams) {
    const { slug } = params;

    // Dans une vraie application, ceci serait un appel API
    const language = await getLanguage(slug);

    // Si la langue n'existe pas, on renvoie une 404
    if (!language) {
        notFound();
    }

    // Récupération des enregistrements
    const recordings = await getRecordings(slug);

    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            {/* Lien de navigation retour */}
            <div className="mb-8">
                <Link
                    href="/languages"
                    className="inline-flex items-center text-benin-green hover:underline transition-all"
                >
                    <ChevronLeft size={20} className="mr-1" />
                    Retour à la liste des langues
                </Link>
            </div>

            {/* Détails de la langue */}
            <Suspense fallback={<div className="text-center py-12">Chargement des informations...</div>}>
                <LanguageDetail
                    language={language}
                    recordings={recordings}
                />
            </Suspense>

            {/* Section statistiques (optionnelle, peut être ajoutée plus tard) */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-6">
                    Statistiques de préservation
                </h2>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-texte-secondaire mb-1">Enregistrements totaux</p>
                            <p className="text-3xl font-bold text-benin-green">{recordings.length}</p>
                        </div>
                        <div>
                            <p className="text-texte-secondaire mb-1">Contributeurs</p>
                            <p className="text-3xl font-bold text-benin-yellow">
                                {Math.floor(recordings.length * 0.8)} {/* Simulation */}
                            </p>
                        </div>
                        <div>
                            <p className="text-texte-secondaire mb-1">Écoutes totales</p>
                            <p className="text-3xl font-bold text-benin-red">
                                {recordings.reduce((sum, rec) => sum + (rec.plays || 0), 0)} {/* Calcul réel */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}