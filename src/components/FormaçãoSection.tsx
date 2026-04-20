import logoIF from '../assets/logoIF.png';

function FormacaoSection() {
    return (
        <div className="flex flex-col justify-start items-center bg-amber-100 py-10 px-4">
            <h1 className="text-xl md:text-2xl font-bold text-black-bold mb-4">
                Formação
            </h1>
            <h2 className= "text-lg md:text-xl font-medium text-black-bold sm:px-10 px-4 text-center">
                Sistemas de Informação - Instituto Federal de Sergipe
                </h2>
        
                <p className= "text-xs md:text-base lg:text-lg flex justify-end lg:px-25 sm:px-10 px-4 text-gray-800 leading-relaxed">
                Desenvolvedor backend com foco em Java e Spring Boot, com projetos próprios que envolvem autenticação JWT, APIs REST e
                analytics de dados. Stack complementar em Docker, React, TypeScript e Tailwind CSS. Cursando Sistemas de Informação no IFS (5º
                período) e buscando primeira oportunidade formal na área.

            </p>
            <div className="w-full flex justify-end">
                <img src={logoIF} alt="Logo IF" />
            </div>
        </div>
    )
}

export default FormacaoSection;
