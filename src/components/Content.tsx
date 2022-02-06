import React from 'react';
import { Table } from './Table';
import { Field } from './Field';
import '../scss/components/content.scss';
import { store } from '../store';

export const Content = () => {
    return (
        <main className="main">
            <Table />
            <Field />
        </main>
    );
};
