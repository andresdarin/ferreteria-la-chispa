// Servicio para enviar formularios usando EmailJS (Next.js + TypeScript).
// Coloca en: src/services/email.ts
// Variables de entorno (en .env.local):
// NEXT_PUBLIC_EMAILJS_SERVICE_ID
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
// NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export type ContactPayload = {
    name: string;
    email: string;
    message: string;
    phone?: string;
    subject?: string;
};

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Tipo para la respuesta de EmailJS
type EmailJSResponse = {
    status: number;
    text: string;
};

// Tipo para el módulo EmailJS
type EmailJSModule = {
    send: (
        serviceID: string,
        templateID: string,
        templateParams: Record<string, string>,
        publicKey: string
    ) => Promise<EmailJSResponse>;
};

export async function sendContact(payload: ContactPayload): Promise<EmailJSResponse> {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error(
            'EmailJS no está configurado. Define NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID y NEXT_PUBLIC_EMAILJS_PUBLIC_KEY en .env.local'
        );
    }

    // Import dinámico para evitar problemas con SSR en Next.js
    const mod = await import('@emailjs/browser');

    // El módulo puede exportar como default o como funciones nombradas según la versión
    const emailjs: EmailJSModule =
        (mod && typeof mod.send === 'function') ? mod : (mod.default || mod);

    const templateParams = {
        from_name: payload.name,
        from_email: payload.email,
        message: payload.message,
        phone: payload.phone ?? '',
        subject: payload.subject ?? 'Contacto desde la landing',
    };

    return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}