import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SiginIn from '../pages/SiginIn';
import SignUp from '../pages/SiginUp';
import DashBoard from '../pages/DashBoard';

const Auth = createStackNavigator();

const Routes: React.FC = () => {
   return (
      <Auth.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Auth.Screen name="SignIn" component={SiginIn} />
         <Auth.Screen name="SignUp" component={SignUp} />
         <Auth.Screen name="DashBoard" component={DashBoard} />
      </Auth.Navigator>
   );
};

export default Routes;
