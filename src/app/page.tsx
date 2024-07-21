import ArticleTile from '@/components/ArticleTile'
import ContactUsSection from '@/components/ContactUsSection'
import PersonTile from '@/components/PersonTile'
import ProjectTile from '@/components/ProjectTile'
import { ServiceTile } from '@/components/ServiceTile'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="container mx-auto px-2 md:px-8 xl:px-12">
            <div className="flex w-full flex-col gap-16 py-16 md:flex-row md:py-32">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold leading-normal md:text-6xl">
                        Zbudujemy razem
                        <br />
                        twoje miejsce
                        <br />w internecie
                    </h1>
                    <p className="my-8 text-xl">
                        Jesteśmy młodą załogą, która pomoże ci zbudować Twój wizerunek w sieci. Przyniesiemy twojej firmie kreatywne i nieszablonowe pomysły. Czekamy na Ciebie!
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
                <div className="hidden w-full md:flex md:w-1/2">
                    <Image
                        src="computer.svg"
                        alt="computer"
                        width={591}
                        height={451}
                    ></Image>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-8 py-32">
                <ServiceTile
                    title="Strony internetowe"
                    text="Tworzymy strony dopasowane do Twoich potrzeb. Wizerunek w sieci jest istotnym elementem prezentacji Twojej firmy."
                ></ServiceTile>
                <ServiceTile
                    title="E-commerce"
                    text="Pomożemy Ci sprzedać Twoje produkty w internecie. Nasze sklepy są łatwe w obsłudze."
                ></ServiceTile>
                <ServiceTile
                    title="Web Development"
                    text="Jesteśmy Ci w stanie zaproponować inne usługi z zakresu obsługi systemów informatycznych."
                ></ServiceTile>
            </div>
            <div className="flex w-full gap-8 text-3xl font-bold md:text-6xl">
                Kilka naszych projektów
            </div>
            <div className="grid w-full grid-cols-1 gap-8 pb-16 pt-8 md:grid-cols-2 md:pb-32">
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
            <div className="flex justify-center pb-8 md:pb-16">
                <button className="text-1xl rounded-xl bg-primary px-4 py-4 font-bold text-white md:px-8 md:text-2xl">
                    Zobacz wszystkie projekty
                </button>
            </div>
            <div className="flex w-full gap-4 text-3xl font-bold md:gap-8 md:text-6xl">
                Nasz wyjątkowy zespół
            </div>
            <div className="my-0 flex w-full flex-col gap-7 pb-32 pt-8 md:my-7 md:flex-row">
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
            <div className="flex w-full gap-8 text-3xl font-bold md:text-6xl">
                Aktualności
            </div>
            <div className="grid w-full grid-cols-1 gap-8 pb-32 pt-8 md:grid-cols-2">
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
                <button className="text-1xl rounded-xl bg-primary px-8 py-4 font-bold text-white md:text-2xl">
                    Przejdź do naszego bloga
                </button>
            </div>
            <ContactUsSection />
        </main>
    )
}
