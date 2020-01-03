import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text , Input, Button} from 'react-native-elements';
import Spacer from './spacer';

const AuthFrom =({headerText , errorMessage , onSubmit, buttonText})=>{
    const [email ,setEmail]= useState('');
    const [password , setPassword]=useState('');
 return <View>
            <Spacer>
            <Text h3>{headerText}</Text>
            </Spacer>
            <Input label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={setEmail} />
            <Spacer/>
            <Input  secureTextEntry label="Password" autoCapitalize="none" autoCorrect={false} value={password} onChangeText={setPassword} />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> :null}
            <Spacer>
            <Button title={buttonText} onPress={()=> onSubmit({email, password})} />
            </Spacer>
        </View>
};

const styles= StyleSheet.create({
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15
        },
});

export default AuthFrom;