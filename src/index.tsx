import React from "react";
import ReactDOM from 'react-dom';
import {Routes} from "./Routes";
import './styles/app.scss';
import 'font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<React.StrictMode><Routes/></React.StrictMode>, document.getElementById('root'));
