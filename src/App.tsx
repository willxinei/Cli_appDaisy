import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Linear from 'react-native-linear-gradient';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/indes';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#E4C6D5" />
      <Linear style={{flex: 1}} colors={['#E4C6D5', '#EAEAEA']}>
        <Routes />
      </Linear>
    </NavigationContainer>
  );
};

export default App;
