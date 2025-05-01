"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const BeninMap = ({ onRegionClick, highlightedRegion }) => {
    const [hoveredRegion, setHoveredRegion] = useState(null);

    // Définition des principales régions linguistiques du Bénin
    const regions = [
        { id: 'BJ-AL', name: 'Alibori', languages: ['Dendi', 'Bariba', 'Peulh'], color: '#007847' },
        { id: 'BJ-AK', name: 'Atacora', languages: ['Ditammari', 'Natimba', 'Waama'], color: '#007847' },
        { id: 'BJ-AQ', name: 'Atlantique', languages: ['Fon', 'Aizo', 'Tofin'], color: '#007847' },
        { id: 'BJ-BO', name: 'Borgou', languages: ['Bariba', 'Dendi', 'Peulh'], color: '#007847' },
        { id: 'BJ-CO', name: 'Collines', languages: ['Mahi', 'Idaasha', 'Fon'], color: '#007847' },
        { id: 'BJ-KO', name: 'Couffo', languages: ['Aja', 'Fon', 'Adja'], color: '#007847' },
        { id: 'BJ-DO', name: 'Donga', languages: ['Yom', 'Lokpa', 'Anii'], color: '#007847' },
        { id: 'BJ-LI', name: 'Littoral', languages: ['Fon', 'Gun', 'Yoruba'], color: '#007847' },
        { id: 'BJ-MO', name: 'Mono', languages: ['Xwla', 'Xweda', 'Gen'], color: '#007847' },
        { id: 'BJ-OU', name: 'Ouémé', languages: ['Goun', 'Tori', 'Weme'], color: '#007847' },
        { id: 'BJ-PL', name: 'Plateau', languages: ['Yoruba', 'Nagot', 'Idaasha'], color: '#007847' },
        { id: 'BJ-ZO', name: 'Zou', languages: ['Fon', 'Mahi', 'Goun'], color: '#007847' },
    ];

    const handleRegionHover = (regionId) => {
        setHoveredRegion(regionId);
    };

    return (
        <div className="relative h-full w-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 800 1650"
                className="w-full h-full"
                fill="none"
            >
                <style type="text/css">
                    {`.land {
                        fill: #E8F4EA;
                        stroke: #007847;
                        stroke-width: 1;
                        transition: all 0.3s ease;
                        }
                        .land:hover {
                        fill: #007847;
                        fill-opacity: 0.5;
                        cursor: pointer;
                        }
                        .land-highlighted {
                        fill: #007847;
                        fill-opacity: 0.3;
                        }`
                    }
                </style>
                <g>
                    {regions.map((region) => {
                        const isHighlighted = highlightedRegion === region.id || hoveredRegion === region.id;
                        const pathClassName = `land ${isHighlighted ? 'land-highlighted' : ''}`;

                        // Utiliser les chemins SVG fournis
                        switch (region.id) {
                            case 'BJ-DO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M346.18,627.33L151.81,647.59L147.24,761.71L217.26,878.93L220.23,1007.32L278.04,1000.42L368.29,1035.53L372.88,957.89L331.22,926.92L335.51,875.09L314.57,842.02L319.74,806.76L353.01,797.38L364.22,726.26L343.24,686.98L346.18,627.33z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-AK':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M326.31,257.01L218.77,268.38L176.68,245.82L148.29,294.84L97.66,302.46L103.6,327.41L78.62,333.73L92.1,364.02L57.59,350.14L52.89,378.2L36.83,373.27L0.25,534.75L151.81,647.59L346.18,627.33L391.84,600.04L369.66,529.77L388.57,498.9L390.66,408.7L414.86,381.92L326.31,257.01z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-MO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M223.46,1629.68L319.11,1610.69L328.44,1500.85L215.54,1497.19L265.74,1613.11L223.46,1629.68z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-PL':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M508.8,1251.48L451.77,1251.34L433.41,1312.43L461.03,1377.29L457.45,1425.81L477.28,1513.31L509.1,1553.74L528.21,1298.9L508.8,1251.48z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-ZO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M433.41,1312.43L293.57,1260.77L224.29,1260.94L224.4,1283.5L294.45,1405.21L344.13,1445.15L422.33,1444.82L457.45,1425.81L461.03,1377.29L433.41,1312.43z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-OU':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M457.45,1425.81L422.33,1444.82L443.82,1582.11L448.07,1594.64L505.21,1589.3L509.1,1553.74L477.28,1513.31L457.45,1425.81z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-KO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M344.13,1445.15L294.45,1405.21L224.4,1283.5L225.03,1424.87L200.66,1426.14L215.54,1497.19L328.44,1500.85L344.13,1445.15z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-LI':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M448.07,1594.64L443.82,1582.11L415.82,1597.65L448.07,1594.64z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-AQ':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M443.82,1582.11L422.33,1444.82L344.13,1445.15L328.44,1500.85L319.11,1610.69L415.82,1597.65L443.82,1582.11z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-CO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M510.18,959.32L372.88,957.89L368.29,1035.53L278.04,1000.42L220.23,1007.32L224.29,1260.94L293.57,1260.77L433.41,1312.43L451.77,1251.34L508.8,1251.48L510.18,959.32z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-AL':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M541.72,0L418.46,43.35L441,111.71L421.28,119.99L397,195.02L326.31,257.01L414.86,381.92L390.66,408.7L388.57,498.9L799.75,469.08L771.89,422.24L769.83,341.6L703.91,260.22L737.17,186.93L541.72,0z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            case 'BJ-BO':
                                return (
                                    <motion.path
                                        key={region.id}
                                        id={region.id}
                                        title={region.name}
                                        className={pathClassName}
                                        d="M510.18,959.32L522.19,884.13L601.93,874.1L616.62,778.75L668.35,727.43L666.88,687.96L715.52,676.12L735.37,649.16L755.64,596.97L730.93,560.23L751.64,520.58L786.88,523.07L799.75,469.08L388.57,498.9L369.66,529.77L391.84,600.04L346.18,627.33L343.24,686.98L364.22,726.26L353.01,797.38L319.74,806.76L314.57,842.02L335.51,875.09L331.22,926.92L372.88,957.89L510.18,959.32z"
                                        whileHover={{ scale: 1.01 }}
                                        onMouseEnter={() => handleRegionHover(region.id)}
                                        onMouseLeave={() => handleRegionHover(null)}
                                        onClick={() => onRegionClick && onRegionClick(region)}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </g>

                {/* Points représentant les villes principales */}
                <circle cx="443" cy="1590" r="5" fill="#D62828" stroke="#FFFFFF" strokeWidth="2" /> {/* Cotonou */}
                <circle cx="80" cy="350" r="4" fill="#D62828" stroke="#FFFFFF" strokeWidth="2" /> {/* Natitingou */}
                <circle cx="500" cy="600" r="4" fill="#D62828" stroke="#FFFFFF" strokeWidth="2" /> {/* Parakou */}
                <circle cx="480" cy="1590" r="4" fill="#D62828" stroke="#FFFFFF" strokeWidth="2" /> {/* Porto-Novo */}
                <circle cx="270" cy="1350" r="4" fill="#D62828" stroke="#FFFFFF" strokeWidth="2" /> {/* Abomey */}
            </svg>

            {/* Légende des régions au survol */}
            {hoveredRegion && (
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md border border-gray-100">
                    <h4 className="font-medium text-texte-principal">
                        {regions.find(r => r.id === hoveredRegion)?.name}
                    </h4>
                    <p className="text-sm text-texte-secondaire">
                        Langues: {regions.find(r => r.id === hoveredRegion)?.languages.join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BeninMap;

