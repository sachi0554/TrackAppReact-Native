import {AsyncStorage } from 'react-native'
import createDataContext from './createDataContext';
import {navigate} from '../navigationRef';
import Api from '../api/tracker';


const  authReducer=(state,action)=>{
    switch (action.type) {
        case 'add_error' :
             return{...state, errorMessage:action.payload}
        case 'signup' :
                return{errorMessage:'', token:action.payload}
        default:
            state;
    }
}

const singup =(dispatch)=> async({email, password})=>{
     try {
         const res = await Api.post('/signup', {email, password});
         await AsyncStorage.setItem('token', res.data.token);
         dispatch({type:'signup', payload: res.data.token});
         navigate('TackList');
     } catch (err) {
        dispatch({type:'add_error', payload:err.message})
     }
  };



const signin =(dispatch)=>{
    return({email, password})=>{
     
    };
};

const signout =(dispatch)=>{
    return({email, password})=>{
     
    };
};

export const { Provider , Context }= createDataContext(
 authReducer,{singup,signin,signout},{token:null, errorMessage:''}
);