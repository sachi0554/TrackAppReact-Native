import {NavigationAction} from 'react-navigation'

let Navigator;

export const setNavigator=(nav)=>{
    Navigator=nav;
}

export const navigate=(routeName , params)=>{
  navigator.dispatch(
    NavigationAction.navigate({
        routeName,
        params
    })
  );
}