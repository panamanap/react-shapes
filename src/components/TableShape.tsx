import React from 'react';
import { useDispatch } from 'react-redux';
import { showShape } from '../store/actions/shapes';

interface ShapeProps {
    id: string;
    index: number;
    type: string;
    color: string;
    isVisible: boolean;
}

export const TableShape: React.FC<ShapeProps> = ({
    id,
    type,
    color,
    isVisible,
    index,
}) => {
    const dispatch = useDispatch();

    const onShowShape = () => {
        console.log();
        dispatch(showShape({ id, isVisible }));
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{type}</td>
            <td>{color}</td>
            <td style={{ cursor: 'pointer' }} onClick={onShowShape}>
                {isVisible.toString()}
            </td>
        </tr>
    );
};
