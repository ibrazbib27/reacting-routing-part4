import React from 'react';
import ReactDOM from 'react-dom';
import StudioGhibliWiki from './components/StudioGhibliWiki';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render( <StudioGhibliWiki />, document.getElementById('root'));