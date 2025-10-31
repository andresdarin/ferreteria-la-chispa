'use client';

import React, { useState, FormEvent, JSX } from 'react';
import { sendContact, ContactPayload } from '../../services/email';
import Image from 'next/image';
import ContactSidebar from './ContactSidebar';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm(): JSX.Element {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
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
        setSubject('');
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
        <section
            className="bg-[#E5E7EB] rounded-b-4xl py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 flex flex-col items-center"
            id="contacto"
        >
            <div className="flex flex-row sm:flex-row items-center gap-4 mb-8 bg-[#171611] rounded-full px-6 py-3 text-[#E5E7EB] w-full max-w-7xl">
                <div aria-hidden className="w-12 h-12 flex flex-col items-center justify-center shrink-0">
                    <Image
                        src="/img/chispa.ico"
                        alt="Logo La Chispa"
                        width={48}
                        height={48}
                    />
                </div>

                <div className="text-center sm:text-left">
                    <h2 className="text-xl sm:text-3xl lg:text-[2rem] text-[#f5f5f5] uppercase font-light leading-tight">
                        Contacto
                    </h2>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col md:flex-row gap-10 w-full max-w-7xl"
            >
                {/* Formulario */}
                <div className="space-y-8 basis-full md:basis-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label htmlFor="name" className="flex flex-col">
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Nombre y apellido"
                                required
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none"
                            />
                        </label>

                        <label htmlFor="company" className="flex flex-col">
                            <input
                                id="company"
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                placeholder="Empresa (opcional)"
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none"
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label htmlFor="email" className="flex flex-col">
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="tu@correo.com"
                                required
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none"
                            />
                        </label>

                        <label htmlFor="phone" className="flex flex-col">
                            <input
                                id="phone"
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="(+598) 099 123 456"
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none"
                            />
                        </label>
                    </div>

                    <label htmlFor="subject" className="flex flex-col">
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            placeholder="Asunto (opcional)"
                            className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none"
                        />
                    </label>

                    <label htmlFor="message" className="flex flex-col">
                        <textarea
                            id="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows={6}
                            placeholder="Especificá productos, cantidades, o el detalle de tu consulta..."
                            required
                            className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none resize-none"
                        />
                    </label>

                    {errorMsg && (
                        <div
                            role="alert"
                            className="text-red-700 bg-red-100 p-2 rounded text-sm sm:text-base"
                        >
                            {errorMsg}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-end">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            aria-busy={status === 'sending'}
                            className="inline-flex items-center px-6 py-2 bg-[#171611] text-[#E5E7EB] rounded-md font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:bg-[#2a2820] transition-colors"
                        >
                            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                        </button>

                        {status === 'success' && (
                            <span className="text-green-600 text-center sm:text-left">
                                ¡Mensaje enviado! Te contactamos pronto.
                            </span>
                        )}
                        {status === 'error' && (
                            <span className="text-red-600 text-center sm:text-left">
                                Error al enviar.
                            </span>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="basis-full md:basis-1/3">
                    <ContactSidebar />
                </div>
            </form>
        </section>
    );
}