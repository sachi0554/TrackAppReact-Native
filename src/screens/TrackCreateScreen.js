import React, {useEffect} from 'react';
import { StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {requestPermissionsAsync} from 'expo-location'
import {SafeAreaView} from 'react-navigation';
import Map from '../components/map';

useEffect
const TrackCreateScreen =()=>{
  return(
     <SafeAreaView forceInset={{top:'always'}}>
     <Text h3>Create Track</Text>
     <Map/>
     </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default TrackCreateScreen;