import create from 'zustand';
import axios from 'axios';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

const authStore = create((set) => ({
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',

	userData: {
		username: '',
		email: '',
		password: '',
	},

	loginData: {
		email: '',
		password: '',
	},

	// Set userData state from Register Form
	setUserData: (e) => {
		const { name, value } = e.target;
		set((state) => {
			return {
				userData: {
					...state.userData,
					[name]: value,
				},
			};
		});
	},

	// Set loginData state from Login Form
	setLoginData: (e) => {
		const { name, value } = e.target;
		set((state) => {
			return {
				loginData: {
					...state.loginData,
					[name]: value,
				},
			};
		});
	},

	// Register user
	register: async () => {
		try {
			const { userData } = authStore.getState();
			const response = await axios.post('/api/users/', userData);
			set({
				user: response.data.username,
				userData: {
					username: '',
					email: '',
					password: '',
				},
				message: '',
			});
			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
				localStorage.setItem(
					'username',
					JSON.stringify(response.data.username)
				);
				localStorage.setItem('email', JSON.stringify(response.data.email));
				localStorage.setItem('id', JSON.stringify(response.data._id));
				localStorage.setItem('token', JSON.stringify(response.data.token));
			}
		} catch (error) {
			console.log(error);
			set({
				userData: {
					username: '',
					email: '',
					password: '',
				},
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString(),
			});
		}
	},

	login: async () => {
		try {
			const { loginData } = authStore.getState();
			const response = await axios.post('/api/users/login', loginData);
			set({
				user: response.data.username,
				loginData: {
					email: '',
					password: '',
				},
			});
			if (response.data) {
				localStorage.setItem('user', JSON.stringify(response.data));
				localStorage.setItem(
					'username',
					JSON.stringify(response.data.username)
				);
				localStorage.setItem('email', JSON.stringify(response.data.email));
				localStorage.setItem('id', JSON.stringify(response.data._id));
				localStorage.setItem('token', JSON.stringify(response.data.token));
			}
		} catch (error) {
			console.log(error);
			set({
				loginData: {
					email: '',
					password: '',
				},
				message:
					(error.response &&
						error.response.data &&
						error.response.data.message) ||
					error.message ||
					error.toString(),
			});
		}
	},

	logout: () => {
		set({
			user: '',
			loginData: {
				email: '',
				password: '',
			},
		});
		localStorage.removeItem('user');
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		localStorage.removeItem('id');
		localStorage.removeItem('token');
	},

	reset: () => {
		set({
			isError: false,
			isSuccess: false,
			isLoading: false,
			message: '',
		});
	},
}));

export default authStore;
