"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import LanguageCard from './LanguageCard';
import Input from '../ui/Input';
import Select from '../ui/Select';

// Définition des interfaces
interface Language {
    id: string;
    name: string;
    speakersCount: number;
    recordingsCount?: number;
    region: string;
    imageUrl?: string;
    colorAccent: string;
    status?: string;
}

interface SelectOption {
    value: string;
    label: string;
}

interface LanguagesListProps {
    languages: Language[];
    isLoading?: boolean;
}

export default function LanguagesList({ 
    languages = [],
    isLoading = false
}: LanguagesListProps) {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    const [sortOrder, setSortOrder] = useState<string>('alphabetical');
    const [filteredLanguages, setFilteredLanguages] = useState<Language[]>(languages);
    
    // Options de tri
    const sortOptions: SelectOption[] = [
        { value: 'alphabetical', label: 'Alphabétique (A-Z)' },
        { value: 'alphabetical_desc', label: 'Alphabétique (Z-A)' },
        { value: 'speakers_desc', label: 'Nombre de locuteurs (décroissant)' },
        { value: 'speakers_asc', label: 'Nombre de locuteurs (croissant)' },
        { value: 'recordings_desc', label: 'Nombre d\'enregistrements (décroissant)' },
        { value: 'recordings_asc', label: 'Nombre d\'enregistrements (croissant)' },
    ];
    
    // Extraire les régions uniques pour le filtre
    const regions = [...new Set(languages.map(lang => lang.region).filter(Boolean))].sort();
    const regionOptions: SelectOption[] = [
        { value: '', label: 'Toutes les régions' },
        ...regions.map(region => ({ value: region, label: region }))
    ];
    
    // Filtrer et trier les langues lorsque les critères changent
    useEffect(() => {
        // Filtrage
        let filtered = [...languages];
        
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(lang => 
                lang.name.toLowerCase().includes(query) ||
                (lang.region && lang.region.toLowerCase().includes(query))
            );
        }
        
        if (selectedRegion) {
            filtered = filtered.filter(lang => lang.region === selectedRegion);
        }
        
        // Tri
        filtered.sort((a, b) => {
            switch (sortOrder) {
                case 'alphabetical':
                    return a.name.localeCompare(b.name);
                case 'alphabetical_desc':
                    return b.name.localeCompare(a.name);
                case 'speakers_desc':
                    return (b.speakersCount || 0) - (a.speakersCount || 0);
                case 'speakers_asc':
                    return (a.speakersCount || 0) - (b.speakersCount || 0);
                case 'recordings_desc':
                    return ((b.recordingsCount || 0) - (a.recordingsCount || 0));
                case 'recordings_asc':
                    return ((a.recordingsCount || 0) - (b.recordingsCount || 0));
                default:
                    return 0;
            }
        });
        
        setFilteredLanguages(filtered);
    }, [languages, searchQuery, selectedRegion, sortOrder]);
    
    // Gérer le changement de recherche
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };
    
    // Gérer le changement de région
    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(e.target.value);
    };
    
    // Gérer le changement de tri
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value);
    };
    
    return (
        <div>
            {/* Filtres et recherche */}
            <div className="mb-8 bg-white p-6 rounded-xl shadow-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Recherche */}
                    <Input
                        id="search-languages"
                        placeholder="Rechercher une langue..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        icon={<Search size={18} />}
                        className="mb-0" label={undefined}                    />
                    
                    {/* Filtre par région */}
                    <Select
                        id="region-filter"
                        value={selectedRegion}
                        onChange={handleRegionChange}
                        options={regionOptions}
                        placeholder="Filtrer par région"
                        icon={<Filter size={18} />}
                        className="mb-0"
                    />
                    
                    {/* Tri */}
                    <Select
                        id="sort-order"
                        value={sortOrder}
                        onChange={handleSortChange}
                        options={sortOptions}
                        placeholder="Trier par"
                        icon={<SortAsc size={18} />}
                        className="mb-0"
                    />
                </div>
            </div>
            
            {/* Affichage des résultats */}
            <div className="mb-4">
                <p className="text-text-secondary">
                    {filteredLanguages.length} langue{filteredLanguages.length !== 1 ? 's' : ''} trouvée{filteredLanguages.length !== 1 ? 's' : ''}
                </p>
            </div>
            
            {/* Liste des langues */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>
                    ))}
                </div>
            ) : filteredLanguages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredLanguages.map((language) => (
                        <LanguageCard 
                            key={language.id}
                            language={language}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                    <p className="text-text-secondary mb-2">
                        Aucune langue ne correspond à vos critères de recherche.
                    </p>
                    <p className="text-text-secondary">
                        Essayez de modifier vos filtres ou d&apos;effectuer une nouvelle recherche.
                    </p>
                </div>
            )}
        </div>
    );
}