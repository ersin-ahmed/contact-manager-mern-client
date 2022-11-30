import { FaUser } from 'react-icons/fa';
import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const store = authStore();

	const navigate = useNavigate();

	const onSubmit = async (e) => {
		e.preventDefault();
		if (store.userData.email) {
			await store.register();
			navigate('/login');
		} else if (!store.userData.email) {
			await store.register();
			navigate('/register');
		}
	};

	return (
		<>
			<section className='w-full max-w-sm text-center m-8'>
				<h1 className='flex flex-col justify-center items-center m-2 text-xl font-semibold'>
					<FaUser /> Register
				</h1>
				<p className='text-xl font-semibold'>Please Create An Account</p>
			</section>
			<section className='w-full max-w-sm'>
				<form
					onSubmit={onSubmit}
					className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4'
				>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='username'
						>
							Username
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							id='username'
							name='username'
							value={store.userData.username}
							placeholder='Enter Username'
							onChange={store.setUserData}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='email'
						>
							Email
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='email'
							id='email'
							name='email'
							value={store.userData.email}
							placeholder='Enter Email'
							onChange={store.setUserData}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='password'
						>
							Password
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='password'
							id='password'
							name='password'
							value={store.userData.password}
							placeholder='Enter Password'
							onChange={store.setUserData}
						/>
					</div>

					<div className='pt-4 flex justify-center'>
						<input
							className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button'
							type='submit'
							value='Register'
						/>
					</div>
					{store.message && (
						<p className='text-center pt-4 font-semibold text-red-500 animate-pulse'>
							Please Fill Out All Fields Accordingly!
						</p>
					)}
				</form>
			</section>
		</>
	);
};

export default Register;
