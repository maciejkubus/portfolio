import React from 'react'
import Image from 'next/image'
import ContactUsSection from '@/components/ContactUsSection'

const Contact = () => {
    return (
        <main className="container mx-auto px-2 md:px-8 xl:px-12">
            <div className="flex w-full gap-8 py-32">
                <div className="w-1/2 pr-6">
                    <h1 className="text-6xl font-bold leading-normal">
                        Nie wstydź się i skontaktuj się z nami
                    </h1>
                    <p className="my-8 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis cupiditate facere sequi hic exercitationem nisi
                        rem, tempora accusamus aliquid, mollitia suscipit minima
                        neque.
                    </p>
                </div>
                <div className="w-1/2">
                    <Image
                        src="contact.svg"
                        alt="contact us"
                        width={591}
                        height={451}
                    ></Image>
                </div>
            </div>
            <div className="flex w-full gap-8 text-6xl font-bold">
                Komunikacja jest prosta!
            </div>
            <div className="grid w-full grid-cols-2 gap-8 pb-32 pt-8">
                <p className="my-8 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis cupiditate facere sequi hic exercitationem nisi rem,
                    tempora accusamus aliquid, mollitia suscipit minima neque.
                </p>
                <p className="my-8 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis cupiditate facere sequi hic exercitationem nisi rem,
                    tempora accusamus aliquid, mollitia suscipit minima neque.
                </p>
            </div>

            <ContactUsSection />
            <div className="flex h-screen w-full flex-col">
                <div className="flex w-full gap-8 pb-8 text-6xl font-bold">
                    Zobacz gdzie pracujemy
                </div>
                <div className="my-8 h-full w-full rounded-xl bg-gray-500"></div>
            </div>
        </main>
    )
}

export default Contact
