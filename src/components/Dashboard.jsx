import contactStore from '../store/contactStore';
import { useEffect } from 'react';

const Dashboard = () => {
	const store = contactStore();

	useEffect(() => {
		store.fetchContacts();
		console.log(store.contacts);
	}, []);

	return (
		<div>
			<h1>
				{store.contacts &&
					store.contacts.map((contact) => {
						return (
							<div key={contact._id}>
								<h1>{contact.name}</h1>
								<h1>{contact.number}</h1>
								<h1>{contact.email}</h1>
								<h1>{contact.address}</h1>
							</div>
						);
					})}
			</h1>
		</div>
	);
};

export default Dashboard;
