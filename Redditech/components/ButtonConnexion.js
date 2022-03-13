import  React from 'react';
import { authorize } from 'react-native-app-auth';
import {Button as PaperButton} from 'react-native-paper';
import Auth from '../functions/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ButtonConnexion = () => { 
  const manageAuth = async function (){ 
    const userToken = await Auth()
    AsyncStorage.setItem('userToken',userToken.accessToken)
  }
  return (
    <PaperButton
    
      mode="contained"
      dark={false}
      color='white'
      onPress={manageAuth}
    >
    Reddit Authorization
    </PaperButton>
  )
};


export  {ButtonConnexion};
