import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Header from './components/Header';
import Delete from './pages/Delete';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Csv from './pages/Csv';

function App() {
	return (
		<>
			<Router>
				<div className='flex flex-col justify-center items-center'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/create' element={<Create />} />
						<Route path='/update' element={<Edit />} />
						<Route path='/delete' element={<Delete />} />
						<Route path='/csv' element={<Csv />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
