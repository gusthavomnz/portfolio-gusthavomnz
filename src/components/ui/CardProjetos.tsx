interface CardProjetosProps {
    title: string;
    description: string;
    stack: string;
}

function CardProjetos({ title, description, stack }: CardProjetosProps) {
    return (
        <div className="rounded-xl bg-mist-900 h-80">
            <div className="rounded-xl bg-mist-950 m-0.5 object-contain h-full w-full p-4">
                <h2 className="text-xl text-white font-bold font-pixel leading-relaxed">{title}</h2>
                <p className="text-gray-300">{description}</p>
                <p className="text-sm text-gray-500 font-pixel mt-2 leading-relaxed">{stack}</p>
            </div>
        </div>
    )
}

export default CardProjetos;