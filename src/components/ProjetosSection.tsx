import CardProgramacao from './ui/CardProgramacao';
function ProjetosSection() {
    return (
        <div className="flex flex-col  bg-white py-2 px-4 gap-2">
            <h1 className="text-3xl mx-auto md:text-4xl font-pixel text-black mb-6">
                HABILIDADES TECNICAS
            </h1>
            <CardProgramacao title = "Backend" description = " Backend: Java · Spring Boot · Spring Security · JPA/Hibernate · API REST" />
             <CardProgramacao title = "Frontend" description = " Frontend: React · TypeScript · Tailwind CSS" />
             <CardProgramacao title = "Banco de Dados" description = "PostgreSQL · MySQL · NoSQL (Firestore) · Modelagem Relacional · SQL DDL/DML" />
            <CardProgramacao title = "DevOps" description = "DevOps & Tools: Docker · Git · GitHub · Maven · Render · Postman · Vercel" />
        </div>
    )
}
export default ProjetosSection;