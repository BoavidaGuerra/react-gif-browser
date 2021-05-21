import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = document.getElementById('root');
if (root) {
  // ReactDOM.render(<Hello name="World" />, root);
  ReactDOM.render(<App/>, root);
}
