import {useEffect, useState } from 'react';
import {requestPermissionsAsync, watchPositionAsync , Accuracy} from 'expo-location'


export default (ShoudTrack, callback)=>{
    const [err, setError] = useState('');

    
      useEffect(()=>{
        let subscriber;
        const startWatching = async()=>{
          try {
            await requestPermissionsAsync();
            subscriber = await watchPositionAsync({
              accuracy:Accuracy.BestForNavigation,
              timeInterval:1000,
              distanceInterval: 10 
            }, 
            callback
            );
          } catch (err) {
            setError(e);
          }
        };
  
          if(ShoudTrack){
            startWatching();
          }else{
            if(subscriber){
              subscriber.remove();
            }
            subscriber = null;
          }

          return ()=>{
            if(subscriber){
              subscriber.remove();
            }
          };
        
       },[ShoudTrack, callback]);


       return [err];
     
};