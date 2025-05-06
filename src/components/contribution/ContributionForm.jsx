"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle, Info } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import AudioRecorder from './AudioRecorder';

export default function ContributionForm({
    languages = [],
    onSubmit,
    isSubmitting = false
}) {
    // État du formulaire
    const [formData, setFormData] = useState({
        languageId: '',
        phrase: '',
        translation: '',
        audioBlob: null,
        phoneticTranscription: '',
        context: '',
        isNewLanguage: false,
        newLanguageName: '',
        newLanguageRegion: ''
    });
    
    // État des erreurs
    const [errors, setErrors] = useState({});
    
    // État des étapes
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;
    
    // Options de langues pour le select
    const languageOptions = [
        { value: '', label: 'Sélectionnez une langue', disabled: true },
        ...languages.map(lang => ({
            value: lang.id,
            label: lang.name
        })),
        { value: 'new', label: 'Ajouter une nouvelle langue' }
    ];
    
    // Gérer les changements de champs
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'languageId' && value === 'new') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                isNewLanguage: true
            }));
        } else if (name === 'languageId' && value !== 'new') {
            setFormData(prev => ({
                ...prev,
                [name]: value,
                isNewLanguage: false,
                newLanguageName: '',
                newLanguageRegion: ''
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
        
        // Effacer l&apos;erreur correspondante
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    
    // Gérer l&apos;enregistrement audio
    const handleRecordingComplete = (audioBlob) => {
        setFormData(prev => ({
            ...prev,
            audioBlob
        }));
        
        // Effacer l&apos;erreur correspondante
        if (errors.audioBlob) {
            setErrors(prev => ({
                ...prev,
                audioBlob: ''
            }));
        }
    };
    
    // Valider le formulaire pour l&apos;étape actuelle
    const validateCurrentStep = () => {
        let stepErrors = {};
        let isValid = true;
        
        if (currentStep === 1) {
            if (!formData.languageId) {
                stepErrors.languageId = 'Veuillez sélectionner une langue';
                isValid = false;
            }
            
            if (formData.isNewLanguage) {
                if (!formData.newLanguageName) {
                    stepErrors.newLanguageName = 'Veuillez entrer le nom de la langue';
                    isValid = false;
                }
            }
        }
        
        if (currentStep === 2) {
            if (!formData.phrase || formData.phrase.trim() === '') {
                stepErrors.phrase = 'Veuillez entrer une phrase dans la langue sélectionnée';
                isValid = false;
            }
            
            if (!formData.translation || formData.translation.trim() === '') {
                stepErrors.translation = 'Veuillez entrer la traduction française';
                isValid = false;
            }
        }
        
        if (currentStep === 3) {
            if (!formData.audioBlob) {
                stepErrors.audioBlob = 'Veuillez enregistrer un audio pour votre contribution';
                isValid = false;
            }
        }
        
        setErrors(stepErrors);
        return isValid;
    };
    
    // Passer à l&apos;étape suivante
    const goToNextStep = () => {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                setCurrentStep(currentStep + 1);
            }
        }
    };
    
    // Revenir à l&apos;étape précédente
    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    // Soumettre le formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateCurrentStep()) {
            if (onSubmit) {
                onSubmit(formData);
            }
        }
    };
    
    return (
        <div className="bg-white rounded-2xl shadow-custom p-6">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
                Contribuer à la préservation des langues du Bénin
            </h2>
            
            {/* Indicateur d&apos;étape */}
            <div className="mb-8">
                <div className="flex justify-between">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                        <div 
                            key={index} 
                            className="flex-grow relative"
                        >
                            <div 
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                                    currentStep > index + 1
                                        ? 'bg-vert-beninois  border-vert-beninois text-white'
                                        : currentStep === index + 1
                                            ? 'border-vert-beninois text-benin-green'
                                            : 'border-gray-200 text-gray-400'
                                }`}
                            >
                                {index + 1}
                            </div>
                            {index < totalSteps - 1 && (
                                <div 
                                    className={`absolute top-5 left-10 w-[calc(100%-20px)] h-0.5 ${
                                        currentStep > index + 1 ? 'bg-vert-beninois ' : 'bg-gray-200'
                                    }`}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    <div className="text-sm text-text-secondary text-center w-1/3">
                        Choisir une langue
                    </div>
                    <div className="text-sm text-text-secondary text-center w-1/3">
                        Ajouter une phrase
                    </div>
                    <div className="text-sm text-text-secondary text-center w-1/3">
                        Enregistrement audio
                    </div>
                </div>
            </div>
            
            <form onSubmit={handleSubmit}>
                {/* Étape 1: Sélection de la langue */}
                {currentStep === 1 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <Select
                                id="languageId"
                                name="languageId"
                                label="Langue"
                                value={formData.languageId}
                                onChange={handleChange}
                                options={languageOptions}
                                error={errors.languageId}
                                required
                            />
                            
                            {formData.isNewLanguage && (
                                <div className="bg-green-50 p-4 rounded-lg mb-4">
                                    <div className="flex items-start mb-3">
                                        <Info size={18} className="text-benin-green mt-1 mr-2" />
                                        <p className="text-sm text-text-secondary">
                                            Vous ajoutez une nouvelle langue à notre base de données. 
                                            Merci de fournir autant d&apos;informations que possible.
                                        </p>
                                    </div>
                                    
                                    <Input
                                        id="newLanguageName"
                                        name="newLanguageName"
                                        label="Nom de la langue"
                                        value={formData.newLanguageName}
                                        onChange={handleChange}
                                        placeholder="Ex: Fon, Yoruba, Bariba..."
                                        error={errors.newLanguageName}
                                        required
                                    />
                                    
                                    <Input
                                        id="newLanguageRegion"
                                        name="newLanguageRegion"
                                        label="Région principale"
                                        value={formData.newLanguageRegion}
                                        onChange={handleChange}
                                        placeholder="Ex: Atlantique, Zou, Borgou..."
                                        helpText="Région où cette langue est principalement parlée"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
                
                {/* Étape 2: Phrase et traduction */}
                {currentStep === 2 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="space-y-4">
                            <Input
                                id="phrase"
                                name="phrase"
                                label={`Phrase en ${formData.isNewLanguage ? formData.newLanguageName : languages.find(l => l.id === formData.languageId)?.name || 'langue locale'}`}
                                value={formData.phrase}
                                onChange={handleChange}
                                placeholder="Saisissez une phrase, une expression ou un mot"
                                error={errors.phrase}
                                required
                            />
                            
                            <Input
                                id="translation"
                                name="translation"
                                label="Traduction française"
                                value={formData.translation}
                                onChange={handleChange}
                                placeholder="Saisissez la traduction en français"
                                error={errors.translation}
                                required
                            />
                            
                            <Input
                                id="phoneticTranscription"
                                name="phoneticTranscription"
                                label="Transcription phonétique (optionnel)"
                                value={formData.phoneticTranscription}
                                onChange={handleChange}
                                placeholder="Comment se prononce cette phrase"
                                helpText="Aidez les autres à prononcer correctement cette phrase"
                            />
                            
                            <Input
                                id="context"
                                name="context"
                                label="Contexte d&apos;utilisation (optionnel)"
                                value={formData.context}
                                onChange={handleChange}
                                placeholder="Dans quel contexte cette phrase est utilisée"
                                helpText="Ex: salutation formelle, expression courante..."
                            />
                        </div>
                    </motion.div>
                )}
                
                {/* Étape 3: Enregistrement audio */}
                {currentStep === 3 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {errors.audioBlob && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center gap-2">
                                <AlertCircle size={18} />
                                <span>{errors.audioBlob}</span>
                            </div>
                        )}
                        
                        <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                            <p className="font-medium text-text-primary mb-2">
                                Phrase à enregistrer:
                            </p>
                            <p className="text-lg text-benin-green mb-1">
                                {formData.phrase}
                            </p>
                            <p className="text-sm text-text-secondary">
                                {formData.translation}
                            </p>
                        </div>
                        
                        <AudioRecorder
                            onRecordingComplete={handleRecordingComplete}
                        />
                    </motion.div>
                )}
                
                {/* Navigation entre les étapes */}
                <div className="flex justify-between mt-8">
                    <Button 
                        type="button"
                        variant="outline"
                        onClick={goToPreviousStep}
                        disabled={currentStep === 1}
                    >
                        Précédent
                    </Button>
                    
                    {currentStep < totalSteps ? (
                        <Button 
                            type="button"
                            variant="primary"
                            onClick={goToNextStep}
                        >
                            Suivant
                        </Button>
                    ) : (
                        <Button 
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma contribution'}
                            {!isSubmitting && <Upload size={16} className="ml-1" />}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}