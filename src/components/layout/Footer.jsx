"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-vert-beninois">
                                Voix du Bénin
                            </span>
                        </Link>
                        <p className="text-texte-secondaire mb-4 max-w-md">
                            Une plateforme collaborative pour collecter, préserver et valoriser
                            les langues parlées au Bénin.
                        </p>
                        <div className="flex space-x-4 text-gray-500">
                            <a
                                href="#"
                                className="hover:text-vert-beninois transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-vert-beninois transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="hover:text-vert-beninois transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="mailto:contact@voixdubenin.org"
                                className="hover:text-vert-beninois transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold text-texte-principal mb-4">Explorer</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#mission" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Notre Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Fonctionnalités
                                </Link>
                            </li>
                            <li>
                                <Link href="/#support" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Soutenez-nous
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-texte-principal mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-texte-secondaire hover:text-vert-beninois transition-colors">
                                    Conditions d'utilisation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-12 pt-6 text-center text-texte-secondaire text-sm">
                    <p>&copy; {currentYear} Voix du Bénin. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}