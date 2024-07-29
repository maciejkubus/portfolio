import React from 'react'
import { CiLinkedin, CiMail, CiPhone } from 'react-icons/ci'
import ContactForm from './ContactForm'

const ContactUsSection = () => {
    return (
        <div>
            <div className="grid w-full grid-cols-1 gap-8 pb-32 pt-8 lg:grid-cols-2">
                <div>
                    <h3 className="mb-8 flex w-full gap-8 text-6xl font-bold">
                        Odezwij się do nas
                    </h3>
                    <p>
											Chętnie odpowiemy na wszystkie Twoje pytania i wątpliwości. Skontaktuj się z nami, korzystając z formularza obok lub bezpośrednio wysyłając e-mail na nasz adres. Odpowiemy na Twoją wiadomość najszybciej jak to możliwe.
                    </p>
                    <div className="grid w-full grid-cols-2 gap-4 pb-32 pt-8">
												<div className="flex items-center">
                            <CiMail className="mr-1 inline h-9 w-9" />
                            <a href="mailto:astoriastar@email.com">astoriastar@email.com</a>
                        </div>
												<div className="flex items-center">
                            <CiPhone className="mr-1 inline h-9 w-9" />
                            <a href="tel:+48 570 277 237">+48 570 277 237</a>
                        </div>
                        <div className="flex items-center">
                            <CiLinkedin className="mr-1 inline h-9 w-9" />
                            <span>LinkedIn</span>
                        </div>
                        <div className="flex items-center">
                            <CiLinkedin className="mr-1 inline h-9 w-9" />
                            <span>LinkedIn</span>
                        </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default ContactUsSection
