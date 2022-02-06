import React from 'react';
import { useDispatch } from 'react-redux';
import '../scss/components/header.scss';
import { openModal } from '../store/actions/modal';
import { Button } from './UI/Button';

export const Header = () => {
    const dispatch = useDispatch();

    const onOpenModal = () => {
        dispatch(openModal(true));
    };
    const onClearStorage = () => {
        localStorage.removeItem('ReactShapes');
        alert('Shapes removed');
        window.location.reload();
    };

    return (
        <header className="header">
            <h1>React Shapes</h1>
            <div>
                <Button onClick={onOpenModal}>Add shape</Button>
                <Button onClick={onClearStorage}>Clear data</Button>
            </div>
        </header>
    );
};
