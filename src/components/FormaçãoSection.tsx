import CardProgramacao from './ui/CardProgramacao';

function FormacaoSection() {
    return (
        <div className="flex flex-col justify-start items-center bg-gradient-to-b py-4 px-4 gap-2">
            <CardProgramacao title = "Bem-vindo ao meu portfolio digital." description = "Aqui irei lhe contar um pouco mais sobre quem eu sou. :)" />
            <CardProgramacao title = "Minha Formação: " description = "Estou no 5º período de Sistemas de Informação no Instituto Federal de Sergipe. Sou um desenvolvedor back-end que está aprofundando seus conhecimentos no front-end para me tornar um desenvolvedor Fullstack." />
        </div>


    )
}

export default FormacaoSection;
