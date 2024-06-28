import ArticleTile from "@/components/ArticleTile";
import PersonTile from "@/components/PersonTile";
import ProjectTile from "@/components/ProjectTile";
import { ServiceTile } from "@/components/ServiceTile";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-2 md:px-8 xl:px-12">
      <div className="py-32 w-full flex gap-8">
        <div className="w-1/2">
          <h1 className="font-bold text-6xl leading-normal">
            Zbudujemy razem<br /> 
            twoje miejsce<br />
            w internecie
          </h1>
          <p className="text-xl my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque.
          </p>
          <div className="flex gap-8">
            <button className="bg-primary rounded-xl font-bold px-6 py-3 text-white">Skontaktuj się z nami</button>
            <button className="border-black border-2 rounded-xl px-6 py-3 font-bold">Zobacz nasze prace</button>
          </div>
        </div>
        <div className="w-1/2"> 
          <Image src="computer.svg" alt="computer" width={591} height={451}></Image>
        </div>
      </div>
      <div className="py-32 w-full flex gap-8">
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
      <div className="w-full flex gap-8 font-bold text-6xl">Kilka naszych projektów</div>
      <div className="pt-8 pb-32 w-full grid grid-cols-2 gap-8">
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
        <button className="bg-primary rounded-xl font-bold px-8 py-4 text-white text-2xl">Zobacz wszystkie projekty</button>
      </div>
      <div className="w-full flex gap-8 font-bold text-6xl">Nasz wyjątkowy zespół</div>
      <div className="pb-32 pt-8 w-full flex gap-7 my-7">
        <PersonTile
          title="Astoria Bublas"
          text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem.">
        </PersonTile>
        <PersonTile
          title="Maciej Kubus"
          text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem.">
        </PersonTile>
        <PersonTile
          title="Julia Dmytrenko"
          text="Lorem ipsum dolor sit amet facere et consectetur adipisicing elit. Quisis cupiditate facere seq exercitationem.">
        </PersonTile>
      </div>
      <div className="w-full flex gap-8 font-bold text-6xl">Aktualności</div>
      <div className="pt-8 pb-32 w-full grid grid-cols-2 gap-8">
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
        <button className="bg-primary rounded-xl font-bold px-8 py-4 text-white text-2xl">Przejdź do naszego bloga</button>
      </div>
    </main>
  );
}
