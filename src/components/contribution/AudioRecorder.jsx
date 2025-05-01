"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, Square, Play, Pause, Trash2, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

export default function AudioRecorder({ onRecordingComplete }) {
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlobUrl, setAudioBlobUrl] = useState(null);
    const [audioBlob, setAudioBlob] = useState(null);
    const [recordingTime, setRecordingTime] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [error, setError] = useState(null);
    
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioRef = useRef(null);
    const timerRef = useRef(null);

    // Effets pour gérer le timer d'enregistrement
    useEffect(() => {
        if (isRecording) {
            timerRef.current = setInterval(() => {
                setRecordingTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isRecording]);

    // Effets pour gérer l'audio player
    useEffect(() => {
        if (audioRef.current) {
            const handleEnded = () => setIsPlaying(false);
            audioRef.current.addEventListener('ended', handleEnded);
            return () => {
                audioRef.current?.removeEventListener('ended', handleEnded);
            };
        }
    }, [audioBlobUrl]);

    // Formater le temps d'enregistrement
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Démarrer l'enregistrement
    const startRecording = async () => {
        try {
            setError(null);
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioBlob(audioBlob);
                setAudioBlobUrl(audioUrl);
                
                // Arrêter tous les tracks du stream
                stream.getTracks().forEach(track => track.stop());
            };
            
            mediaRecorder.start();
            setIsRecording(true);
            setRecordingTime(0);
            setAudioBlobUrl(null);
            
        } catch (err) {
            console.error('Erreur lors de l\'enregistrement :', err);
            setError("Impossible d'accéder au microphone. Veuillez vérifier les permissions.");
        }
    };

    // Arrêter l'enregistrement
    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    // Gérer la lecture/pause
    const togglePlayback = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Réinitialiser l'enregistrement
    const resetRecording = () => {
        setAudioBlobUrl(null);
        setAudioBlob(null);
        setRecordingTime(0);
        setIsPlaying(false);
    };

    // Envoyer l'enregistrement
    const submitRecording = () => {
        if (audioBlob && onRecordingComplete) {
            onRecordingComplete(audioBlob);
        }
    };

    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-custom">
            {/* Titre et instructions */}
            <h3 className="text-xl font-bold text-text-primary mb-4">
                Enregistrement audio
            </h3>
            <p className="text-text-secondary mb-6">
                Parlez clairement et à une distance d'environ 20 cm du microphone.
            </p>

            {/* Visualisation */}
            <div className="aspect-video bg-gray-50 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                {isRecording ? (
                    <motion.div 
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="w-full flex justify-center items-center gap-2">
                            {/* Animation simplifiée pour les ondes sonores */}
                            {Array.from({ length: 20 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-1 bg-benin-green"
                                    animate={{
                                        height: [20, Math.random() * 60 + 20, 20],
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: i * 0.05,
                                    }}
                                />
                            ))}
                        </div>
                    </motion.div>
                ) : audioBlobUrl ? (
                    <div className="w-full text-center">
                        <audio ref={audioRef} src={audioBlobUrl} className="hidden" />
                        <div className="text-lg text-benin-green font-medium">
                            Enregistrement terminé - {formatTime(recordingTime)}
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <Mic className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-text-secondary">
                            Appuyez sur le bouton d'enregistrement pour commencer
                        </p>
                    </div>
                )}
            </div>

            {/* Affichage du temps */}
            <div className="text-center mb-6">
                <span className="text-xl font-semibold text-text-primary">
                    {formatTime(recordingTime)}
                </span>
            </div>

            {/* Message d'erreur */}
            {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center gap-2">
                    <AlertCircle size={18} />
                    <span>{error}</span>
                </div>
            )}

            {/* Contrôles */}
            <div className="flex justify-center gap-3">
                {!isRecording && !audioBlobUrl && (
                    <Button
                        onClick={startRecording}
                        className="bg-benin-red text-white"
                    >
                        <Mic size={18} />
                        Commencer l'enregistrement
                    </Button>
                )}

                {isRecording && (
                    <Button
                        onClick={stopRecording}
                        className="bg-benin-red text-white"
                    >
                        <Square size={18} />
                        Arrêter
                    </Button>
                )}

                {audioBlobUrl && (
                    <>
                        <Button onClick={togglePlayback} variant="outline">
                            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                            {isPlaying ? 'Pause' : 'Écouter'}
                        </Button>
                        
                        <Button onClick={resetRecording} variant="outline" className="border-benin-red text-benin-red">
                            <Trash2 size={18} />
                            Effacer
                        </Button>
                        
                        <Button onClick={submitRecording} variant="primary">
                            Utiliser cet enregistrement
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}