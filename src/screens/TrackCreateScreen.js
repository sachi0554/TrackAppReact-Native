// import '../_mockLocation'
import React, { useContext, useCallback} from 'react';
import { StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import useLocation from '../hooks/useLocation';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/map';
import {Context as LocationContext} from '../context/locationContext';
import TrackForm from '../components/trackForm';




const TrackCreateScreen =({isFocused })=>{
  const {state:{recording},addLocation} = useContext(LocationContext);
  const callback = useCallback((location)=>{
    addLocation(location, recording)
  },[recording])
  const [err] = useLocation(isFocused || recording ,callback);


  return(
     <SafeAreaView forceInset={{top:'always'}}>
     <Text h3>Create Track</Text>
     <Map/>
     {err ? <Text>Please enable location</Text> : null}
     <TrackForm/>
     </SafeAreaView>
  );
};

const styles=StyleSheet.create({

});

export default  withNavigationFocus(TrackCreateScreen);