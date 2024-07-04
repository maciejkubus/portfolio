import ArticleTile from '@/components/ArticleTile'
import ContactUsSection from '@/components/ContactUsSection'
import PersonTile from '@/components/PersonTile'
import ProjectTile from '@/components/ProjectTile'
import { ServiceTile } from '@/components/ServiceTile'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="container mx-auto px-2 md:px-8 xl:px-12">
            <div className="flex w-full gap-8 py-32">
                <div className="w-1/2">
                    <h1 className="text-6xl font-bold leading-normal">
                        Zbudujemy razem
                        <br />
                        twoje miejsce
                        <br />w internecie
                    </h1>
                    <p className="my-8 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis cupiditate facere sequi hic exercitationem nisi
                        rem, tempora accusamus aliquid, mollitia suscipit minima
                        neque.
                    </p>
                    <div className="flex gap-8">
                        <button className="rounded-xl bg-primary px-6 py-3 font-bold text-white">
                            Skontaktuj się z nami
                        </button>
                        <button className="rounded-xl border-2 border-black px-6 py-3 font-bold">
                            Zobacz nasze prace
                        </button>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="computer.svg"
                        alt="computer"
                        width={591}
                        height={451}
                    ></Image>
                </div>
            </div>
            <div className="flex w-full gap-8 py-32">
                <ServiceTile
                    title="Strony internetowe"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque."
                ></ServiceTile>
                <ServiceTile
                    title="E-commerce"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque."
                ></ServiceTile>
                <ServiceTile
                    title="Web Development"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque."
                ></ServiceTile>
            </div>
            <div className="flex w-full gap-8 text-6xl font-bold">
                Kilka naszych projektów
            </div>
            <div className="grid w-full grid-cols-2 gap-8 pb-32 pt-8">
                <ProjectTile
                    title="Projekt #1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ProjectTile>
                <ProjectTile
                    title="Projekt #2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ProjectTile>
                <ProjectTile
                    title="Projekt #3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ProjectTile>
                <ProjectTile
                    title="Projekt #4"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ProjectTile>
            </div>
            <div className="flex justify-center pb-16">
                <button className="rounded-xl bg-primary px-8 py-4 text-2xl font-bold text-white">
                    Zobacz wszystkie projekty
                </button>
            </div>
            <div className="flex w-full gap-8 text-6xl font-bold">
                Nasz wyjątkowy zespół
            </div>
            <div className="my-7 flex w-full gap-7 pb-32 pt-8">
                <PersonTile
                    title="Astoria Bublas"
                    text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem."
                ></PersonTile>
                <PersonTile
                    title="Maciej Kubus"
                    text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem."
                ></PersonTile>
                <PersonTile
                    title="Julia Dmytrenko"
                    text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem."
                ></PersonTile>
            </div>
            <div className="flex w-full gap-8 text-6xl font-bold">
                Aktualności
            </div>
            <div className="grid w-full grid-cols-2 gap-8 pb-32 pt-8">
                <ArticleTile
                    title="Artykuł #1"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ArticleTile>
                <ArticleTile
                    title="Artykuł #2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
                ></ArticleTile>
            </div>
            <div className="flex justify-center pb-16">
                <button className="rounded-xl bg-primary px-8 py-4 text-2xl font-bold text-white">
                    Przejdź do naszego bloga
                </button>
            </div>
            <ContactUsSection />
        </main>
    )
}
