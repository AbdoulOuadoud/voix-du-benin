import React from 'react';

export const metadata = {
    title: 'Mentions légales | Voix du Bénin',
    description: 'Consultez les mentions légales du site Voix du Bénin, incluant les informations sur la propriété intellectuelle et les conditions d\'utilisation.',
};

export default function LegalPage() {
    return (
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
            {/* Banner décoratif en haut */}
            <div className="w-full h-24 bg-gradient-to-r from-benin-green/10 to-benin-yellow/10 rounded-lg mb-8 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-slate-800">Mentions légales</h1>
            </div>

            <p className="text-slate-600 mb-8 text-center">
                Dernière mise à jour : 6 mai 2025
            </p>

            <div className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Éditeur du site</h2>
                    <p className="mb-4">
                        Le site Voix du Bénin est édité par l'Association pour la Préservation des Langues Béninoises (APLB),
                        association à but non lucratif dont le siège social est situé à :
                    </p>
                    <address className="not-italic mb-4">
                        <strong>Association pour la Préservation des Langues Béninoises</strong><br />
                        123 Avenue de la République<br />
                        Cotonou, Bénin<br />
                        Téléphone : +229 xx xx xx xx<br />
                        Email : contact@voixdubenin.org
                    </address>
                    <p>
                        Directeur de la publication : Mathieu Kodjovi
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Hébergement</h2>
                    <p>
                        Le site Voix du Bénin est hébergé par Vercel Inc., dont le siège social est situé à :<br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789<br />
                        États-Unis
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Propriété intellectuelle</h2>
                    <p className="mb-4">
                        La structure générale, les textes, images, sons, vidéos, bases de données, logos et tous les éléments composant le site Voix du Bénin sont la propriété exclusive de l'Association pour la Préservation des Langues Béninoises ou font l'objet d'une autorisation d'utilisation.
                    </p>
                    <p className="mb-4">
                        Toute représentation totale ou partielle du site Voix du Bénin, par quelque procédé que ce soit, sans l'autorisation expresse de l'Association pour la Préservation des Langues Béninoises, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                    </p>
                    <p>
                        Les marques, logos et noms de domaine apparaissant sur le site sont la propriété exclusive de l'Association pour la Préservation des Langues Béninoises. Toute reproduction ou utilisation de ces marques, logos ou noms de domaine, de quelque manière que ce soit, est interdite sans l'autorisation préalable et écrite de l'Association.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Licence de contenu contributif</h2>
                    <p className="mb-4">
                        Les contributions linguistiques (enregistrements audio, transcriptions, traductions) soumises par les utilisateurs à la plateforme Voix du Bénin sont publiées sous licence Creative Commons Attribution 4.0 International (CC BY 4.0), sauf mention contraire spécifiée par le contributeur lors de la soumission.
                    </p>
                    <p className="mb-4">
                        Cette licence permet à d'autres de distribuer, remixer, adapter et développer votre travail, même à des fins commerciales, tant qu'ils vous créditent pour la création originale.
                    </p>
                    <p>
                        Pour plus d'informations sur cette licence, veuillez consulter : <a href="https://creativecommons.org/licenses/by/4.0/" className="text-benin-green hover:underline" target="_blank" rel="noreferrer">Creative Commons CC BY 4.0</a>
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Protection des données personnelles</h2>
                    <p className="mb-4">
                        Conformément à la loi n° 2017-20 du 20 avril 2018 portant code du numérique en République du Bénin, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent.
                    </p>
                    <p className="mb-4">
                        Pour exercer ce droit, veuillez nous contacter à l'adresse suivante : privacy@voixdubenin.org
                    </p>
                    <p>
                        Pour plus d'informations concernant la gestion de vos données personnelles, veuillez consulter notre <a href="/privacy-policy" className="text-benin-green hover:underline">Politique de confidentialité</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Cookies</h2>
                    <p className="mb-4">
                        Le site Voix du Bénin utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur notre site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
                    </p>
                    <p>
                        La plupart des navigateurs permettent de refuser les cookies. Pour plus d'informations sur les cookies et comment les gérer, consultez notre <a href="/privacy-policy" className="text-benin-green hover:underline">Politique de confidentialité</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitation de responsabilité</h2>
                    <p className="mb-4">
                        L'Association pour la Préservation des Langues Béninoises s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur le site Voix du Bénin, dont elle se réserve le droit de modifier, à tout moment et sans préavis, le contenu ou la présentation.
                    </p>
                    <p className="mb-4">
                        Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site. En conséquence, l'Association pour la Préservation des Langues Béninoises décline toute responsabilité :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                        <li>Pour tous dommages, directs et/ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, résultant de l'utilisation du site ou de l'impossibilité d'y accéder</li>
                        <li>Pour tout contenu provenant de sites tiers auxquels le site Voix du Bénin renvoie</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Liens hypertextes</h2>
                    <p className="mb-4">
                        Le site Voix du Bénin peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres sites vous font quitter le site Voix du Bénin.
                    </p>
                    <p>
                        L'Association pour la Préservation des Langues Béninoises n'accepte aucune responsabilité quant au contenu des sites ainsi consultés et aux éventuels préjudices qui pourraient résulter de leur consultation.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Droit applicable et juridiction compétente</h2>
                    <p className="mb-4">
                        Les présentes mentions légales sont régies par le droit béninois. En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux béninois conformément aux règles de compétence en vigueur.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Contact</h2>
                    <p className="mb-4">
                        Pour toute question concernant les présentes mentions légales ou pour signaler un problème technique, vous pouvez nous contacter à l'adresse suivante :
                    </p>
                    <p>Email : <a href="mailto:legal@voixdubenin.org" className="text-benin-green hover:underline">legal@voixdubenin.org</a></p>
                </section>
            </div>
        </main>
    );
}