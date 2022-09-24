import React from 'react';
import './shadow.css';
import './addProductModal.css';
import { createPortal } from 'react-dom';

export default function addProductModal({ onClick }) {
	return createPortal(
		<div className="shadow" onClick={onClick} />,
		document.getElementById('shadow')
	);
}
