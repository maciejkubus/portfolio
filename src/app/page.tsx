import { Nav } from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="px-16 py-32 w-full flex gap-8">
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
    </main>
  );
}
