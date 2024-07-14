import Image from 'next/image'

export default function Team() {
    return (
      <main className="container mx-auto px-2 md:px-8 xl:px-12">
      <div className="flex w-full gap-8 py-16 md:py-32">
      <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-bold leading-normal">
              Poznaj nasz zespół
              <br />
              i przekonaj się
              <br /> kim jesteśmy
          </h1>
          <p className="my-8 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quis cupiditate facere sequi hic exercitationem nisi
              rem, tempora accusamus aliquid, mollitia suscipit minima
              neque.
          </p>
      </div>
      <div className="hidden md:w-1/2">
          <Image
              src="team.svg"
              alt="computer"
              width={591}
              height={451}
          ></Image>
      </div>
  </div>
  <div className="flex w-full gap-8 text-3xl md:text-6xl font-bold mb-4">
        Nasz wyjątkowy zespół
    </div>
    <div className="flex flex-col md:flex-row gap-8 text-base md:text-xl mt-8">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus praesentium quasi nostrum eligendi animi nesciunt vitae at repudiandae esse eum, fugiat sapiente autem quidem vel deleniti minima facilis natus distinctio.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo consequuntur iusto beatae pariatur ab. Saepe maiores consequatur commodi reprehenderit a quas sit rerum similique amet, vero, laudantium sapiente pariatur incidunt!</p>
    </div>
    <div className="flex gap-8 mt-8 flex-col md:flex-row">
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-1/3">
            <div className='bg-slate-400 rounded-2xl h-80'></div>
        </div>
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-2/3">
            <div className="text-5xl font-bold mt-4">Imię i nazwisko</div>
            <div className="text-2xl mt-4">Pozycja</div>
            <div className="text-xl mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci pariatur. Ab aut similique distinctio tempore amet impedit aspernatur maiores consequuntur minima rerum cupiditate alias, atque totam reiciendis sint eius?</div>
        </div>
    </div>
    <div className="flex gap-8 mt-8 flex-col md:flex-row">
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-2/3">
            <div className="text-5xl font-bold mt-4">Imię i nazwisko</div>
            <div className="text-2xl mt-4">Pozycja</div>
            <div className="text-xl mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci pariatur. Ab aut similique distinctio tempore amet impedit aspernatur maiores consequuntur minima rerum cupiditate alias, atque totam reiciendis sint eius?</div>
        </div>
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-1/3">
            <div className='bg-slate-400 rounded-2xl h-80'></div>
        </div>
    </div>
    <div className="flex gap-8 my-8 flex-col md:flex-row">
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-1/3">
            <div className='bg-slate-400 rounded-2xl h-80'></div>
        </div>
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow w-full md:w-2/3">
            <div className="text-5xl font-bold mt-4">Imię i nazwisko</div>
            <div className="text-2xl mt-4">Pozycja</div>
            <div className="text-xl mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, adipisci pariatur. Ab aut similique distinctio tempore amet impedit aspernatur maiores consequuntur minima rerum cupiditate alias, atque totam reiciendis sint eius?</div>
        </div>
    </div>
  </main>
    )
}