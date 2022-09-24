const SET_PRODUCTS = 'products/setProducts';

export default (state = [], action) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return action.payload;
		default:
			return state;
	}
};

const setProducts = payload => {
	return {
		type: SET_PRODUCTS,
		payload: payload
	};
};

export { setProducts };
