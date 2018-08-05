import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterComponent } from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouterComponent />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
