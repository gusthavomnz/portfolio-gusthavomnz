import javaicon from '../assets/javaicon.png';
import reacticon from '../assets/reacticon.png';
import springicon from '../assets/springicon.png';
import giticon from '../assets/giticon.png';
import tailwindicon from '../assets/tailwindicon.png';
import postmanicon from '../assets/postmanicon.png';
import postgreicon from '../assets/postgreicon.png';
import mysqlicon from '../assets/mysqlicon.png';
import tslogo from '../assets/tslogo.png';
import viteicon from '../assets/viteicon.png';


function TecBanner() {
    const icons = [
        { src: javaicon, alt: "java" },
        { src: reacticon, alt: "react" },
        { src: springicon, alt: "spring" },
        { src: giticon, alt: "git" },
        { src: tailwindicon, alt: "tailwind" },
        { src: postmanicon, alt: "postman" },
        { src: postgreicon, alt: "postgres" },
        { src: mysqlicon, alt: "mysql" },
        { src: tslogo, alt: "typescript" },
        { src: viteicon, alt: "vite" },
    ];
    
    return (
        <div className="overflow-hidden bg-sky-950 py-4">
            <div className="flex w-[500%] animate-marquee">
                <div className="flex gap-12 min-w-max w-[100%]">
                    {[...icons, ...icons, ...icons, ...icons, ...icons].map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} 
                        className="h-12 w-12 object-contain"/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TecBanner;