import createDataContext from './createDataContext';
import Api from '../api/tracker';

const trackReducer=(state, action)=>{
  switch (action.type) {
        case 'fetch_tracks':
        return action.payload;
      default:
          state;
  }
};
const fetchTrack=dispatch=>async( )=>{
     const res = await Api.get('/tracks');
     dispatch({type:'fetch_tracks', payload:res.data});
};

const createTrack=dispatch=> async (name, locations)=>{
    await Api.post('/tracks', {name, locations});
};



export const { Context , Provider}= createDataContext(
    trackReducer,
    {fetchTrack,createTrack},
    []
);
