'use client';

import React, { useState, FormEvent, JSX } from 'react';
import { sendContact, ContactPayload } from '../../services/email';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm(): JSX.Element {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('Consulta sobre productos y presupuestos');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<Status>('idle');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const validateEmail = (v: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

    const resetForm = () => {
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setSubject('Consulta sobre productos y presupuestos');
        setMessage('');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMsg(null);

        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMsg('Completa nombre, correo y mensaje, por favor.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg('Ingresa un correo válido.');
            return;
        }

        setStatus('sending');

        const payload: ContactPayload = {
            name: `${name}${company ? ` — ${company}` : ''}`,
            email,
            phone,
            subject,
            message,
        };

        try {
            await sendContact(payload);
            setStatus('success');
            resetForm();
        } catch (err) {
            console.error('Error enviando contacto:', err);
            setStatus('error');
            setErrorMsg('No se pudo enviar el mensaje. Intenta de nuevo más tarde.');
        }
    };

    return (
        <section className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-sm">
            <header className="flex items-center gap-4 mb-4">
                {/* Logo blanco y negro inline (puedes reemplazar por <img src="/logo.svg" />) */}
                <div aria-hidden className="w-12 h-12 flex items-center justify-center bg-black rounded">
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect width="24" height="24" rx="4" fill="currentColor" />
                        <path d="M6 15L18 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18L9 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14 10l4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div>
                    <h2 className="text-lg font-semibold">Contacto — Ferretería Faustino</h2>
                    <p className="text-sm text-gray-600">Pedidos, presupuestos o consultas técnicas. Respondemos a la brevedad.</p>
                </div>
            </header>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="text-sm text-gray-700 mb-1">Nombre *</span>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nombre y apellido"
                            required
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm text-gray-700 mb-1">Empresa (opcional)</span>
                        <input
                            type="text"
                            value={company}
                            onChange={e => setCompany(e.target.value)}
                            placeholder="Distribuidor / Constructora"
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex flex-col">
                        <span className="text-sm text-gray-700 mb-1">Correo *</span>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="tu@correo.com"
                            required
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm text-gray-700 mb-1">Teléfono</span>
                        <input
                            type="tel"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="+54 9 11 1234 5678"
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </label>
                </div>

                <label className="flex flex-col">
                    <span className="text-sm text-gray-700 mb-1">Asunto</span>
                    <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </label>

                <label className="flex flex-col">
                    <span className="text-sm text-gray-700 mb-1">Mensaje *</span>
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={6}
                        placeholder="Especificá productos, cantidades, o el detalle de tu consulta..."
                        required
                        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-vertical"
                    />
                </label>

                {errorMsg && (
                    <div role="alert" className="text-red-700 bg-red-100 p-2 rounded">
                        {errorMsg}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        aria-busy={status === 'sending'}
                        className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                    </button>

                    {status === 'success' && <span className="text-green-600">¡Mensaje enviado! Te contactamos pronto.</span>}
                    {status === 'error' && <span className="text-red-600">Error al enviar.</span>}
                </div>
            </form>
        </section>
    );
}