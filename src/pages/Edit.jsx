import { FaUser } from 'react-icons/fa';
import contactStore from '../store/contactStore';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
	const store = contactStore();
	const navigate = useNavigate('/');

	const onSubmit = async (e) => {
		e.preventDefault();
		await store.updateContact();
		navigate('/');
	};

	return (
		<>
			<section className='w-full max-w-sm text-center m-8'>
				<h1 className='flex flex-col justify-center items-center m-2 text-xl font-semibold'>
					<FaUser /> Edit Contact
				</h1>
			</section>
			<section className='w-full max-w-sm'>
				<form
					onSubmit={onSubmit}
					className='bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4'
				>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='name'
						>
							Name
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							id='name'
							name='name'
							value={store.toBeUpdated.name}
							placeholder='Edit Name'
							onChange={store.handleToggleUpdate}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='number'
						>
							Number
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							id='number'
							name='number'
							value={store.toBeUpdated.number}
							placeholder='Edit Number'
							onChange={store.handleToggleUpdate}
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
							value={store.toBeUpdated.email}
							placeholder='Edit Email'
							onChange={store.handleToggleUpdate}
						/>
					</div>
					<div className='mb-4'>
						<label
							className='block text-gray-700 text-sm font-bold mb-2'
							htmlFor='address'
						>
							Address
						</label>
						<input
							className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							id='address'
							name='address'
							value={store.toBeUpdated.address}
							placeholder='Edit Address'
							onChange={store.handleToggleUpdate}
						/>
					</div>

					<div className='pt-4 flex justify-center'>
						<input
							className='cursor-pointer bg-amber-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline" type="button'
							type='submit'
							value='Edit'
						/>
					</div>
				</form>
				{store.message ? store.message : ''}
			</section>
		</>
	);
};

export default Edit;
