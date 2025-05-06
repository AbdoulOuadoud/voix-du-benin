"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Mic, MapPin } from 'lucide-react';
import Card from '../ui/Card';

export default function LanguageCard({ 
    language,
    className = '' 
}) {
    const {
        id,
        name,
        speakersCount,
        recordingsCount,
        region,
        imageUrl,
        colorAccent
    } = language;

    // Couleur d&apos;accent par défaut si non fournie
    const accentColor = colorAccent || 'bg-benin-green';

    return (
        <Link href={`/languages/${id}`} className="block">
            <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={className}
            >
                <Card className="h-full overflow-hidden">
                    {/* En-tête avec image */}
                    <div className="relative h-32 bg-gray-100 -mx-4 -mt-4 mb-4 overflow-hidden">
                        <div className={`absolute inset-0 ${accentColor} opacity-20`} />
                        
                        {imageUrl ? (
                            <Image 
                                src={imageUrl} 
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-lg font-semibold text-text-secondary">
                                {name}
                            </div>
                        )}
                        
                        {/* Barre d&apos;accent en haut */}
                        <div className={`absolute top-0 left-0 right-0 h-1 ${accentColor}`} />
                    </div>
                    
                    {/* Contenu de la carte */}
                    <div className="px-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                            {name}
                        </h3>
                        
                        <div className="space-y-2 mt-3 text-sm">
                            {/* Région */}
                            {region && (
                                <div className="flex items-center text-text-secondary">
                                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                                    <span>{region}</span>
                                </div>
                            )}
                            
                            {/* Nombre de locuteurs */}
                            {speakersCount && (
                                <div className="flex items-center text-text-secondary">
                                    <Users size={16} className="mr-2 flex-shrink-0" />
                                    <span>
                                        {speakersCount.toLocaleString()} locuteurs estimés
                                    </span>
                                </div>
                            )}
                            
                            {/* Nombre d&apos;enregistrements */}
                            {recordingsCount !== undefined && (
                                <div className="flex items-center text-text-secondary">
                                    <Mic size={16} className="mr-2 flex-shrink-0" />
                                    <span>
                                        {recordingsCount.toLocaleString()} enregistrements
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Badge de statut en option */}
                    {language.status === 'endangered' && (
                        <div className="absolute top-2 right-2 bg-benin-red text-white text-xs px-2 py-1 rounded-full">
                            En danger
                        </div>
                    )}
                </Card>
            </motion.div>
        </Link>
    );
}