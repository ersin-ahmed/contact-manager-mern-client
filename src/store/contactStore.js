import create from 'zustand';
import axios from 'axios';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const authStore = create((set) => ({
	contacts: null,

	createForm: {
		name: '',
		number: '',
		email: '',
		address: '',
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
}));

export default authStore;
