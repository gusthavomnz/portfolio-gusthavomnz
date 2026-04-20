interface CardProgramacaoProps {
    title: string;
    description: string;
}

function CardProgramacao({ title, description }: CardProgramacaoProps) {
    return (
        <div className="rounded-xl  bg-mist-900 ">
            <div className="rounded-xl bg-mist-950 m-0.5">
            <h1 className="text-gray-200 text- px-8 py-2 leading-relaxed">
                 <p> {title} </p>
                 <p className="font-pixel text-mist-500"> {description} </p>
            </h1>
         </div>
        </div>
    )  
}
export default CardProgramacao