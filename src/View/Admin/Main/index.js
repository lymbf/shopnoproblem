import React from 'react';
import './index.css';
import Header from '../Header';
import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import Orders from './Orders';
import Users from './Users';
import Stats from './Stats';

export default function Main() {
	return (
		<div className="admin-main">
			<Header />
			<div className="main-container">
				<Routes>
					<Route
						path="/products/*"
						element={<Products />}
					/>
					<Route
						path="/orders/:type"
						element={<Orders />}
					/>
					<Route
						path="/users/*"
						element={<Users />}
					/>
					<Route
						path="/stats/*"
						element={<Stats />}
					/>
				</Routes>
			</div>
		</div>
	);
}
