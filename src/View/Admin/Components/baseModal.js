import React from 'react';
import './baseModal.css';

export default function BaseModal(props) {
	return (
		<div className={`admin-base-modal ${props.class}`}>
			{props.children}
		</div>
	);
}
