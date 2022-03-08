import  React from 'react';
import {Button as PaperButton} from 'react-native-paper';
import Redirect from './Redirect';

const Btn = () => (
  <PaperButton
    mode="contained"
    dark={false}
    color='orange'
    onPress={(console.log('ALED'))}
    >
    Reddit Authorization
  </PaperButton>
);


export default Btn;
