'use client'

import { FaTimes } from "react-icons/fa"

export function Popup({
	children,
	isOpen,
	togglePopup,
}: Readonly<{
	children: React.ReactNode,
	isOpen: boolean,
	togglePopup: Function,
}>) {

		if(!isOpen) {
			return (<></>)
		} else {
			return (
				<div className="inset-0 fixed bg-opacity-80 bg-black flex justify-center items-center p-0 md:p-8" onClick={() => togglePopup()}>
					<div className="container p-8 rounded-xl bg-white" onClick={e => e.stopPropagation()}>
						<div className="text-2xl flex justify-end">
							<FaTimes onClick={() => togglePopup()} className="cursor-pointer hover:rotate-90 transition-all duration-300"/>
						</div>
						{children}
					</div>
				</div>
			)
		}
}
