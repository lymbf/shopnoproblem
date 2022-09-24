import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOrders } from '../../../../../Application/Redux/Reducers/orders';

export default function useOrdersCtrl() {
	const dispatch = useDispatch();

	const { type } = useParams();
	console.log(type);
	useEffect(
		() => {
			if (type) {
				switch (type) {
					case 'new':
						dispatch(setOrders('new'));
						break;
					case 'notstarted':
						dispatch(
							setOrders('notstarted')
						);
						break;
					case 'shipped':
						dispatch(setOrders('shipped'));
						break;
					case 'completed':
						dispatch(
							setOrders('completed')
						);
						break;
					case 'forcontact':
						dispatch(
							setOrders('forcontact')
						);
						break;
					default:
						dispatch(setOrders('default'));
						break;
				}
			}
		},
		[type]
	);
}
