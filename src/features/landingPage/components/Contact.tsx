import { FaInstagram, FaYoutube, FaSpotify, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="py-20 text-center text-white">
      <h2 className="text-4xl font-bold mb-15">Sígueme</h2>
   
      
      {/* Contenedor de los íconos de redes sociales */}
      <div className="flex justify-center items-center space-x-8">
        <SocialIcon href="https://www.instagram.com/auratabogo/?igsh=dHZtNWszd2owNTAy&utm_source=qr#" icon={<FaInstagram size={40} />} />
        <SocialIcon href="https://www.tiktok.com/@auratabogo?_t=ZS-8zEtuv0x9QG&_r=1" icon={<FaTiktok size={40} />} />
        <SocialIcon href="https://youtube.com/@auratabogo?si=mamOnRPxaOQuudg9" icon={<FaYoutube size={40} />} />
        <SocialIcon href="https://open.spotify.com/artist/3jSaEwHt3xkuS6Sm9oY6GZ?si=AqAAwrmsR-OWslJasISEBA " icon={<FaSpotify size={40} />} />
        <SocialIcon href="https://www.facebook.com/share/16FYvV9cZi/?mibextid=wwXIfr" icon={<FaFacebookF size={40} />} />
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