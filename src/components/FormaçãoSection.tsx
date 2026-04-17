import logoIF from '../assets/logoIF.png';

function FormacaoSection() {
    return (
        <div className="flex flex-col justify-start items-center  bg-gray-950 h-80">
            <h1 className="text-2xl font-bold text-white">
                Formação
            </h1>
            <h1 className= "text-2xl w-full flex justify-end text-white h-100">
                Sistemas de Informação - Instituto Federal de Sergipe
            </h1>
            <div className="w-full flex justify-end">
                <img src={logoIF} alt="Logo IF" />
            </div>
        </div>
    )
}

export default FormacaoSection;
