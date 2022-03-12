import  React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import Auth from '../functions/Auth';

const Btn = () => (
  <PaperButton
    mode="contained"
    dark={false}
    color='orange'
    onPress={(Auth)}
    >
    Reddit Authorization
  </PaperButton>
);


export default Btn;
