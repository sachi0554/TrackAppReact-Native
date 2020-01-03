import React, { useContext } from 'react';
import {View , StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import AuthFrom from '../components/authForm';
import NavLink from '../components/navLink';

const SignupScreen =()=>{
  const {state, singup,clearErrorMessage}= useContext(AuthContext);

  return(
     <View style={styles.container}>
        <NavigationEvents
          onWillBlur={clearErrorMessage}
        />
         <AuthFrom
          headerText="Create Account "
          errorMessage={state.errorMessage}
          buttonText="Sign Up"
          onSubmit={singup}
         />
         <NavLink
           linkText="Do you have alredy Account ? Sign In"
           routeName='Signin'
         />
     </View>
  );
};

SignupScreen.navigationOptions=()=>{
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

export default SignupScreen;