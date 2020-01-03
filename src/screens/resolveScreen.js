import React, {useEffect , useContext} from 'react';
import {Context as AuthContext} from '../context/authContext';

const ResloveScreen =()=>{
    const {TryLocalSignin}= useContext(AuthContext);

    useEffect(()=>{
        TryLocalSignin();
      },[]);
  return(
    null
  );
};


export default ResloveScreen;