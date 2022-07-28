// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const React = require('react');

const { render } = require('react-dom');
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import App from './App.jsx';

import './stylesheets/styles.css';
// import './bootstrap/dist/css/bootstrap.min.css';

<link
  rel='stylesheet'
  href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
  integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
  crossorigin='anonymous'
/>;

root.render( <App/> );

//root.render(
//   <BrowserRouter>
    // <App />
  {/* </BrowserRouter> */}
// );