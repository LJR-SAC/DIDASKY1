// IA.js - Ahora llama a tu propio backend en Vercel
export async function callOpenRouter(prompt) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error en el servidor');
        }
        
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error llamando a Dasky:', error);
        throw new Error('No pude conectar con Dasky. Revisa tu conexión.');
    }
}