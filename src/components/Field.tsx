import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../scss/components/field.scss';
import { Shape } from './Shape';

export const Field = () => {
    const shapes = useTypedSelector(({ shapes }) => shapes);

    return (
        <div className="field">
            {shapes.map(
                (
                    { id, width, height, color, x, y, type, radius, isVisible },
                    index
                ) => (
                    <Shape
                        key={id}
                        type={type}
                        width={width}
                        height={height}
                        color={color}
                        radius={radius}
                        x={x}
                        y={y}
                        isVisible={isVisible}
                    />
                )
            )}
        </div>
    );
};
