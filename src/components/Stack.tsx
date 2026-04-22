import CardProgramacao from './ui/CardProgramacao';
import habtecnicas from '../assets/habtecnicas.png';    

function Stack() {
    return (
        <div>
            <img src={habtecnicas} alt="Habilidades Técnicas" className="h-56 w-auto mx-auto -mt-13" />
            <div className="flex flex-col bg-white px-4 gap-1 -mt-10">
                <CardProgramacao title="Backend" description="Backend: Java · Spring Boot · Spring Security · JPA/Hibernate · API REST" />
                <CardProgramacao title="Frontend" description="Frontend: React · TypeScript · Tailwind CSS" />
                <CardProgramacao title="Banco de Dados" description="PostgreSQL · MySQL · NoSQL (Firestore) · Modelagem Relacional · SQL DDL/DML" />
                <CardProgramacao title="DevOps" description="DevOps & Tools: Docker · Git · GitHub · Maven · Render · Postman · Vercel" />
            </div>
        </div>
    )
}

export default Stack;