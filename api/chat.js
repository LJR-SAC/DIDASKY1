// api/chat.js - Endpoint backend para Vercel
export default async function handler(req, res) {
    // Habilitar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }
    
    const { prompt } = req.body;
    if (!prompt) {
        return res.status(400).json({ error: 'Falta el prompt' });
    }
    
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
    if (!OPENROUTER_API_KEY) {
        return res.status(500).json({ error: 'API Key no configurada en Vercel' });
    }
    
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': process.env.VERCEL_URL || 'https://didasky.vercel.app',
                'X-Title': 'Didasky'
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-v4-flash:free",
                messages: [
                    {
                        role: 'system',
                        content: 'Eres Dasky, asistente educativo de Didasky. NUNCA des respuestas directas; solo pistas o análisis de error.'
                    },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.75,
                max_tokens: 10000
            })
        });
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || 'Error en OpenRouter');
        }
        
        res.status(200).json({ content: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
