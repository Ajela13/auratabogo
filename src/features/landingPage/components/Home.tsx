import video from "../../../assets/video.mp4";
import image1 from "../../../assets/images/home/homeImage1.svg";
import image2 from "../../../assets/images/home/homeImage2.svg";
import image3 from "../../../assets/images/home/homeImage3.svg";

const Home = () => {
  return (
  <div className="flex flex-col items-center  backdrop-blur-sm  rounded-lg shadow-lg mt-25">
    <div className=" relative flex flex-col items-center justify-center h-[70vh]  bg-gray-200 w-[70vw] m-auto shadow-lg rounded-lg mt-10">
      <video src={video}  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg " muted  autoPlay loop></video>
    </div>
    <div className="font-montserrat text-white min-h-screen mt-15  flex items-center p-4 sm:p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="relative h-96 w-full flex items-center justify-center">
              <img alt="Hip-Hop Aura" className="w-62 h-62 object-cover rounded-2xl shadow-xl absolute top-0 left-4 transform -rotate-12 transition-transform duration-300 hover:rotate-0 hover:scale-105" src={image1} />
              <img alt="Bio" className="w-70 h-auto object-contain rounded-2xl shadow-xl absolute bottom-0 right-4 transform rotate-6 transition-transform duration-300 hover:rotate-0 hover:scale-105 z-10" src={image3} />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Raíz Sonora</h2>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Crear una experiencia sonora que combine rap, afro y RnB con poesía urbana, espiritualidad y pensamiento crítico. A través de letras profundas, ritmos experimentales y una puesta en escena auténtica, Auratabogo busca expresar lo contestatario como un lenguaje universal que despierte conciencia, conecte almas y transforme realidades.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Proyección</h2>
              <p className="text-sm sm:text-base text-justify leading-relaxed">
                Ser un referente artístico de vanguardia en la música latinoamericana, donde la lírica sea tan poderosa como el ritmo y la puesta en escena. Convertir a Auratabogo en un puente entre el arte callejero y la espiritualidad contemporánea, inspirando procesos de sanación, reflexión social y liberación creativa en Colombia y el mundo.
              </p>
            </div>
            <div>
              <img alt="kid" className="w-full h-auto max-h-96 object-cover rounded-2xl shadow-xl" src={image2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
     
  );
};

export default Home;
  