/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index.js';//o index.js pode ser suprimido pois é default caso não especificado.
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
