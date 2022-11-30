import contactStore from '../store/contactStore';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';

const headers = [
	{ label: 'Name', key: 'name' },
	{ label: 'Number', key: 'number' },
	{ label: 'Email', key: 'email' },
	{ label: 'Address', key: 'address' },
];

const Csv = () => {
	const navigate = useNavigate();

	const store = contactStore();

	const data = store.contacts;

	console.log(data);

	const csvReport = {
		data: data,
		headers: headers,
		filename: 'My_Contacts.csv',
	};

	return (
		<div>
			<div className='w-full max-w-sm'>
				<div className='bg-white shadow-lg rounded-md px-8 pt-8 mt-32'>
					<h1 className='text-center text-gray-800 text-4xl font-bold mb-2'>
						Download CSV File?
					</h1>
					<div className='flex justify-center items-center p-8 text-2xl'>
						<button className='m-4 cursor-pointer bg-sky-500 hover:bg-amber-500 text-white font-bold py-2 px-10 rounded-md focus:outline-none focus:shadow-outline" type="button'>
							<CSVLink {...csvReport}>Export to CSV</CSVLink>
						</button>
						<button
							className='m-4 cursor-pointer bg-red-500 hover:bg-amber-500 text-white font-bold py-6 px-10 rounded-md focus:outline-none focus:shadow-outline" type="button'
							onClick={() => navigate('/')}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Csv;
