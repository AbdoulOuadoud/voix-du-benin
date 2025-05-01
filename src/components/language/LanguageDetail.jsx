"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Mic, MapPin, Clock, Search, SortAsc, Filter, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import AudioPlayer from '../audio/AudioPlayer';

export default function LanguageDetail({ language, recordings = [], isLoading = false }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('recent');
    const [filterType, setFilterType] = useState('all');
    
    // Fonctions de filtrage et de tri des enregistrements
    const filteredRecordings = recordings
        .filter(rec => {
            // Filtre de recherche
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                return rec.phrase.toLowerCase().includes(term) || rec.translation.toLowerCase().includes(term);
            }
            return true;
        })
        .filter(rec => {
            // Filtre par type
            if (filterType === 'all') return true;
            return rec.type === filterType;
        })
        .sort((a, b) => {
            // Tri
            switch (sortBy) {
                case 'recent':
                    return new Date(b.createdAt) - new Date(a.createdAt);
                case 'oldest':
                    return new Date(a.createdAt) - new Date(b.createdAt);
                case 'alphabetical':
                    return a.phrase.localeCompare(b.phrase);
                case 'popularity':
                    return (b.plays || 0) - (a.plays || 0);
                default:
                    return 0;
            }
        });
    
    // Options pour les selects
    const sortOptions = [
        { value: 'recent', label: 'Plus récents' },
        { value: 'oldest', label: 'Plus anciens' },
        { value: 'alphabetical', label: 'Alphabétique' },
        { value: 'popularity', label: 'Popularité' }
    ];
    
    const filterOptions = [
        { value: 'all', label: 'Tous les enregistrements' },
        { value: 'phrase', label: 'Phrases' },
        { value: 'word', label: 'Mots' },
        { value: 'conversation', label: 'Conversations' }
    ];
    
    return (
        <div>
            {/* En-tête avec informations sur la langue */}
            <div className="bg-white rounded-2xl shadow-custom overflow-hidden mb-8">
                <div className="relative h-48 bg-gray-100">
                    {language.coverImageUrl ? (
                        <Image
                            src={language.coverImageUrl}
                            alt={language.name}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className={`w-full h-full bg-gradient-to-r from-benin-green/80 to-benin-yellow/70`} />
                    )}
                    
                    <div className="absolute inset-0 bg-black/30" />
                </div>
                
                <div className="p-6">
                    <div className="flex flex-wrap justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-text-primary mb-2">
                                {language.name}
                            </h1>
                            
                            <div className="flex flex-wrap items-center gap-6 text-text-secondary mb-4">
                                {language.region && (
                                    <div className="flex items-center">
                                        <MapPin size={18} className="mr-1" />
                                        <span>{language.region}</span>
                                    </div>
                                )}
                                
                                {language.speakersCount && (
                                    <div className="flex items-center">
                                        <Users size={18} className="mr-1" />
                                        <span>{language.speakersCount.toLocaleString()} locuteurs estimés</span>
                                    </div>
                                )}
                                
                                <div className="flex items-center">
                                    <Mic size={18} className="mr-1" />
                                    <span>{recordings.length} enregistrements</span>
                                </div>
                            </div>
                            
                            {language.description && (
                                <p className="text-text-secondary max-w-3xl">
                                    {language.description}
                                </p>
                            )}
                        </div>
                        
                        <div className="mt-4 md:mt-0">
                            <Button href={`/contribute/${language.id}`} variant="primary">
                                Contribuer dans cette langue
                                <ArrowUpRight size={16} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Onglets d'information (optionnels) */}
            <div className="flex border-b border-gray-200 mb-6">
                <button className="px-4 py-2 border-b-2 border-benin-green text-benin-green font-medium">
                    Enregistrements
                </button>
                <button className="px-4 py-2 text-text-secondary hover:text-benin-green transition-colors">
                    Informations
                </button>
                <button className="px-4 py-2 text-text-secondary hover:text-benin-green transition-colors">
                    Statistiques
                </button>
            </div>
            
            {/* Filtres et recherche */}
            <div className="bg-white p-6 rounded-xl shadow-custom mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input
                        id="search-recordings"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        icon={<Search size={18} />}
                        className="mb-0"
                    />
                    
                    <Select
                        id="filter-type"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        options={filterOptions}
                        icon={<Filter size={18} />}
                        className="mb-0"
                    />
                    
                    <Select
                        id="sort-by"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        options={sortOptions}
                        icon={<SortAsc size={18} />}
                        className="mb-0"
                    />
                </div>
            </div>
            
            {/* Liste des enregistrements */}
            <div>
                <h2 className="text-xl font-semibold text-text-primary mb-4">
                    Enregistrements disponibles ({filteredRecordings.length})
                </h2>
                
                {isLoading ? (
                    <div className="space-y-4">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="h-24 bg-gray-100 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                ) : filteredRecordings.length > 0 ? (
                    <div className="space-y-4">
                        {filteredRecordings.map((recording) => (
                            <motion.div 
                                key={recording.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-white rounded-xl shadow-custom p-4">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex-grow">
                                            <div className="mb-1">
                                                <p className="text-lg font-medium text-benin-green">
                                                    {recording.phrase}
                                                </p>
                                                <p className="text-text-secondary">
                                                    {recording.translation}
                                                </p>
                                            </div>
                                            
                                            {recording.phoneticTranscription && (
                                                <p className="text-sm text-text-secondary italic mb-2">
                                                    Prononciation: {recording.phoneticTranscription}
                                                </p>
                                            )}
                                            
                                            <div className="flex items-center text-xs text-text-secondary">
                                                <Clock size={14} className="mr-1" />
                                                <span>
                                                    {new Date(recording.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="md:w-1/3 lg:w-1/4">
                                            <AudioPlayer 
                                                audioUrl={recording.audioUrl}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-xl">
                        <p className="text-text-secondary mb-2">
                            Aucun enregistrement ne correspond à vos critères de recherche.
                        </p>
                        <p className="text-text-secondary">
                            Essayez de modifier vos filtres ou effectuez une nouvelle recherche.
                        </p>
                    </div>
                )}
            </div>
            
            {/* Appel à contribution */}
            <div className="mt-12 bg-benin-green text-white p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold mb-3">
                    Contribuez à préserver la langue {language.name}
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Votre voix compte ! Enregistrez des phrases, des mots ou des expressions
                    pour enrichir notre base de données et préserver ce patrimoine culturel.
                </p>
                <Button 
                    href={`/contribute/${language.id}`} 
                    variant="secondary" 
                    size="large"
                >
                    Faire un enregistrement
                </Button>
            </div>
        </div>
    );
}