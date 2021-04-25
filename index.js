import {AppRegistry} from 'react-native';
import Router from './app/Router';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Router);
