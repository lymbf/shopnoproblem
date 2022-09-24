const SET_ERROR = 'error/SET_error';

export default (state = {}, action) => {
	switch (action.type) {
		case SET_ERROR:
			let arr = { ...state };
			arr[action.code] = action.val;
			return arr;
		default:
			return state;
	}
};

const setError = (code, val) => {
	return {
		type: SET_ERROR,
		code: code,
		val: val
	};
};

export { setError };
