import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Spacer from './spacer';
import {withNavigation} from 'react-navigation';

const NavLink=({linkText, navigation, routeName})=>{
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
    <Spacer>
  <Text style={styles.link}>{linkText}</Text>
    </Spacer>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    link:{
        color:'blue'
      }
});

export default  withNavigation(NavLink);