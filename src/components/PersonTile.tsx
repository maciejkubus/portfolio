export default function PersonTile({
    title,
    text,
}: Readonly<{
    title: string
    text: string
}>) {
    return (
        <div className="flex w-full flex-col items-center rounded-3xl border-2 border-black p-6 shadow-shadow">
            <div className="h-64 w-64 rounded-full bg-gray-500"></div>
            <h2 className="mb-7 mt-7 text-3xl font-bold">{title}</h2>
            <p className="text-lg">{text}</p>
        </div>
    )
}
