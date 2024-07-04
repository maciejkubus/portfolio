export default function ProjectTile({
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
            <p className="text-lg">{text}</p>
        </div>
    )
}
