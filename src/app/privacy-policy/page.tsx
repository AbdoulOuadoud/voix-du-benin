import React from 'react';

export const metadata = {
    title: 'Politique de confidentialité | Voix du Bénin',
    description: 'Consultez notre politique de confidentialité détaillant comment nous protégeons vos données personnelles sur la plateforme Voix du Bénin.',
};

export default function PrivacyPolicy() {
    return (
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
            {/* Banner décoratif en haut */}
            <div className="w-full h-24 bg-gradient-to-r from-benin-green/10 to-benin-yellow/10 rounded-lg mb-8 flex items-center justify-center">
                <h1 className="text-3xl font-bold text-slate-800">Politique de confidentialité</h1>
            </div>

            <p className="text-slate-600 mb-8 text-center">
                Dernière mise à jour : 6 mai 2025
            </p>

            <div className="prose prose-slate max-w-none bg-white p-8 rounded-lg shadow-sm">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Chez Voix du Bénin, nous accordons une grande importance à la protection de vos données personnelles.
                        Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations
                        lorsque vous utilisez notre plateforme collaborative dédiée à la préservation des langues béninoises.
                    </p>
                    <p>
                        Nous vous invitons à lire attentivement ce document pour comprendre nos pratiques concernant le traitement
                        de vos données personnelles et comment nous les protégeons.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Informations que nous collectons</h2>
                    <p className="mb-4">Nous pouvons collecter les types d'informations suivants :</p>

                    <h3 className="text-xl font-medium text-slate-800 mb-2">2.1. Informations que vous nous fournissez</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Informations de compte : nom, prénom, adresse e-mail, mot de passe lors de la création d'un compte.</li>
                        <li>Profil utilisateur : informations démographiques, langues parlées, niveau de compétence linguistique.</li>
                        <li>Contributions : enregistrements audio, transcriptions, traductions et annotations linguistiques.</li>
                        <li>Communications : messages envoyés via nos formulaires de contact ou correspondance avec notre équipe.</li>
                    </ul>

                    <h3 className="text-xl font-medium text-slate-800 mb-2">2.2. Informations collectées automatiquement</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Données d'utilisation : pages visitées, durée des sessions, actions effectuées sur la plateforme.</li>
                        <li>Informations techniques : adresse IP, type d'appareil, navigateur, système d'exploitation.</li>
                        <li>Cookies et technologies similaires : pour améliorer votre expérience et analyser l'utilisation de notre service.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Comment nous utilisons vos informations</h2>
                    <p className="mb-4">Nous utilisons vos informations pour les finalités suivantes :</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Fournir, maintenir et améliorer notre plateforme de préservation linguistique.</li>
                        <li>Traiter et gérer votre compte et vos contributions.</li>
                        <li>Développer de nouvelles fonctionnalités et services.</li>
                        <li>Analyser l'utilisation de notre plateforme et améliorer l'expérience utilisateur.</li>
                        <li>Communiquer avec vous concernant votre compte, vos contributions ou nos services.</li>
                        <li>Protéger la sécurité et l'intégrité de notre plateforme.</li>
                        <li>Se conformer aux obligations légales.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Partage de vos informations</h2>
                    <p className="mb-4">Nous pouvons partager vos informations dans les circonstances suivantes :</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li><strong>Contributions publiques</strong> : Les enregistrements audio, transcriptions et autres contributions que vous choisissez de rendre publics seront accessibles aux autres utilisateurs de la plateforme et pourront être utilisés à des fins d'étude et de préservation des langues béninoises.</li>
                        <li><strong>Partenaires de recherche</strong> : Nous pouvons partager des données anonymisées avec des instituts de recherche linguistique, des universités ou des organismes culturels pour soutenir la recherche sur les langues béninoises.</li>
                        <li><strong>Prestataires de services</strong> : Nous collaborons avec des fournisseurs tiers qui nous aident à exploiter notre plateforme (hébergement, analyse de données, services de paiement).</li>
                        <li><strong>Obligations légales</strong> : Nous pouvons divulguer vos informations si la loi l'exige ou en réponse à des demandes légitimes des autorités publiques.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Protection de vos informations</h2>
                    <p className="mb-4">
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles contre tout accès non autorisé, perte, utilisation abusive ou altération. Ces mesures incluent le chiffrement des données, l'accès restreint aux informations personnelles, et des audits réguliers de nos pratiques de sécurité.
                    </p>
                    <p>
                        Toutefois, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sûre. Nous ne pouvons donc pas garantir une sécurité absolue.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Vos droits concernant vos données</h2>
                    <p className="mb-4">Selon les lois applicables, vous pouvez disposer des droits suivants :</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Accéder à vos données personnelles et en obtenir une copie.</li>
                        <li>Rectifier des informations inexactes ou incomplètes.</li>
                        <li>Demander l'effacement de vos données dans certaines circonstances.</li>
                        <li>Limiter ou vous opposer au traitement de vos données.</li>
                        <li>Retirer votre consentement à tout moment lorsque le traitement est basé sur celui-ci.</li>
                        <li>Porter plainte auprès d'une autorité de protection des données.</li>
                    </ul>
                    <p>
                        Pour exercer ces droits, veuillez nous contacter via l'adresse email : <a href="mailto:privacy@voixdubenin.org" className="text-benin-green hover:underline">privacy@voixdubenin.org</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Conservation des données</h2>
                    <p className="mb-4">
                        Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou permise par la loi.
                    </p>
                    <p>
                        Les contributions linguistiques que vous partagez publiquement sur la plateforme peuvent être conservées indéfiniment pour servir notre mission de préservation du patrimoine linguistique béninois, sauf si vous demandez leur suppression.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">8. Politique concernant les enfants</h2>
                    <p className="mb-4">
                        Notre service n'est pas destiné aux personnes âgées de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles auprès d'enfants de moins de 16 ans. Si vous êtes parent ou tuteur et que vous savez que votre enfant nous a fourni des données personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">9. Modifications de cette politique</h2>
                    <p className="mb-4">
                        Nous pouvons mettre à jour cette politique de confidentialité périodiquement pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires. Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des dernières informations sur nos pratiques de confidentialité.
                    </p>
                    <p>
                        En cas de modifications importantes, nous vous en informerons par e-mail ou par un avis sur notre site web avant que ces modifications ne deviennent effectives.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">10. Nous contacter</h2>
                    <p className="mb-4">
                        Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à :
                    </p>
                    <p className="mb-2"><strong>Voix du Bénin</strong></p>
                    <p className="mb-2">Email : <a href="mailto:privacy@voixdubenin.org" className="text-benin-green hover:underline">privacy@voixdubenin.org</a></p>
                    <p>Adresse : Cotonou, Bénin</p>
                </section>
            </div>
        </main>
    );
}