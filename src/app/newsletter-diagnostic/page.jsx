"use client";

import { useState } from 'react';

export default function NewsletterDiagnostic() {
    const [diagnosticResult, setDiagnosticResult] = useState(null);
    const [testResult, setTestResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const runDiagnostic = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/newsletter');
            const data = await response.json();
            setDiagnosticResult(data);
        } catch (error) {
            setDiagnosticResult({ error: error.message });
        }
        setLoading(false);
    };

    const testNewsletterAPI = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Test Diagnostic',
                    email: 'test@diagnostic.com'
                })
            });
            const data = await response.json();
            setTestResult(data);
        } catch (error) {
            setTestResult({ error: error.message });
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                    Diagnostic Newsletter - Google Sheets
                </h1>

                <div className="space-y-6">
                    {/* Configuration Check */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">1. Vérification de la configuration</h2>
                        <button 
                            onClick={runDiagnostic}
                            disabled={loading}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                        >
                            {loading ? 'Vérification...' : 'Vérifier la configuration'}
                        </button>
                        
                        {diagnosticResult && (
                            <div className="mt-4 p-4 bg-gray-100 rounded">
                                <pre className="text-sm overflow-x-auto">
                                    {JSON.stringify(diagnosticResult, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>

                    {/* API Test */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-4">2. Test de l'API Newsletter</h2>
                        <button 
                            onClick={testNewsletterAPI}
                            disabled={loading}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
                        >
                            {loading ? 'Test en cours...' : 'Tester l\'inscription'}
                        </button>
                        
                        {testResult && (
                            <div className="mt-4 p-4 bg-gray-100 rounded">
                                <pre className="text-sm overflow-x-auto">
                                    {JSON.stringify(testResult, null, 2)}
                                </pre>
                            </div>
                        )}
                    </div>

                    {/* Instructions */}
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4 text-yellow-800">Instructions pour Google Apps Script</h2>
                        <ol className="list-decimal list-inside space-y-2 text-yellow-700">
                            <li>Allez sur <a href="https://script.google.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">script.google.com</a></li>
                            <li>Créez un nouveau projet et collez le code fourni</li>
                            <li>Déployez comme "Application web"</li>
                            <li>Permissions : "Exécuter en tant que moi" et "Accessible à tous"</li>
                            <li>Copiez l'URL de déploiement dans votre .env.local</li>
                        </ol>
                        
                        <div className="mt-4 p-4 bg-gray-800 text-white rounded text-sm overflow-x-auto">
                            <div className="text-green-400 mb-2">// Code Google Apps Script :</div>
                            <pre>{`function doPost(e) {
  try {
    const SHEET_ID = '184DgTJas-jlk8NiLU1evfxMg65xKyEquTe4_yZPgfWI';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date', 'Nom', 'Email', 'Source']);
    }
    
    const newRow = [
      new Date(data.timestamp),
      data.name,
      data.email,
      data.source
    ];
    
    sheet.appendRow(newRow);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Données ajoutées avec succès'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}