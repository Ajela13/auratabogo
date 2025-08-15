import { FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Sígueme</h2>
      <p className="text-lg mb-12 max-w-2xl mx-auto">
        Conéctate y sé el primero en saber sobre nueva música, próximos shows y proyectos creativos.
      </p>
      
      {/* Contenedor de los íconos de redes sociales */}
      <div className="flex justify-center items-center space-x-8">
        <SocialIcon href="https://instagram.com" icon={<FaInstagram size={40} />} />
        <SocialIcon href="https://twitter.com" icon={<FaTwitter size={40} />} />
        <SocialIcon href="https://youtube.com" icon={<FaYoutube size={40} />} />
        <SocialIcon href="https://spotify.com" icon={<FaSpotify size={40} />} />
      </div>
    </div>
  );
};

// Componente reutilizable para cada ícono social con su efecto
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-white transition-all duration-300 ease-in-out hover:text-purple-400 hover:scale-125"
    >
      {icon}
    </a>
  );
};

export default Contact;