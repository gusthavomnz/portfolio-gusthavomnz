import CardProjetos from "./ui/CardProjetos";
import meusProjetos from "../assets/meusprojetos.png";


function Projetos() {
    return (
        <div>
            <img src={meusProjetos} alt="Projetos" className="h-32 w-auto mx-auto p-2" />
            <div className="flex flex-col bg-white px-4 gap-2">
                <CardProjetos 
                    title="GymTracker" 
                    description="API REST feita em Java/Spring Boot para transformar logs de treino em analytics de perfomance" 
                    stack="Java, Spring Boot e MySQL" 
                />
            </div>
        </div>
    )
}

export default Projetos