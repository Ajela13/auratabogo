import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' font-montserrat text-white p-8 '>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#home" className="m-2 text-lg ">
          <Link to="/" className=''>Home</Link> 
          </a>
        </li>
        <li>
          <a href="#gallery" className="m-2 text-lg ">
            Gallery
          </a>
        </li>
        <li>
          <a href="#bio" className="m-2 text-lg ">
            Biography
          </a>
        </li>
        
        <li>
          <a href="#contact" className="m-2 text-lg">
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
// 