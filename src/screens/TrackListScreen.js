import React, {useContext, useEffect} from 'react';
import {View , StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Text, ListItem} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/trackContext';
import { navigate } from '../navigationRef';

const TrackListScreen =({navigation})=>{
  const {state,fetchTrack} = useContext(TrackContext);
  console.log(state);
  useEffect(()=>{
    fetchTrack();
  },[])
  return(
    <View>
        <NavigationEvents onWillFocus={fetchTrack}/>
         <FlatList
         data={state}
         keyExtractor={item=>item._id}
         renderItem={({item})=>{
           return <TouchableOpacity onPress={()=>navigation.navigate('TrackDetails',{_id:item._id})}>
             <ListItem  chevron title={item.name}/>
           </TouchableOpacity>
         }}
         />
     </View>
  );
};

const styles=StyleSheet.create({

});

export default TrackListScreen;