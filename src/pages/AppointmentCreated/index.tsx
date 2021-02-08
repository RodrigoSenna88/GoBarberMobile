import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';


const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleOkPress = useCallback(() => {
    reset({
      routes: [
        { name: 'Dashboard' }
      ],
      index: 0
    });
  }, [reset]);
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>Segunda, dia 08 de Fevereiro de 2021 às 14:00</Description>

      <OkButton onPress={handleOkPress}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
