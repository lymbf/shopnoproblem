import React from 'react';
import './index.css';
import Menu from './Menu';
import Main from './Main';

export default function Admin() {
	return (
		<div className="admin">
			<Menu />
			<Main />
		</div>
	);
}
