import { ModalAction, ModalActionTypes } from './../../types/modal';
const initialState = {
    isVisible: false,
};

export const modal = (state = initialState, action: ModalAction) => {
    switch (action.type) {
        case ModalActionTypes.OPEN_MODAL: {
            return {
                ...state,
                isVisible: action.payload,
            };
        }
        case ModalActionTypes.CLOSE_MODAL: {
            return {
                ...state,
                isVisible: action.payload,
            };
        }
        default:
            return state;
    }
};
