import {AsyncStorage } from 'react-native'
import createDataContext from './createDataContext';
import {navigate} from '../navigationRef';
import Api from '../api/tracker';


const  authReducer=(state,action)=>{
    switch (action.type) {
        case 'add_error' :
             return{...state, errorMessage:action.payload}
        case 'signin' :
            return{errorMessage:'', token:action.payload}
        case 'signout' :
            return{ token:null, errorMessage:''}
        case 'clear_error' :
            return{...state ,errorMessage:''}
        default:
            state;
    }
}


const TryLocalSignin= dispatch=> async ()=>{
   const token = await AsyncStorage.getItem('token');
   if(token){
    dispatch({type:'signin', payload: token});
    navigate('TackList');
   }else{
    navigate('Signin');
   }
};

const clearErrorMessage =dispatch=>()=>{
    dispatch({type:'clear_error'});
};


const singup =(dispatch)=> async({email, password})=>{
     try {
         const res = await Api.post('/signup', {email, password});
         await AsyncStorage.setItem('token', res.data.token);
         dispatch({type:'signin', payload: res.data.token});
         navigate('TackList');
     } catch (err) {
        dispatch({type:'add_error', payload:err.message})
     }
  };



const signin =(dispatch)=>async({email, password})=>{
        try {
            const res = await Api.post('/signin',{email,password});
            await AsyncStorage.setItem('token', res.data.token);
            dispatch({type:'signin', payload: res.data.token});
            navigate('TackList');
        } catch (err) {
            dispatch({type:'add_error', payload:err.message})
        }
};


const signout =(dispatch)=>async()=>{
     await AsyncStorage.removeItem('token');
     dispatch({type:'signout'});
     navigate('Signin');
};


export const { Provider , Context }= createDataContext(
 authReducer,{singup,signin,signout,clearErrorMessage,TryLocalSignin},{token:null, errorMessage:''}
);