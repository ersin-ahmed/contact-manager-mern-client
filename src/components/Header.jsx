import {
	FaSignInAlt,
	FaSignOutAlt,
	FaUser,
	FaBars,
	FaTimes,
} from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import authStore from '../store/authStore';

const Header = () => {
	const store = authStore();
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<header className='sticky top-0 z-50 flex justify-between items-center p-2 h-16 w-full border-b-2 border-slate-300 bg-slate-200'>
			<Link
				className='bg-gradient-to-r from-amber-500 to-pink-400 p-2 rounded-3xl text-md font-semibold tracking-widest shadow-sm hover:shadow-lg text-white hover:text-gray-600 cursor-pointer'
				to='/'
				onClick={nav && handleClick}
			>
				<span
					onClick={() => {
						window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
					}}
				>
					Contact Manager
				</span>
			</Link>
			<ul className='hidden md:flex font-semibold mr-2'>
				{store.user ? (
					<>
						<li>
							<Link className='flex items-center mx-2' to='/create'>
								<RiContactsFill className='mr-2' />
								Add Contact
							</Link>
						</li>
						<li className='border-l-2 border-gray-500'>
							<Link
								onClick={store.logout}
								className='flex items-center mx-2'
								to='/login'
							>
								<FaSignOutAlt className='mr-2' />
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link className='flex items-center mx-2' to='/login'>
								<FaSignInAlt className='mr-2' />
								Login
							</Link>
						</li>
						<li className='border-l-2 border-gray-500'>
							<Link className='flex items-center mx-2' to='/register'>
								<FaUser className='mr-2' /> Register
							</Link>
						</li>
					</>
				)}
			</ul>
			{/* Hamburger Menu */}
			<div onClick={handleClick} className='md:hidden z-10 pr-1 text-black'>
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>
			{/* Mobile Menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'z-10 absolute flex flex-col shadow-lg rounded-b-xl justify-start items-center top-14 left-0 w-full font-bold bg-slate-200'
				}
			>
				{store.user ? (
					<>
						<li className='text-2xl p-8' onClick={handleClick}>
							<Link className='flex items-center mx-2' to='/create'>
								<RiContactsFill className='mr-2' />
								Add Contact
							</Link>
						</li>
						<li
							className='text-2xl p-8 border-t-2 border-gray-500'
							onClick={handleClick}
						>
							<Link
								onClick={store.logout}
								className='flex items-center mx-2'
								to='/login'
							>
								<FaSignOutAlt className='mr-2' />
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li className='text-2xl p-8' onClick={handleClick}>
							<Link className='flex items-center mx-2' to='/login'>
								<FaSignInAlt className='mr-2' />
								Login
							</Link>
						</li>
						<li
							className='text-2xl p-8 border-t-2 border-gray-500'
							onClick={handleClick}
						>
							<Link className='flex items-center mx-2' to='/register'>
								<FaUser className='mr-2' /> Register
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
};

export default Header;
