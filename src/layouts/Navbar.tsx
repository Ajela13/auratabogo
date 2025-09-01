import logo from "../assets/logo.svg";
import { useMenuStore } from "../states/menuStore";

const Navbar = () => {
  const { menuOpen, toggleMenu } = useMenuStore();

  return (
    <nav className="text-white fixed w-full z-10 bg-opacity-50 flex justify-between items-center px-4">
      <div className="flex items-center text-xl">
        <a href="#home" className="m-2 text-lg">
          <img alt="Logo" src={logo} className="animate-pulse h-45 object-scale-down" />
        </a>
      </div>
      {/* Botón hamburguesa visible solo en pantallas <700px */}
      <button
        className="max-md:flex md:hidden flex-col justify-center items-center m-4"
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-8 h-1 bg-white mb-1 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>

      </button>
      {/* Menú principal */}
      <ul
        className={`
          flex justify-center space-x-4 text-lg bg-black/90 rounded-full py-5 px-3 m-auto
          transition-all duration-300 ease-in-out
          max-md:flex-col max-md:space-x-0 max-md:space-y-2 max-md:fixed max-md:top-20 max-md:right-4 max-md:bg-black/95 max-md:rounded-xl max-md:py-4 max-md:px-8
          ${menuOpen ? "max-md:opacity-100 max-md:translate-x-0" : "max-md:opacity-0 max-md:translate-x-full"}
        `}
      >
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#home" onClick={toggleMenu} className="m-2  ">
          Inicio
          </a>
        </li>
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#gallery" onClick={toggleMenu} className="m-2 ">
            Escenarios
          </a>
        </li>
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#bio" onClick={toggleMenu} className="m-2  ">
            Mi historia
          </a>
        </li>

        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#contact" onClick={toggleMenu} className="m-2 ">
            Sígueme
          </a>
        </li>

        
      </ul>
      
      </nav>
  );
};

export default Navbar;