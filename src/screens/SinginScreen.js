import React,{useContext} from 'react';
import {View , StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import AuthFrom from '../components/authForm';
import NavLink from '../components/navLink';

const SinginScreen =()=>{
  const {state, signin,clearErrorMessage}= useContext(AuthContext);

  return(
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthFrom
      headerText="Sign In Account "
      errorMessage={state.errorMessage}
      buttonText="Sign In"
      onSubmit={signin}
      />
      <NavLink
        linkText="Do't have an Account ? Sign Up"
        routeName='Signup'
      />
   </View>
  );
};

SinginScreen.navigationOptions=()=>{
  return{
       headerShown:false,
       
  };
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginBottom:100
  }
});

export default SinginScreen;