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
  useColorScheme, I18nManager
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import Navigator from './routes/navigation';
import EnterNameModal from './components/enterNameModal';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);
  return (
      <Navigator />
  );

};



export default App;
