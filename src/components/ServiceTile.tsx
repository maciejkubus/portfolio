export function ServiceTile({
    title,
    text,
}: Readonly<{
    title: string
    text: string
}>) {
    return (
        <div className="rounded-3xl border-2 border-black p-6 shadow-shadow">
            <h2 className="mb-3 text-2xl font-bold">{title}</h2>
            <div className="text-lg">{text}</div>
        </div>
    )
}
