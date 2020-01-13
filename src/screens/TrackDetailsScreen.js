import React, {useContext} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import MapView, {Polyline} from 'react-native-maps';
import {Context as TrackContext} from '../context/trackContext';

const TrackDetailScreen =({navigation})=>{
  const {state} = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(t => t._id ===_id);
  const currentLocation = track.locations[0].coords;
  return(
    <View>
          <Text>{track.name}</Text>
          <MapView style={styles.map}
          initialRegion={{
            ...currentLocation,
            longitudeDelta:0.01,
            latitudeDelta:0.01,
        
          }}
          
          >
            <Polyline coordinates={track.locations.map(loc=>loc.coords)} />
          </MapView>
   </View>
  );
};

const styles=StyleSheet.create({
 map:{
   height:300
 }
});

export default TrackDetailScreen;