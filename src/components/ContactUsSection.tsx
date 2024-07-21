import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur elementum, felis ac elementum efficitur,
                        sapien tellus eleifend enim, quis consequat lorem metus
                        nec tortor. Morbi eu sem in quam cursus sodales. Donec
                        commodo felis ac elit porta malesuada. Aenean vel
                        dignissim erat, vitae auctor quam.
                    </p>
                    <div className="grid w-full grid-cols-2 gap-2 pb-32 pt-8">
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
