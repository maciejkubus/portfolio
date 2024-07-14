import Project from '@/components/Project'
import Image from 'next/image'


export default function Portfolio() {
    return (
      <main className="container mx-auto px-2 md:px-8 xl:px-12">
            <div className="flex w-full gap-8 py-16 md:py-32">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-6xl font-bold leading-normal">
                        Przejrzyj nasze
                        <br />
                        projekty i przekonaj
                        <br /> się co tworzymy
                    </h1>
                    <p className="my-8 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis cupiditate facere sequi hic exercitationem nisi
                        rem, tempora accusamus aliquid, mollitia suscipit minima
                        neque.
                    </p>
                </div>
                <div className="hidden md:flex w-full md:w-1/2">
                    <Image
                        src="projekty.svg"
                        alt="computer"
                        width={591}
                        height={451}
                    ></Image>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 pb-32 pt-4 md:pt-8">
              <Project
                title="Projekt #1"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
              <Project
                title="Projekt #2"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
              <Project
                title="Projekt #3"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
              <Project
                title="Projekt #4"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
              <Project
                title="Projekt #5"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
              <Project
                title="Projekt #6"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque"
              ></Project>
            </div>
      </main>
    )
}