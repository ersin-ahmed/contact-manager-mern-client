import contactStore from '../store/contactStore';
import { IoIosContacts } from 'react-icons/io';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const store = contactStore();

	useEffect(() => {
		store.fetchContacts();
	}, []);

	const navigate = useNavigate();

	return (
		<div className='md:h-full sm:px-2 text-center sm:text-right'>
			<h2 className='flex justify-center items-center text-2xl text-gray-800 text-center font-semibold p-2 my-4 sm:my-8'>
				My Contacts
				<span className='ml-2 text-4xl'>
					<IoIosContacts />
				</span>
			</h2>

			<div className='hidden md:block w-full lg:w-[80vw] mx-auto overflow-x-auto relative shadow-md sm:rounded-2xl'>
				<table className='w-full text-sm text-left '>
					<thead className='uppercase bg-slate-200 h-14'>
						<tr>
							<th scope='col' className='py-3 px-6'>
								Contact Name
							</th>
							<th scope='col' className='py-3 px-6'>
								Phone Number
							</th>
							<th scope='col' className='py-3 px-6'>
								Email
							</th>
							<th scope='col' className='py-3 px-6'>
								Address
							</th>
							<th scope='col' className='py-3 px-6'>
								<span className='sr-only'>Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{store.contacts &&
							store.contacts.map((contact) => {
								return (
									<tr
										key={contact._id}
										className='h-16 border-b text-black bg-slate-50 hover:bg-slate-300'
									>
										<th
											scope='row'
											className='py-4 px-6 font-medium whitespace-nowrap'
										>
											{contact.name}
										</th>
										<td className='py-4 px-6'>{contact.number}</td>
										<td className='py-4 px-6'>{contact.email}</td>
										<td className='py-4 px-6'>{contact.address}</td>
										<td className='py-4 px-6 text-right flex flex-col justify-center items-start'>
											<Link
												onClick={() => store.toggleUpdate(contact)}
												to='/update'
												className='font-medium text-blue-600 dark:text-blue-500 hover:underline px-1'
											>
												Edit
											</Link>
											<Link
												onClick={() => store.toggleDelete(contact)}
												className='font-medium text-red-600 dark:text-red-500 hover:underline px-1'
												to='/delete'
											>
												Delete
											</Link>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			<div className='mt-2 w-full lg:w-[90vw]'>
				<Link
					to='/json'
					className='font-medium text-blue-500 hover:underline p-2'
				>
					Export Contacts as JSON
				</Link>
			</div>
			{/* Mobile Friendly Table */}
			<div className='p-1'>
				{store.contacts &&
					store.contacts.map((contact) => {
						return (
							<div
								key={contact._id}
								className='md:hidden w-full lg:w-[70vw] mx-auto overflow-x-auto relative shadow-md rounded-xl my-4'
							>
								<table className='w-full text-sm text-left'>
									<thead className='uppercase border-slate-300'>
										<tr className='flex justify-start items-center'>
											<th
												scope='row'
												className='bg-slate-200 py-6 h-16 px-6 w-[30%]'
											>
												Contact Name
											</th>
											<td className='font-bold bg-slate-50 text-left py-6 h-16 px-2 w-[70%] border-b-2'>
												{contact.name}
											</td>
										</tr>
										<tr className='flex justify-start items-center'>
											<th
												scope='row'
												className='bg-slate-200 py-6 h-16 px-6 w-[30%]'
											>
												Phone Number
											</th>
											<td className='bg-slate-50 text-left py-6 h-16 px-2 w-[70%]  border-b-2'>
												{contact.number}
											</td>
										</tr>
										<tr className='flex justify-start items-center'>
											<th
												scope='row'
												className='bg-slate-200 py-6 h-16 px-6 w-[30%]'
											>
												Email
											</th>
											<td className='bg-slate-50 text-left py-6 h-16 px-2 w-[70%] border-b-2'>
												{contact.email}
											</td>
										</tr>
										<tr className='flex justify-start items-center'>
											<th
												scope='row'
												className='bg-slate-200 py-6 h-16 px-6 w-[30%]'
											>
												Address
											</th>
											<td className='bg-slate-50 text-left py-6 h-16 px-2 w-[70%]  border-b-2'>
												{contact.address}
											</td>
										</tr>
										<tr className='flex justify-start items-center'>
											<td
												scope='row'
												className='flex justify-center items-center font-bold text-lg bg-slate-300 py-6 h-16 px-6 w-[100%]'
											>
												<Link
													onClick={() => store.toggleUpdate(contact)}
													to='/update'
													className='text-blue-600 dark:text-blue-500 hover:underline px-8'
												>
													EDIT
												</Link>
												<Link
													onClick={() => store.toggleDelete(contact)}
													to='/delete'
													className=' text-red-600 dark:text-red-500 hover:underline px-8'
												>
													DELETE
												</Link>
											</td>
										</tr>
									</thead>
								</table>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Dashboard;
