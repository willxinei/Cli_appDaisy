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
      <View style={{flex: 1}}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
