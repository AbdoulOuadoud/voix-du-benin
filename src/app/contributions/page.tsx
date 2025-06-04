import { Suspense } from 'react';

export const metadata = {
    title: 'Contributions | Voix du Bénin',
    description: 'Suivez vos contributions et l\'impact de la communauté dans la préservation des langues du Bénin.',
};

export default async function ContributionsPage() {
    return (
        <main className="container mx-auto px-4 pt-36 pb-24">
            <div className="max-w-3xl mx-auto mb-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-texte-principal mb-4">
                    Vos contributions
                </h1>
                <p className="text-texte-secondaire text-lg">
                    Suivez votre impact et celui de la communauté dans la préservation 
                    du patrimoine linguistique béninois.
                </p>
            </div>

            {/* Section informative sur les contributions */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-texte-principal mb-6">
                        Contribuer à la préservation linguistique
                    </h2>
                    <p className="text-texte-secondaire mb-4">
                        Votre voix compte ! Chaque enregistrement que vous réalisez contribue 
                        directement à la préservation des langues du Bénin pour les générations futures.
                    </p>
                    <p className="text-texte-secondaire mb-4">
                        Rejoignez notre communauté de contributeurs passionnés et participez 
                        activement à la sauvegarde de ce patrimoine culturel unique.
                    </p>
                    <div className="mt-6">
                        <button className="bg-vert-beninois text-white px-6 py-3 rounded-lg font-semibold hover:bg-vert-beninois/90 transition-colors">
                            Commencer à contribuer
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}