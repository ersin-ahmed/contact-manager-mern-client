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
		<div>
			<h1>Delete {store.toBeDeleted._id}</h1>
			<button onClick={deleteContact}>Yes</button>
			<button onClick={() => navigate('/')}>No</button>
		</div>
	);
};

export default Delete;
