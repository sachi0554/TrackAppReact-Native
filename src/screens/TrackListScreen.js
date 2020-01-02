import React from 'react';
import {View , StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements'

const TrackListScreen =({navigation})=>{
  return(
    <View>
        <Text h3>Sign Up</Text>
        <Input label="Email" />
        <Input label="Password" />
        <Button title="Sign up" onPress={()=>navigation.navigate('TrackDetails')} />
     </View>
  );
};

const styles=StyleSheet.create({

});

export default TrackListScreen;