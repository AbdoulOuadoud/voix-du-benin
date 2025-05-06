import React from 'react';

export const metadata = {
    title: 'Conditions d\'utilisation | Voix du Bénin',
    description: 'Consultez les conditions d\'utilisation de la plateforme Voix du Bénin détaillant les règles et modalités d\'utilisation du service.',
};

export default function TermsOfService() {
    return (
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
            {/* Banner décoratif en haut */}
            <div className="w-full h-24 bg-gradient-to-r from-benin-green/10 to-benin-yellow/10 rounded-lg mb-8 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-slate-800">Conditions d&apos;utilisation</h1>
            </div>

            <p className="text-slate-600 mb-8 text-center">
                Dernière mise à jour : 6 mai 2025
            </p>

            <div className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Acceptation des conditions</h2>
                    <p className="mb-4">
                        Bienvenue sur Voix du Bénin. En accédant et en utilisant ce site web, vous acceptez d&apos;être lié par les présentes conditions d&apos;utilisation, notre politique de confidentialité, et toutes les lois et réglementations applicables. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                    </p>
                    <p>
                        Ces conditions d&apos;utilisation constituent un accord légal entre vous et l&apos;Association pour la Préservation des Langues Béninoises (APLB), qui gère et exploite le site Voix du Bénin.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Description du service</h2>
                    <p className="mb-4">
                        Voix du Bénin est une plateforme collaborative dédiée à la collecte, la préservation et la valorisation des langues parlées au Bénin. Notre service permet aux utilisateurs de :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Consulter des ressources linguistiques sur les langues béninoises</li>
                        <li>Écouter des enregistrements audio dans différentes langues du Bénin</li>
                        <li>Contribuer en soumettant des enregistrements audio, transcriptions et traductions</li>
                        <li>Participer à des projets de documentation linguistique</li>
                        <li>Interagir avec la communauté des locuteurs et des chercheurs</li>
                    </ul>
                    <p>
                        Nous nous réservons le droit de modifier, suspendre ou interrompre tout aspect du service à tout moment, y compris la disponibilité de toute fonctionnalité, base de données ou contenu.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Inscription et comptes utilisateurs</h2>
                    <p className="mb-4">
                        Certaines fonctionnalités de notre site peuvent nécessiter une inscription et la création d&apos;un compte utilisateur. Lors de l&apos;inscription, vous acceptez de :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Fournir des informations exactes, à jour et complètes</li>
                        <li>Maintenir et mettre à jour rapidement vos informations pour qu&apos;elles restent exactes</li>
                        <li>Être responsable de la confidentialité de votre mot de passe et de toutes les activités qui se produisent sous votre compte</li>
                        <li>Nous informer immédiatement de toute utilisation non autorisée de votre compte</li>
                    </ul>
                    <p>
                        Nous nous réservons le droit de désactiver tout compte utilisateur, à tout moment et sans préavis, si nous estimons que vous avez enfreint ces conditions d&apos;utilisation.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Contributions des utilisateurs</h2>
                    <p className="mb-4">
                        En soumettant du contenu à notre plateforme (enregistrements audio, transcriptions, traductions, commentaires), vous :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Garantissez que vous avez le droit de soumettre ce contenu et qu&apos;il ne viole aucun droit de propriété intellectuelle ou autre droit de tiers</li>
                        <li>Acceptez que votre contenu soit publié sous licence Creative Commons Attribution 4.0 International (CC BY 4.0), sauf indication contraire spécifiée lors de la soumission</li>
                        <li>Comprenez que votre contenu pourra être utilisé, modifié et distribué par d&apos;autres utilisateurs conformément à cette licence</li>
                        <li>Reconnaissez que vous serez crédité comme contributeur original du contenu</li>
                    </ul>
                    <p className="mb-4">
                        Nous nous réservons le droit, sans y être obligés, de surveiller, modifier ou supprimer tout contenu que nous jugeons, à notre seule discrétion, inapproprié, offensant, illégal, ou en violation de ces conditions d&apos;utilisation.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Comportement des utilisateurs</h2>
                    <p className="mb-4">En utilisant notre plateforme, vous vous engagez à ne pas :</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Publier du contenu diffamatoire, obscène, offensant, haineux ou autrement répréhensible</li>
                        <li>Utiliser le service pour envoyer des messages non sollicités ou du spam</li>
                        <li>Collecter ou stocker des données personnelles d&apos;autres utilisateurs</li>
                        <li>Entraver ou perturber le fonctionnement normal du site ou des serveurs</li>
                        <li>Tenter d&apos;obtenir un accès non autorisé à nos systèmes informatiques</li>
                        <li>Utiliser le service à des fins illégales ou non autorisées</li>
                        <li>Se présenter faussement comme une autre personne ou entité</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Propriété intellectuelle</h2>
                    <p className="mb-4">
                        Le contenu et les fonctionnalités de notre site, y compris mais sans s&apos;y limiter, les textes, graphiques, logos, icônes, images, clips audio, téléchargements numériques et compilations de données, sont la propriété de l&apos;Association pour la Préservation des Langues Béninoises ou de nos concédants de licence et sont protégés par les lois internationales sur le droit d&apos;auteur.
                    </p>
                    <p>
                        Pour plus d&apos;informations concernant les droits de propriété intellectuelle, veuillez consulter nos <a href="/legal" className="text-benin-green hover:underline">Mentions légales</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Limitation de responsabilité</h2>
                    <p className="mb-4">
                        Voix du Bénin et l&apos;Association pour la Préservation des Langues Béninoises ne pourront être tenus responsables des dommages directs, indirects, accessoires, consécutifs ou punitifs résultant de :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>L&apos;utilisation ou l&apos;impossibilité d&apos;utiliser notre service</li>
                        <li>Tout contenu obtenu à partir du service</li>
                        <li>Accès non autorisé à nos serveurs ou aux informations personnelles stockées</li>
                        <li>Interruptions ou cessations de transmission vers ou depuis notre service</li>
                        <li>Bugs, virus, chevaux de Troie ou similaires qui peuvent être transmis via notre service</li>
                        <li>Erreurs ou omissions dans tout contenu ou pour toute perte ou dommage résultant de l&apos;utilisation de tout contenu publié, envoyé par courriel, transmis ou autrement rendu disponible via le service</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Indemnisation</h2>
                    <p className="mb-4">
                        Vous acceptez de défendre, d&apos;indemniser et de tenir hors de cause Voix du Bénin, l&apos;Association pour la Préservation des Langues Béninoises, ses dirigeants, administrateurs, employés et agents contre toute réclamation, dommages, obligations, pertes, responsabilités, coûts ou dettes et dépenses (y compris mais non limités aux honoraires d&apos;avocats) découlant de :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Votre utilisation et accès au service</li>
                        <li>Votre violation de toute clause des présentes conditions d&apos;utilisation</li>
                        <li>Votre violation de tout droit de tiers, y compris, sans s&apos;y limiter, les droits d&apos;auteur, de propriété ou de confidentialité</li>
                        <li>Tout contenu publié sur le service par vous</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Modifications des conditions</h2>
                    <p className="mb-4">
                        Nous nous réservons le droit, à notre seule discrétion, de modifier ou remplacer ces conditions à tout moment. Si une révision est importante, nous fournirons un préavis d&apos;au moins 30 jours avant l&apos;entrée en vigueur des nouvelles conditions. Ce qui constitue un changement important sera déterminé à notre seule discrétion.
                    </p>
                    <p>
                        En continuant à accéder ou à utiliser notre service après l&apos;entrée en vigueur des révisions, vous acceptez d&apos;être lié par les conditions révisées. Si vous n&apos;acceptez pas les nouvelles conditions, veuillez cesser d&apos;utiliser le service.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Résiliation</h2>
                    <p className="mb-4">
                        Nous pouvons résilier ou suspendre votre accès immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous enfreignez les conditions d&apos;utilisation.
                    </p>
                    <p className="mb-4">
                        Vous pouvez également résilier votre compte à tout moment en nous contactant pour demander la suppression de votre compte. Veuillez noter que certaines contributions publiques pourront rester disponibles conformément à la licence sous laquelle elles ont été publiées.
                    </p>
                    <p>
                        Toutes les dispositions des conditions d&apos;utilisation qui, de par leur nature, devraient survivre à la résiliation survivront à la résiliation, y compris, sans limitation, les dispositions de propriété, les avis de non-responsabilité, l&apos;indemnisation et les limitations de responsabilité.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">11. Droit applicable</h2>
                    <p className="mb-4">
                        Ces conditions seront régies et interprétées conformément aux lois de la République du Bénin, sans égard aux dispositions en matière de conflit de lois.
                    </p>
                    <p>
                        Notre incapacité à faire respecter un droit ou une disposition des présentes conditions ne sera pas considérée comme une renonciation à ce droit. Si une disposition des présentes conditions est jugée invalide ou inapplicable par un tribunal, les dispositions restantes des présentes conditions resteront en vigueur.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">12. Nous contacter</h2>
                    <p className="mb-4">
                        Si vous avez des questions concernant ces conditions d&apos;utilisation, veuillez nous contacter à :
                    </p>
                    <p className="mb-2"><strong>Association pour la Préservation des Langues Béninoises</strong></p>
                    <p className="mb-2">Email : <a href="mailto:legal@voixdubenin.org" className="text-benin-green hover:underline">legal@voixdubenin.org</a></p>
                    <p>Adresse : 123 Avenue de la République, Cotonou, Bénin</p>
                </section>
            </div>
        </main>
    );
}