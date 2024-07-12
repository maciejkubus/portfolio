export default function Project({
    title,
    text,
}: Readonly<{
    title: string
    text: string
}>) {
    return (
        <div className="w-full rounded-3xl border-2 border-black p-6 shadow-shadow">
            <div className="h-64 w-full rounded-xl bg-gray-500"></div>
            <h2 className="my-4 text-3xl font-bold">{title}</h2>
            <div className="flex gap-4 mb-4">
                <div className="bg-red-600 rounded-full py-1 px-2 ">HTML</div>
                <div className="bg-green-400 rounded-full py-1 px-2 ">CSS</div>
                <div className="bg-amber-300 rounded-full py-1 px-2 ">JavaScript</div>
                <div className="bg-cyan-400 rounded-full py-1 px-2 ">React</div>
            </div>
            <p className="text-lg">{text}</p>
            <div className="flex justify-end">
                <button className="bg-primary text-white rounded-xl p-3 mt-4">Przejdź do projektu</button>
            </div>        
        </div>
    )
}