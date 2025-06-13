import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='  text-black p-8 '>
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#home" className="m-2 text-lg ">
          <Link to="/" className=''>Home</Link> 
          </a>
        </li>
        <li>
          <a href="#galery" className="m-2 text-lg ">
            Galery
          </a>
        </li>
        <li>
          <a href="#Bio" className="m-2 text-lg ">
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