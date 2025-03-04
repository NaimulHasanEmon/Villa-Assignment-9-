import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../../public/image/Logo&FavIcon/Logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { RxAvatar } from "react-icons/rx";

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
      {user && (
        <>
          <li>
            <NavLink
              to='/properties'
              className='hover:text-teal-500 hover:bg-white'
            >
              Properties
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              to='/agents'
              className='hover:text-teal-500 hover:bg-white'
            >
              Agents
            </NavLink>
          </li>
        </>
      )}
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
            <div className='w-20 hidden md:flex'>
              <Link to='/'>
                <img src={logo} alt='Logo' />
              </Link>
            </div>
            <div>
              <Link to='/' className='text-2xl uppercase font-bold'>
                Elara&apos;Villa
              </Link>
            </div>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex gap-6 px-1 nav-options text-[22px]'>
            {navLinks}
          </ul>
        </div>

        <div className='navbar-end flex gap-2'>
          {/* User Profile Logo */}
          {/* className={`${
              user.photoURL ? `title:${user.name}` : "hover:Name Undefined"
            }`} */}
          <div
            title={`${
              user
                ? user.photoURL
                  ? user.displayName
                  : "User Name Undefined"
                : "User not logged in"
            }`}
          >
            {user ? (
              user.photoURL ? (
                <>
                  <div className='avatar'>
                    <div className='w-9 rounded-full'>
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    {/* Batman DP (default for user login but have no profile pic) */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      height='40'
                      viewBox='0 0 48 48'
                    >
                      <path
                        fill='#263238'
                        d='M35.4 41L34 27 14 27 12.6 41 6 47 42 47z'
                      ></path>
                      <path
                        fill='#455a64'
                        d='M36,17c0,0-0.3-9-12-9s-12,9-12,9c0,6.6,2,17.3,2.8,20.8c0.2,0.7,0.6,1.4,1.2,1.8l5.5,3.9 c0.3,0.2,0.7,0.4,1.2,0.4h2.7c0.4,0,0.8-0.1,1.2-0.4l5.5-3.9c0.6-0.4,1-1.1,1.2-1.8C34,34.3,36,23.6,36,17z'
                      ></path>
                      <path
                        fill='#607d8b'
                        d='M24,33v-7.3L22,25l-1.7,6.9C21.7,32.5,23.2,33,24,33z'
                      ></path>
                      <path
                        fill='#37474f'
                        d='M33 23l-7 2 1.7 6.9 1.8 9.6 2.5-1.8c.6-.4 1-1.1 1.2-1.8.4-2 1.3-6.4 1.9-11l0 0c.1-.8.2-1.6.3-2.4 0 0 0 0 0 0 .1-.8.2-1.6.3-2.4L33 23zM15 23l7 2-1.7 6.9-1.8 9.6L16 39.7c-.6-.4-1-1.1-1.2-1.8-.4-2-1.3-6.4-1.9-11l0 0c-.1-.8-.2-1.6-.3-2.4 0 0 0 0 0 0-.1-.8-.2-1.6-.3-2.4L15 23z'
                      ></path>
                      <path
                        fill='#fff'
                        d='M26 25l7-2c0 0-2 3-4 3S26 25 26 25zM22 25l-7-2c0 0 2 3 4 3S22 25 22 25z'
                      ></path>
                      <path
                        fill='#455a64'
                        d='M12 17c0-7 2-16 2-16l3 9-4 7H12zM36 17c0-7-2-16-2-16l-3 9 4 7H36z'
                      ></path>
                      <path
                        fill='#607d8b'
                        d='M17.7,12c0,0,2.3-2,6.3-2s6.3,2,6.3,2l0.8-2.4C29.4,8.6,27.1,8,24,8s-5.4,0.6-7.1,1.6L17.7,12z'
                      ></path>
                      <path
                        fill='#ffb74d'
                        d='M16,30c0,0,6,3,8,3s8-3,8-3l-2,11.2l-3.5,2.4c-0.3,0.3-0.8,0.4-1.2,0.4h-2.7c-0.4,0-0.9-0.1-1.2-0.4 L18,41.1L16,30z'
                      ></path>
                      <path
                        fill='#fb8c00'
                        d='M20.4,37.7l-0.9-1.8c0.1,0,1.8-0.9,4.4-0.9c2.6,0,4.4,0.9,4.4,0.9l-0.9,1.8c0,0-1.4-0.7-3.6-0.7 C21.9,37,20.5,37.7,20.4,37.7z'
                      ></path>
                    </svg>
                  </div>
                </>
              )
            ) : (
              <>
                <RxAvatar className='text-4xl' />
              </>
            )}
          </div>
          <div>
            {user ? (
              <>
                <Link to='/' onClick={handleLogOut} className='button-login'>
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
      </div>
      <ToastContainer position='bottom-right' />
    </div>
  );
};

export default Header;
