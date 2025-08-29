import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className='text-white fixed w-full z-10 bg-opacity-50 flex'>
      <div className="flex items-center justify-between text-xl">
        <a href="#home" className="m-2 text-lg">
              <img alt="Logo" src={logo} className="animate-pulse h-45 object-scale-down  "  />
        </a>
      </div>
      <ul className="flex center justify-center space-x-4 text-lg bg-black/90 rounded-full py-5 px-3 m-auto">
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#home" className="m-2  ">
          Home
          </a>
        </li>
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#gallery" className="m-2 ">
            Gallery
          </a>
        </li>
        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#bio" className="m-2  ">
            Biography
          </a>
        </li>

        <li className="hover:border-b-2 border-white rounded-s">
          <a href="#contact" className="m-2 ">
            Follow me
          </a>
        </li>

        
      </ul>
      
      </nav>
  );
};

export default Navbar;
// 