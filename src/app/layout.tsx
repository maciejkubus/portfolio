import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '800'],
})

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className} static w-full`}>
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    )
}
