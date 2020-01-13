import React, {useContext , useState} from 'react'
import {Input, Button} from 'react-native-elements';
import Spacer from './spacer';
import {Context as LocationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm =()=>{
 const {state:{name, recording, locations},startRecording,stopRecording,changeName} = useContext(LocationContext);
 const [saveTrack]= useSaveTrack();
 
  return (
      <>
      <Spacer>
      <Input placeholder="Enter Tack Name" value={name} onChangeText={changeName}/>
      </Spacer>
      <Spacer>
      {recording 
       ? <Button title="Stop Recording" onPress={stopRecording} />
       :<Button title="Start Recording" onPress={startRecording} />
       }
       </Spacer>
       <Spacer>
       {!recording && locations.length 
        ? <Button title="Save Recording" onPress={saveTrack} />
        :null
       }
       </Spacer>
      </>
  );

};

export default TrackForm;