export default function PersonTile({
    title, 
    text
}: Readonly<{
    title: string,
    text: string
}>) {
    return(
        <div className="p-6 border-2 border-black rounded-3xl shadow-shadow w-full flex flex-col items-center">
            <div className="w-64 h-64 bg-gray-500 rounded-full"></div>  
            <h2 className="font-bold text-3xl mt-7 mb-7">{title}</h2> 
            <p className="text-lg">{text}</p> 
        </div>
    )
}