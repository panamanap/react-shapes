import { ModalActionTypes } from './../../types/modal';

export const openModal = (payload: boolean) => ({
    type: ModalActionTypes.OPEN_MODAL,
    payload,
});

export const closeModal = (payload: boolean) => ({
    type: ModalActionTypes.CLOSE_MODAL,
    payload,
});
