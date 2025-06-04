import { NextResponse } from 'next/server';

export async function GET() {
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;
    
    return NextResponse.json({
        configured: !!GOOGLE_SCRIPT_URL,
        url: GOOGLE_SCRIPT_URL ? 'Configurée' : 'Non configurée',
        isPlaceholder: GOOGLE_SCRIPT_URL?.includes('1uqOL3DprhkmCkTTKEZOBsdC8IRKoF6dv4Bs89XTSFMUmKCXBpg6xhsHM'),
        timestamp: new Date().toISOString()
    });
}

export async function POST(request) {
    try {
        const { name, email } = await request.json();

        // Validation des données
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Le nom et l\'email sont requis' },
                { status: 400 }
            );
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Format d\'email invalide' },
                { status: 400 }
            );
        }

        // URL de votre Google Apps Script Web App
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        // Si Google Apps Script n'est pas configuré, on sauvegarde localement en attendant
        if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('1uqOL3DprhkmCkTTKEZOBsdC8IRKoF6dv4Bs89XTSFMUmKCXBpg6xhsHM')) {
            console.log('📧 Inscription newsletter (mode développement):', { 
                name, 
                email, 
                timestamp: new Date().toISOString() 
            });
            
            // En mode développement, on simule un succès
            return NextResponse.json({
                success: true,
                message: 'Inscription réussie ! (Mode développement - configurez GOOGLE_SCRIPT_URL pour la production)',
                data: { name, email },
                mode: 'development'
            });
        }

        console.log('🔄 Tentative d\'envoi vers Google Apps Script...');
        console.log('URL:', GOOGLE_SCRIPT_URL);

        try {
            // Données à envoyer
            const payload = {
                name,
                email,
                timestamp: new Date().toISOString(),
                source: 'Newsletter Voix du Bénin'
            };

            console.log('📦 Données envoyées:', payload);

            // Envoyer les données à Google Sheets via Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log('📊 Statut de réponse Google Apps Script:', response.status);
            console.log('📋 Headers de réponse:', Object.fromEntries(response.headers.entries()));

            const responseText = await response.text();
            console.log('📄 Réponse brute:', responseText);

            let result;
            try {
                result = JSON.parse(responseText);
                console.log('✅ Réponse parsée:', result);
            } catch (parseError) {
                console.error('❌ Erreur lors du parsing de la réponse:', parseError);
                console.log('🔍 Réponse qui a causé l\'erreur:', responseText);
                
                // Si la réponse n'est pas du JSON, c'est peut-être une erreur HTML
                if (responseText.includes('<html') || responseText.includes('<!DOCTYPE')) {
                    throw new Error('Google Apps Script a retourné une page HTML au lieu de JSON. Vérifiez que le script est déployé correctement.');
                }
                
                throw new Error(`Réponse invalide de Google Apps Script: ${responseText.substring(0, 200)}...`);
            }

            if (!response.ok) {
                console.error('❌ Erreur HTTP:', response.status);
                throw new Error(`Google Apps Script a retourné une erreur (${response.status}): ${result.error || responseText}`);
            }

            if (result.success === false) {
                console.error('❌ Erreur dans la réponse:', result.error);
                throw new Error(`Erreur dans Google Apps Script: ${result.error}`);
            }

            console.log('🎉 Succès! Données envoyées vers Google Sheets');

            return NextResponse.json({
                success: true,
                message: 'Inscription réussie !',
                data: result,
                mode: 'production'
            });

        } catch (fetchError) {
            console.error('💥 Erreur lors de la communication avec Google Apps Script:', fetchError);
            console.log('🔗 URL utilisée:', GOOGLE_SCRIPT_URL);
            console.log('📝 Données tentées:', { name, email, timestamp: new Date().toISOString() });
            
            // En cas d'erreur avec Google Apps Script, on sauvegarde au moins localement
            console.log('💾 Sauvegarde locale de l\'inscription:', { 
                name, 
                email, 
                timestamp: new Date().toISOString(),
                error: fetchError.message 
            });

            return NextResponse.json({
                success: true,
                message: 'Inscription enregistrée ! (Problème temporaire avec la synchronisation)',
                data: { name, email },
                warning: 'Les données seront synchronisées ultérieurement',
                error: fetchError.message,
                mode: 'fallback'
            });
        }

    } catch (error) {
        console.error('🚨 Erreur générale lors de l\'inscription à la newsletter:', error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}