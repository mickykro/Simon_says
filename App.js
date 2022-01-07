/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';

import {
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import Navigator from './routes/navigation';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );

};



export default App;
