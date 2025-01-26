import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to=''
          className='nav-options text-lg hover:text-teal-500 hover:bg-white'
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/properties'
          className='nav-options text-lg hover:text-teal-500 hover:bg-white'
        >
          Properties
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/agents'
          className='nav-options text-lg hover:text-teal-500 hover:bg-white'
        >
          Agents
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/about'
          className='nav-options text-lg hover:text-teal-500 hover:bg-white'
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/contact'
          className='nav-options text-lg hover:text-teal-500 hover:bg-white'
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              {navLinks}
            </ul>
          </div>
          <a className='btn btn-ghost text-2xl uppercase font-bold'>Villa</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end'>
          <Link to='/' className='button-login'>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
