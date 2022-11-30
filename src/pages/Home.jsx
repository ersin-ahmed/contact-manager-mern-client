import authStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Dashboard from '../components/Dashboard';

const Home = () => {
	const store = authStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (!store.user) {
			navigate('/login');
		}
	}, []);

	return (
		<>
			<Dashboard />
		</>
	);
};

export default Home;
