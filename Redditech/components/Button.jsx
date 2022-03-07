import * as React from 'react';
import {Button as PaperButton} from 'react-native-paper';

const Button = () => (
  <PaperButton
    icon="camera"
    mode="contained"
    onPress={() => console.log('Pressed')}
    dark={true}>
    Press me
  </PaperButton>
);


export default Button;
