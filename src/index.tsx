import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import './scss/resume.scss';
import { NavBar } from './components/NavBar/NavBar';
import {Experience} from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Interests } from './components/Interests';
import { Awards } from './components/Awards';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
        <NavBar/>
        <Experience/>
        <Education />
        <Skills />
        <Interests />
        <Awards />
        </React.Fragment>
    </Provider>,
    document.getElementById('root')
);
