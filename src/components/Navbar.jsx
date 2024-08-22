import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className="flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
          <p className="blue-gradient_text">AC</p>
        </div>
        {/* Uncomment the line below if you want to use an image logo */}
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain rounded-full' /> */}
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
