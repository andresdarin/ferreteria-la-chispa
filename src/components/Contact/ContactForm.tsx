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
        <section className="mx-auto bg-[#E5E7EB] rounded-b-4xl px-40 py-40 flex items-center justify-center flex-col">
            <header className="flex items-center gap-4 mb-4 bg-[#171611] rounded-full px-4 py-2 text-[#E5E7EB] w-7xl">
                <div aria-hidden className="w-12 h-12 flex items-center justify-center">
                    <Image
                        src="/img/chispa.ico"
                        alt="Logo La Chispa "
                        width={48}
                        height={48}
                    />
                </div>

                <div>
                    <h2 className="text-[3rem] text-[#F1DE6E] relative pt-0 uppercase font-light">Contacto</h2>
                </div>
            </header>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col  md:flex-row gap-6 w-7xl">
                <div className='space-y-8 basis-3/4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <label className="flex flex-col">
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Nombre y apellido"
                                required
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none "
                            />
                        </label>

                        <label className="flex flex-col">
                            <input
                                type="text"
                                value={company}
                                onChange={e => setCompany(e.target.value)}
                                placeholder="Empresa (opcional)"
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2  focus:outline-none "
                            />
                        </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className="flex flex-col">
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="tu@correo.com"
                                required
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2  focus:outline-none "
                            />
                        </label>

                        <label className="flex flex-col">
                            <input
                                type="tel"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="+54 9 11 1234 5678"
                                className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2  focus:outline-none "
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <input
                            type="text"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2  focus:outline-none "
                        />
                    </label>

                    <label className="flex flex-col">
                        <textarea
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            rows={6}
                            placeholder="Especificá productos, cantidades, o el detalle de tu consulta..."
                            required
                            className="bg-[#E5E7EB] text-gray-500 border-b-2 border-[#171611] px-3 py-2 focus:outline-none resize-none"
                        />
                    </label>

                    {errorMsg && (
                        <div role="alert" className="text-red-700 bg-red-100 p-2 rounded">
                            {errorMsg}
                        </div>
                    )}

                    <div className="flex items-center gap-4 justify-end">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            aria-busy={status === 'sending'}
                            className="inline-flex items-center  px-4 py-2 bg-[#171611] text-[#E5E7EB] rounded-md font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                        </button>

                        {status === 'success' && <span className="text-green-600">¡Mensaje enviado! Te contactamos pronto.</span>}
                        {status === 'error' && <span className="text-red-600">Error al enviar.</span>}
                    </div>
                </div>
                <div className='basis-1/3'>
                    <ContactSidebar />
                </div>
            </form>
        </section>


    );
}