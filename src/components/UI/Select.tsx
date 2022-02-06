import React from 'react';
import '../../scss/UI/select.scss';
import { ShapeData } from '../../types/shape';

interface SelectProps {
    options: string[];
    shape: ShapeData;
    setShape: (value: ShapeData) => void;
}

export const Select: React.FC<SelectProps> = ({ options, shape, setShape }) => {
    const [selectedOption, setSelectedOption] = React.useState<String>();

    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        setShape({
            ...shape,
            type: value,
        });
    };

    return (
        <label>
            Type
            <select onChange={selectChange} className="select">
                {options.map((type, index) => (
                    <option key={index} value={type} className="option">
                        {type}
                    </option>
                ))}
            </select>
        </label>
    );
};
