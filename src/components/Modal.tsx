import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import '../scss/components/modal.scss';
import { closeModal } from '../store/actions/modal';
import { addShape } from '../store/actions/shapes';
import { ShapeData } from '../types/shape';
import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { Select } from './UI/Select';

const options = ['Rectangle', 'Circle'];

const initialShape = {
    type: 'Rectangle',
    width: 100,
    height: 100,
    radius: 50,
    color: '#000',
    x: 0,
    y: 0,
    isVisible: true,
};

export const Modal = () => {
    const dispatch = useDispatch();
    const isVisible = useTypedSelector((state) => state.modal.isVisible);
    const [shape, setShape] = React.useState<ShapeData>(initialShape);

    const onCloseModal = () => {
        dispatch(closeModal(false));
    };

    const onAddShape = () => {
        dispatch(addShape(shape));
        onCloseModal();
    };

    if (!isVisible) return null;

    return (
        <div
            onClick={onCloseModal}
            className={`overlay ${isVisible ? 'overlayVisible' : ''}`}
        >
            <div onClick={(event) => event.stopPropagation()}>
                <div className="modal">
                    <div>
                        <h2>Addding shape</h2>
                    </div>
                    <div className="modal-item">
                        <Select
                            options={options}
                            setShape={setShape}
                            shape={shape}
                        />
                    </div>
                    {shape.type === 'Circle' ? (
                        <div className="modal-item">
                            <Input
                                name="Radius"
                                type="number"
                                setShape={setShape}
                                shape={shape}
                            />
                        </div>
                    ) : (
                        <>
                            {' '}
                            <div className="modal-item">
                                <Input
                                    name="Width"
                                    type="number"
                                    setShape={setShape}
                                    shape={shape}
                                />
                            </div>
                            <div className="modal-item">
                                <Input
                                    name="Height"
                                    type="number"
                                    setShape={setShape}
                                    shape={shape}
                                />
                            </div>
                        </>
                    )}
                    <div className="modal-item color">
                        <Input
                            name="Color"
                            type="color"
                            setShape={setShape}
                            shape={shape}
                        />
                    </div>
                    <div className="modal-item">
                        <p>Сoordinates </p>
                        <div className="modal-item">
                            <Input
                                name="X"
                                type="number"
                                setShape={setShape}
                                shape={shape}
                            />
                        </div>
                        <div className="modal-item">
                            <Input
                                name="Y"
                                type="number"
                                setShape={setShape}
                                shape={shape}
                            />
                        </div>
                    </div>
                    <Button onClick={onAddShape}>Add Shape</Button>
                </div>
            </div>
        </div>
    );
};
