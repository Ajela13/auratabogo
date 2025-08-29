import bio1 from '@/assets/images/bio/bio1.svg';
import bio2 from '@/assets/images/bio/bio2.svg';
import audio from '@/assets/intro.wav';
import { PiPlayPauseFill } from "react-icons/pi";
import { useRef } from "react";
import { useAudioStore } from "../../../states/audioStore";

const Biography = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, setPlaying } = useAudioStore();

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="py-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-16">Mi historia</h2>
      <div className="flex  justify-center mb-8">
        <button
          onClick={handlePlayPause}
          className="bg-black flex items-center gap-5 rounded-full w-fit p-5 shadow-lg hover:bg-gray-700 transition-colors "
          aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
        >
          <PiPlayPauseFill size={40} color="#fff" />
          Un click, una historia.
        </button>
        <audio
          ref={audioRef}
          src={audio}
          onEnded={handleEnded}
          style={{ display: "none" }}
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        
        {/* Columna de Imagen Izquierda */}
        <div className="flex justify-center md:justify-end">
          <BioImage
            src={bio1}
            alt="Artista en el estudio"
          />
        </div>
        
        {/* Columna de Texto Central (ocupa 2 columnas en desktop) */}
        <div className="md:col-span-2 text-center md:text-left px-4">
          <p className="text-lg leading-relaxed mb-4">
            Proyecto musical de Sebastián Velásquez. Rapero, actor y creador bogotano que fusiona hip-hop, afro y RnB con poesía urbana y fuerza espiritual. Neurodivergencia, su primer álbum, salió en 2025.
            Auratabogo es rap, alma y resistencia. 
          </p>
          <p className="text-lg leading-relaxed">
            Desde Bogotá, mezcla el beat callejero con sonidos actuales, experimentales, distintos. Llevando el hip-hop a una dimensión espiritual y contestataria.Auratabogo es palabra que despierta, ritmo que sana y fuego que cuestiona.Una voz que libera, observa y vuela.  
          </p>
        </div>
        
        {/* Columna de Imagen Derecha */}
        <div className="flex justify-center md:justify-start">
          <BioImage
            src={bio2}
            alt="Artista en el escenario"
          />
        </div>

      </div>
    </div>
  );
};

// Componente reutilizable para las imágenes con efecto
interface BioImageProps {
  src: string;
  alt: string;
}

const BioImage = ({ src, alt }: BioImageProps) => {
  return (
    <div className="w-64 h-80 overflow-hidden rounded-lg shadow-2xl">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default Biography;