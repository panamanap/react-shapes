import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { TableShape } from './TableShape';
import '../scss/components/table.scss';

export const Table = () => {
    const shapes = useTypedSelector(({ shapes }) => shapes);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Color</th>
                    <th>Is Visible</th>
                </tr>
            </thead>
            <tbody>
                {shapes.map(({ id, type, color, isVisible }, index) => (
                    <TableShape
                        key={id}
                        id={id}
                        index={index}
                        type={type}
                        color={color}
                        isVisible={isVisible}
                    />
                ))}
            </tbody>
        </table>
    );
};
