import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const rootElement = document.getElementById('root');
render(
	<BrowserRouter>
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
