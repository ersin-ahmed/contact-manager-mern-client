import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
	const store = authStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (!store.user) {
			navigate('/login');
		}
	}, []);

	return (
		<div>
			<h1>Home</h1>
		</div>
	);
};

export default Home;
