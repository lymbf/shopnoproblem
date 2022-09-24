const SET_INPUT = 'form/setInput';

export default (state = { addProduct: {} }, action) => {
	switch (action.type) {
		case SET_INPUT:
			let data = { ...state };
			data[action.payload.formName][
				action.payload.inputName
			] =
				action.payload.value;
			return data;
		default:
			return state;
	}
};

const setInput = payload => {
	return {
		type: SET_INPUT,
		payload: {
			value: payload.value,
			formName: payload.formName,
			inputName: payload.inputName
		}
	};
};

export { setInput };
