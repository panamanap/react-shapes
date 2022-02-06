import { ShapeActionTypes, ShapeData, FindShape } from './../../types/shape';

export const addShape = (payload: ShapeData) => ({
    type: ShapeActionTypes.ADD_SHAPE,
    payload,
});

export const showShape = (payload: FindShape) => ({
    type: ShapeActionTypes.SHOW_SHAPE,
    payload,
});
