export enum ModalActionTypes {
    OPEN_MODAL = 'OPEN_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface OpenModal {
    type: ModalActionTypes.OPEN_MODAL;
    payload: boolean;
}

export interface CloseModal {
    type: ModalActionTypes.CLOSE_MODAL;
    payload: boolean;
}

export type ModalAction = OpenModal | CloseModal;
