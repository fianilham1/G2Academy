/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './src/store';
import { SQLiteContext, SQLite3 } from './src/config/sqlite'

const store = configureStore();

const RNRedux = () => 
    <Provider store={store}>
        <SQLiteContext.Provider value={new SQLite3()}>
            <App />
        </SQLiteContext.Provider>
    </Provider>


AppRegistry.registerComponent(appName, () => RNRedux);
