export default function ProjectTile({
    title, 
    text
}: Readonly<{
    title: string,
    text: string
}>) {
    return(
        <div className="p-6 border-2 border-black rounded-3xl shadow-shadow w-full">
            <div className="w-full h-64 bg-gray-500 rounded-xl "></div>
            <h2 className="font-bold text-3xl my-4">{title}</h2>
            <p className="text-lg">{text}</p> 
        </div>
    )
}