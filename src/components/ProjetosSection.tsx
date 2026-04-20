
function ProjetosSection() {
    return (
        <div className="flex flex-col justify-start items-center bg-white py-10 px-4">
            <h1 className="text-xl md:text-2xl font-bold text-black mb-6">
                Projetos
            </h1>
            
            <div className="w-full max-w-2xl space-y-6">
                <div className="space-y-2">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">
                        GymTracker · github.com/gusthavomnz/gymTracker
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600">Projeto Pessoal · 2025</p>
                    <p className="text-xs md:text-sm text-gray-500">Java · Spring Boot · JWT · MySQL · Docker</p>
                </div>
                
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-gray-800 leading-relaxed px-2">
                    <li>Resolve o problema da estagnação em treinos: sem dados estruturados, atletas não conseguem identificar quando e por que param de evoluir.</li>
                    <li>API REST com autenticação JWT stateless, CRUD completo de treinos e séries organizados por grupo muscular.</li>
                    <li>Engine analítica que converte logs de peso e repetições em indicadores de sobrecarga progressiva e detecção de platôs.</li>
                    <li>Ambiente containerizado com Docker para padronização e portabilidade do ambiente de desenvolvimento.</li>
                </ul>

                <div className="space-y-2 pt-4">
                    <h2 className="text-base md:text-lg font-semibold text-gray-900">
                        Police Tracker
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600">Projeto Acadêmico · 2024</p>
                    <p className="text-xs md:text-sm text-gray-500">FlutterFlow · Firebase · Firestore</p>
                </div>

                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-gray-800 leading-relaxed px-2">
                    <li>Aplicação mobile fullstack com autenticação Firebase e sincronização em tempo real de dados investigativos.</li>
                    <li>Modelagem NoSQL (Firestore) para relacionamentos complexos entre ocorrências, suspeitos e evidências.</li>
                </ul>
            </div>
        </div>
    )
}
export default ProjetosSection;