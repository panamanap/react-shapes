import { v4 } from 'uuid';
import { Shape, ShapeAction, ShapeActionTypes } from './../../types/shape';

const initialState: Shape[] = [
    {
        id: '1',
        type: 'Rectangle',
        width: 100,
        height: 50,
        color: '#aa00aa',
        radius: 0,
        x: 500,
        y: 500,
        isVisible: true,
    },
    {
        id: '2',
        type: 'Rectangle',
        width: 80,
        height: 250,
        color: '#00aa00',
        radius: 0,
        x: 100,
        y: 200,
        isVisible: true,
    },
    {
        id: '3',
        type: 'Circle',
        radius: 50,
        width: 0,
        height: 0,
        color: '#0000aa',
        x: 50,
        y: 50,
        isVisible: true,
    },
    {
        id: '4',
        type: 'Circle',
        radius: 90,
        width: 0,
        height: 0,
        color: '#660000',
        x: 100,
        y: 300,
        isVisible: true,
    },
];

export const shapes = (state = initialState, action: ShapeAction) => {
    switch (action.type) {
        case ShapeActionTypes.ADD_SHAPE: {
            const newShape = {
                id: v4(),
                ...action.payload,
            };
            return [...state, newShape];
        }
        case ShapeActionTypes.SHOW_SHAPE: {
            const { id, isVisible } = action.payload;
            const index = state.findIndex((obj) => obj.id === id);
            state[index] = {
                ...state[index],
                isVisible: !isVisible,
            };
            return [...state];
        }
        default:
            return state;
    }
};
