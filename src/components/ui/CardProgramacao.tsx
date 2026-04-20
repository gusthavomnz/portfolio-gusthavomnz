interface CardProgramacaoProps {
    title: string;
    description: string;
}

function CardProgramacao({ title, description }: CardProgramacaoProps) {
    return (
        <div className="rounded-xl  bg-mist-950 ">
            <div className="rounded-xl bg-mist-900 m-0.5">
            <h1 className="text-gray-300 text-bold px-8 py-2 font-sans leading-relaxed">
                 <p> {title} </p>
                 <p className="font-pixel text-sky-600"> {description} </p>
            </h1>
         </div>
        </div>
    )  
}
export default CardProgramacao