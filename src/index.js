import React from 'react';
import ReactDOM from 'react-dom'; 
import OverallLayout from './components/OverallLayout/OverallLayout'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(   <BrowserRouter>
     <OverallLayout/>
</BrowserRouter>  ,
     document.getElementById('root'));
serviceWorker.unregister();
