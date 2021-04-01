import React from 'react';
import {StatusBar, View} from 'react-native';
import Linear from 'react-native-linear-gradient';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E4C6D5" />
      <Linear style={{flex: 1}} colors={['#E4C6D5', '#EAEAEA']}>
        <View />
      </Linear>
    </>
  );
};

export default App;
