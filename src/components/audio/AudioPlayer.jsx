"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Download, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayer({ 
    audioUrl, 
    title, 
    subtitle,
    allowDownload = true,
    allowShare = true,
    onPlay,
    className = '' 
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    
    // Charger les métadonnées audio
    useEffect(() => {
        const audio = audioRef.current;
        
        const setAudioData = () => {
            setDuration(audio.duration);
        };
        
        const setAudioTime = () => {
            setCurrentTime(audio.currentTime);
        };

        // Gérer la fin de la lecture
        const handleEnded = () => {
            setIsPlaying(false);
            setCurrentTime(0);
        };
        
        // Événements audio
        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', handleEnded);
        
        // Nettoyer les événements
        return () => {
            audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [audioUrl]);
    
    // Formater le temps (mm:ss)
    const formatTime = (time) => {
        if (isNaN(time)) return '00:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    
    // Contrôle de la lecture
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
            if (onPlay) onPlay();
        }
        setIsPlaying(!isPlaying);
    };
    
    // Contrôle du volume
    const toggleMute = () => {
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted;
    };
    
    const handleVolumeChange = (e) => {
        const value = e.target.value;
        setVolume(value);
        audioRef.current.volume = value;
        if (value === 0) {
            setIsMuted(true);
        } else {
            setIsMuted(false);
        }
    };
    
    // Contrôle de la progression
    const handleProgressChange = (e) => {
        const value = e.target.value;
        setCurrentTime(value);
        audioRef.current.currentTime = value;
    };
    
    // Télécharger l&apos;audio
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = audioUrl;
        link.download = title ? `${title.toLowerCase().replace(/\s+/g, '-')}.mp3` : 'audio.mp3';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    // Partager l&apos;audio (utilise l&apos;API Web Share si disponible)
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: title || 'Partage audio',
                    text: `Écoutez cet enregistrement${title ? `: ${title}` : ''}`,
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Erreur de partage:', error);
            }
        } else {
            // Copier le lien dans le presse-papiers comme fallback
            navigator.clipboard.writeText(window.location.href);
            alert('Lien copié dans le presse-papier !');
        }
    };
    
    return (
        <div className={`bg-white rounded-xl p-4 shadow-custom ${className}`}>
            <audio ref={audioRef} src={audioUrl} preload="metadata" />
            
            {/* Informations sur l&apos;audio */}
            {(title || subtitle) && (
                <div className="mb-4">
                    {title && <h4 className="font-medium text-text-primary">{title}</h4>}
                    {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
                </div>
            )}
            
            {/* Contrôles principaux */}
            <div className="flex items-center gap-3 mb-3">
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-benin-green text-white flex items-center justify-center hover:bg-benin-green/90 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Lecture"}
                >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                </button>
                
                <div className="flex-grow flex items-center gap-3">
                    <span className="text-xs text-text-secondary w-10">{formatTime(currentTime)}</span>
                    
                    <div className="flex-grow relative">
                        <input
                            type="range"
                            ref={progressBarRef}
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleProgressChange}
                            className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-benin-green [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full"
                        />
                        <div 
                            className="absolute top-0 left-0 h-1.5 bg-benin-green rounded-full pointer-events-none" 
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                    </div>
                    
                    <span className="text-xs text-text-secondary w-10">{formatTime(duration)}</span>
                </div>
            </div>
            
            {/* Contrôles secondaires */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleMute}
                        className="p-1.5 text-text-secondary hover:text-benin-green transition-colors"
                        aria-label={isMuted ? "Activer le son" : "Désactiver le son"}
                    >
                        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-benin-green [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:rounded-full"
                    />
                </div>
                
                <div className="flex items-center gap-1">
                    {allowDownload && (
                        <motion.button
                            onClick={handleDownload}
                            className="p-2 text-text-secondary hover:text-benin-green transition-colors rounded-full hover:bg-gray-100"
                            aria-label="Télécharger"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={18} />
                        </motion.button>
                    )}
                    
                    {allowShare && (
                        <motion.button
                            onClick={handleShare}
                            className="p-2 text-text-secondary hover:text-benin-green transition-colors rounded-full hover:bg-gray-100"
                            aria-label="Partager"
                            whileTap={{ scale: 0.95 }}
                        >
                            <Share2 size={18} />
                        </motion.button>
                    )}
                </div>
            </div>
        </div>
    );
}