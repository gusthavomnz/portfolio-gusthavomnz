import fotopixel from '../assets/nomeempixel.png';


function HeroSection() {
    return (
    <div className="flex flex-col justify-center items-center bg-white">
      <h1 className="h-48 w-120 op">
        <img src={fotopixel} alt="Nome Empixel" />
      </h1>
      <h1 className="text-2xl font-light text-gray-600 invisible">
        <li> .   </li>
      </h1>
    </div>
)}

export default HeroSection;