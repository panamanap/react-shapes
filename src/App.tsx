import React from 'react';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Modal />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
