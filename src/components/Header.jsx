import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authStore from '../store/authStore';

const Header = () => {
	const store = authStore();

	return (
		<header className='flex justify-between items-center p-2 h-16 w-full border-b-2 border-slate-300 bg-slate-200'>
			<Link
				className='bg-gradient-to-r from-amber-500 to-pink-400 p-2 rounded-3xl text-md font-semibold tracking-widest shadow-sm hover:shadow-lg text-white hover:text-blue-500 cursor-pointer'
				to='/'
			>
				Contact Manager
			</Link>
			<ul className='flex mr-2'>
				{store.user ? (
					<li>
						<Link
							onClick={store.logout}
							className='flex items-center mx-2'
							to='/login'
						>
							<FaSignOutAlt className='mr-2' />
							Logout
						</Link>
					</li>
				) : (
					<>
						<li>
							<Link className='flex items-center mx-2' to='/login'>
								<FaSignInAlt className='mr-2' />
								Login
							</Link>
						</li>
						<li>
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
