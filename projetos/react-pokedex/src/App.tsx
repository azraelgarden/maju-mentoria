import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default App;
