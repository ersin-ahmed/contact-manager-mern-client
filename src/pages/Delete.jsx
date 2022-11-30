import contactStore from '../store/contactStore';
import { useNavigate } from 'react-router-dom';

const Delete = () => {
	const store = contactStore();
	const navigate = useNavigate('/');

	const deleteContact = () => {
		store.deleteContact(store.toBeDeleted);
		navigate('/');
	};

	return (
		<div className='w-full max-w-sm'>
			<div className='bg-white shadow-lg rounded-md px-8 pt-8 mt-32'>
				<h1 className='text-center text-gray-800 text-4xl font-bold mb-2'>
					Delete Contact?
				</h1>
				<div className='flex justify-center items-center p-8 text-3xl'>
					<button
						className='m-4 cursor-pointer bg-emerald-500 hover:bg-amber-500 text-white font-bold py-4 px-12 rounded-md focus:outline-none focus:shadow-outline" type="button'
						onClick={deleteContact}
					>
						Yes
					</button>
					<button
						className='m-4 cursor-pointer bg-red-500 hover:bg-amber-500 text-white font-bold py-4 px-12 rounded-md focus:outline-none focus:shadow-outline" type="button'
						onClick={() => navigate('/')}
					>
						No
					</button>
				</div>
			</div>
		</div>
	);
};

export default Delete;
