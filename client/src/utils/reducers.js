import { FILTER_PRODUCTS } from './actions';
import { useReducer } from 'react';

export const reducer = (state, action) => {
	switch (action.type) {
		case UPDATE_PRODUCTS:
			return {
				...state,
				posts: [...action.posts],
			};
		default:
			return state;
	}
};

export function usePostReducer(initialState) {
	return useReducer(reducer, initialState);
}
