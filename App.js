import React from 'react';
import {createAppContainer , createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator}  from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SinginScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveScreen from './src/screens/resolveScreen';
import {Provider as AuthProvider } from './src/context/authContext';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/locationContext';
import {Provider as TrackProvider} from './src/context/trackContext';

const SwitchNavigation = createSwitchNavigator({
 Default:ResolveScreen,
 LoginFlow: createStackNavigator({
   Signup:SignupScreen,
   Signin:SigninScreen 
 }) ,
 MainFlow: createBottomTabNavigator({
   TrackListFlow: createStackNavigator({
     TackList:TrackListScreen,
     TrackDetails:TrackDetailScreen
   }),
   CreateTrack: TrackCreateScreen,
   Account: AccountScreen
 })
});

const App= createAppContainer(SwitchNavigation);

export default ()=>{
  return (
    <TrackProvider>
      <LocationProvider>
          <AuthProvider>
            <App ref={(navigator)=>{setNavigator(navigator)}}/>
          </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};