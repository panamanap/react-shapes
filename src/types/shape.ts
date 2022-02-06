export interface Shape {
    id: string;
    type: string;
    width: number;
    height: number;
    radius: number;
    color: string;
    x: number;
    y: number;
    isVisible: boolean;
}

export interface FindShape {
    id: string;
    isVisible: boolean;
}

export type ShapeData = Omit<Shape, 'id'>;

export enum ShapeActionTypes {
    ADD_SHAPE = 'ADD_SHAPE',
    SHOW_SHAPE = 'SHOW_SHAPE',
}

export interface AddShape {
    type: ShapeActionTypes.ADD_SHAPE;
    payload: ShapeData;
}

export interface ShowShape {
    type: ShapeActionTypes.SHOW_SHAPE;
    payload: FindShape;
}

export type ShapeAction = AddShape | ShowShape;
