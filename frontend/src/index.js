import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ClubsContextProvider } from './context/ClubsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ClubsContextProvider>
        <App />
    </ClubsContextProvider>
);
