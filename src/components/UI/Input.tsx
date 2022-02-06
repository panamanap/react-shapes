import React from 'react';
import '../../scss/UI/input.scss';
import { ShapeData } from '../../types/shape';

interface InputProps {
    name: string;
    type: string;
    shape: ShapeData;
    setShape: (value: ShapeData) => void;
}

export const Input: React.FC<InputProps> = React.memo(
    ({ type, shape, setShape, name }) => {
        const [value, setValue] = React.useState('');
        const [color, setColor] = React.useState('#000');

        const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (type === 'color') {
                setColor(event.target.value);
            } else setValue(event.target.value);
            setShape({
                ...shape,
                [name.toLowerCase()]: event.target.value,
            });
        };

        return (
            <>
                <label htmlFor={name}>{name}</label>
                <input
                    id={name}
                    type={type}
                    onChange={onChangeInput}
                    value={type === 'color' ? color : value}
                    className="input"
                    placeholder={'Enter...'}
                />
            </>
        );
    }
);
