import React, { useState, useContext } from 'react';
import {View , StyleSheet, use} from 'react-native';
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/spacer';
import {Context as AuthContext} from '../context/authContext';


const SignupScreen =({navigation})=>{
  const {state, singup}= useContext(AuthContext);
  const [email ,setEmail]= useState('');
  const [password , setPassword]=useState('');

  return(
     <View style={styles.container}>
        <Spacer>
        <Text h3>Sign Up</Text>
        </Spacer>
        <Input label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={setEmail} />
        <Spacer/>
        <Input  secureTextEntry label="Password" autoCapitalize="none" autoCorrect={false} value={password} onChangeText={setPassword} />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> :null}
        <Spacer>
        <Button title="Sign up" onPress={()=> singup({email, password})} />
        </Spacer>
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
  },
  errorMessage:{
  fontSize:16,
  color:'red',
  marginLeft:15,
  marginTop:15
  }
});

export default SignupScreen;