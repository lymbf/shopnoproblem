import React from 'react';
import './index.css';
import { useParams, Routes, Route } from 'react-router-dom';
import Sales from './sales';
import Production from './production';
import General from './general';

export default function Stats() {
	console.log('inside stats');
	return (
		<div className="admin-stats">
			<Routes>
				<Route path="/sales" element={<Sales />} />
				<Route
					path="/production"
					element={<Production />}
				/>
				<Route exact path="/" element={<General />} />
			</Routes>
		</div>
	);
}
