import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "/Image/Logo&FavIcon/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logout successful");
        // console.log("Logout successful");
      })
      .catch((error) => {
        toast.error("Logout failed because of ", error);
        // console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to='' className='hover:text-teal-500 hover:bg-white'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/properties'
          className='hover:text-teal-500 hover:bg-white'
        >
          Properties
        </NavLink>
      </li>
      <li>
        <NavLink to='/agents' className='hover:text-teal-500 hover:bg-white'>
          Agents
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className='hover:text-teal-500 hover:bg-white'>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to='/contact' className='hover:text-teal-500 hover:bg-white'>
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to='/errorTest' className='hover:text-teal-500 hover:bg-white'>
          Error Page
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className='navbar bg-base-100 border-b-2 my-4'>
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
              className='text-xl nav-options menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              {navLinks}
            </ul>
          </div>
          <div className='flex items-center'>
            <div className='w-20'>
              <Link to='/'>
                <img src={logo} alt='Logo' />
              </Link>
            </div>
            <div>
              <Link to='/' className='text-2xl uppercase font-bold'>
                Villa
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex gap-6 px-1 nav-options text-[22px]'>
            {navLinks}
          </ul>
        </div>
        <div className='navbar-end'>
          {user ? (
            <>
              <Link
                to='/'
                onClick={handleLogOut}
                className='button-login'
              >
                <span>Logout</span>
              </Link>
            </>
          ) : (
            <>
              <Link to='/login' className='button-login'>
                <span>Login</span>
              </Link>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Header;
