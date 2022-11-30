import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Header from './components/Header';

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
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
