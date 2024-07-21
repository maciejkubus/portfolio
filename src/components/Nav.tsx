'use client'

import Link from 'next/link'
import { Navbar } from 'flowbite-react'
import { Button } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'
import { Popup } from './Popup'
import ContactUsSection from './ContactUsSection'
import { useState } from 'react'

const customTheme: CustomFlowbiteTheme['navbar'] = {
    collapse: {
        list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium items-stretch md:items-center ',
    },
    link: {
        base: 'flex justify-center md:block py-2 pl-3 pr-4 md:p-0',
    },
}

export function Nav() {
		const [popupOpen, setPopupOpen] = useState(false);
		const togglePopup = () => {
			setPopupOpen(!popupOpen);

			if(popupOpen) {
				document.body.style.overflowY = "auto"
			} else {
				document.body.style.overflowY = "hidden"
			}
		}

    return (
			<>
        <Navbar fluid rounded theme={customTheme}>
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
                    GenZ Coding
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link as={Link} href="/">
                    Strona Główna
                </Navbar.Link>
                <Navbar.Link as={Link} href="/portfolio">
                    Nasze Portfolio
                </Navbar.Link>
                <Navbar.Link as={Link} href="/team">
                    Nasz Zespół
                </Navbar.Link>
                <Navbar.Link as={Link} href="/contact">
                    Kontakt
                </Navbar.Link>
                <button className="rounded-xl border-2 border-black px-6 py-3 font-bold" onClick={togglePopup}>
										Bezpłatna wycena
								</button>
            </Navbar.Collapse>
        </Navbar>
				<Popup isOpen={popupOpen} togglePopup={togglePopup}>
					<ContactUsSection />
				</Popup>
			</>
    )
}
