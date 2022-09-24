const SET_ORDERS = 'orders/setOrders';

export default (state = [], action) => {
	switch (action.type) {
		case SET_ORDERS:
			return action.payload;
		default:
			return state;
	}
};

const setOrders = payload => {
	return {
		type: SET_ORDERS,
		payload: payload
	};
};

export { setOrders };
