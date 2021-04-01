import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SiginIn from '../pages/SiginIn';
import SignUp from '../pages/SiginUp';

const Auth = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen name="SignIn" component={SiginIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default Routes;
