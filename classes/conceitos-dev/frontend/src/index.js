//yarn babel src/index.js --out-file  public/bundle.js
import React from 'react';
import {render} from 'react-dom';

import App from './App';

render(<App></App>, document.getElementById('app'));

//yarn babel src/index.js --out-file  public/bundle.js