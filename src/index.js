import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppShell from './AppShell';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render( 
    <BrowserRouter>
        < AppShell />
    </BrowserRouter>
    , document.getElementById('root')
);

