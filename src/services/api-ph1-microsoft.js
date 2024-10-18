import { HfInference } from "@huggingface/inference"

const HF_ACCES_TOKEN = "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"
const inference = new HfInference(HF_ACCES_TOKEN)
const modelo = "microsoft/Phi-3-mini-4k-instruct"

/**
 * Función para realizar la solicitud de chat de forma continua (streaming) usando Hugging Face.
 * @param {Array} messages - Un arreglo de mensajes que contiene el historial de la conversación.
 * @param {number} maxTokens - El número máximo de tokens a generar en la respuesta.
 * @returns {Promise<string>} - Una promesa que se resuelve con el mensaje completo generado por el modelo.
 */
export async function streamChatCompletion(messages, maxTokens = 500, use_cache = true) {
    let fullMessage = ''; // Variable para almacenar el mensaje completo

    try {
        for await (const chunk of inference.chatCompletionStream({
            model: modelo,
            messages: messages,
            max_tokens: maxTokens,
        }, {
            use_cache: use_cache,
        })) {
            // Concatenamos el contenido generado en cada fragmento al mensaje completo
            fullMessage += chunk.choices[0]?.delta?.content || '';
        }
    } catch (error) {
        console.error("Error en streamChatCompletion:", error);
    }
    return fullMessage; // Retornamos el mensaje completo generado por el modelo
}

const mensajes = [{ role: "user", content: "What is the capital of France?" }];

async function main() {
    const respuesta = await streamChatCompletion(mensajes);
    console.log(respuesta);
}

