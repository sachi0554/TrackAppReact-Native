import React, { useContext , us} from 'react';
import {View , Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/authContext';

const AccountScreen =()=>{
  const {signout}= useContext(AuthContext);
  return(
    <SafeAreaView forceInset={{top:'always'}}>
     <View style={styles.container}>
        <Text>Account </Text>
       <Button title="Log Out" onPress={signout} />
     </View>
     </SafeAreaView>
  );
};


const styles=StyleSheet.create({
  container:{
    
  }
});

export default AccountScreen;