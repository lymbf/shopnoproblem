import React from 'react';
import './index.css';
import useOrdersCtrl from './Controllers/ordersCtrl';
import { useSelector } from 'react-redux';

export default function Orders() {
	const orders = useSelector(state => state.orders);
	useOrdersCtrl();
	return (
		<div className="admin-orders">
			{orders.toString()}
		</div>
	);
}
