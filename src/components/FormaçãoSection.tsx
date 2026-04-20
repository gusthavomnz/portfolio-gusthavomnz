import logoIF from '../assets/logoIF.png';
import CardProgramacao from './ui/CardProgramacao';

function FormacaoSection() {
    return (
        <div className="flex flex-col justify-start items-center bg-mist-800 py-4 px-4">
            <CardProgramacao title = "BEM-VINDO" description = "Sistema para gerenciamento de projetos" />
        </div>
    )
}

export default FormacaoSection;
