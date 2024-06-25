export function ServiceTile({
    title, 
    text
}: Readonly<{
    title: string,
    text: string
}>) {
    return (
        <div className="p-6 border-2 border-black rounded-3xl shadow-shadow">
            <h2 className="font-bold text-2xl mb-3">
                {title}
            </h2>
            <div className="text-lg">
                {text}
            </div>
        </div>
    )
}