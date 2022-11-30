import create from 'zustand';
import axios from 'axios';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const contactStore = create((set) => ({
	contacts: null,

	toBeCreated: {
		name: '',
		number: '',
		email: '',
		address: '',
	},

	toBeDeleted: {
		_id: '',
	},

	toBeUpdated: {
		_id: '',
		name: '',
		number: '',
		email: '',
		address: '',
	},

	// Creates new contact in DB
	createContact: async () => {
		try {
			const { toBeCreated, contacts } = contactStore.getState();
			const token = localStorage.getItem('token').replace(/"/g, '');
			const response = await axios.post(`/api/contacts/`, toBeCreated, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			set({
				toBeCreated: {
					name: '',
					number: '',
					email: '',
					address: '',
				},
			});
		} catch (error) {
			console.log(error);
		}
	},

	// State handler for Create Fields
	handleToggleCreate: (e) => {
		const { value, name } = e.target;

		set((state) => {
			return {
				toBeCreated: {
					...state.toBeCreated,
					[name]: value,
				},
			};
		});
	},

	// Fetch contacts from DB
	fetchContacts: async () => {
		try {
			const token = localStorage.getItem('token').replace(/"/g, '');
			const response = await axios.get('/api/contacts', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			set({ contacts: response.data });
		} catch (error) {
			console.log(error);
		}
	},

	// Sets up state for deletion of contact from DB
	toggleDelete: ({ _id }) => {
		set({
			toBeDeleted: {
				_id,
			},
		});
	},

	// Delete contact from DB
	deleteContact: async ({ _id }) => {
		try {
			const token = localStorage.getItem('token').replace(/"/g, '');
			const response = await axios.delete(`/api/contacts/${_id}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			// Update state
			const { contacts } = contactStore.getState();
			const newContacts = contacts.filter((contact) => {
				return contact._id !== _id;
			});
			set({ contacts: newContacts });
		} catch (error) {
			console.log(error);
		}
	},

	// Sets up state for update of contact
	toggleUpdate: ({ _id, name, number, email, address }) => {
		set({
			toBeUpdated: {
				_id,
				name,
				number,
				email,
				address,
			},
		});
	},

	// State handler for Update Fields
	handleToggleUpdate: (e) => {
		const { value, name } = e.target;

		set((state) => {
			return {
				toBeUpdated: {
					...state.toBeUpdated,
					[name]: value,
				},
			};
		});
	},

	// Update contact
	updateContact: async () => {
		try {
			const {
				toBeUpdated: { _id, name, number, email, address },
				contacts,
			} = contactStore.getState();
			// Send the update request
			const token = localStorage.getItem('token').replace(/"/g, '');
			const response = await axios.put(
				`/api/contacts/${_id}`,
				{
					name,
					number,
					email,
					address,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			// Update state
			const newContacts = contacts.filter((contact) => {
				return contact._id !== _id;
			});
			set({
				contacts: newContacts,
				toBeUpdated: {
					_id: null,
					name: '',
					number: '',
					email: '',
					address: '',
				},
			});
		} catch (error) {
			console.log(error);
		}
	},
}));

export default contactStore;
