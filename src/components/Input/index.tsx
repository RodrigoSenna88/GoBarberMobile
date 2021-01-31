import React from 'react';
import { TextInputProps,  TextInput} from 'react-native';

import { Container,  Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

export const Input: React.FC<InputProps> = ({ name, icon, ...rest}) => (

  <Container>
    <Icon name="mail" size={20} color="#666360" />
    <TextInput placeholderTextColor="#666360" {...rest} />
  </Container>
);

export default Input;


