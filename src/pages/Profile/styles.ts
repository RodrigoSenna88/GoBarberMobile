import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 16px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 84px;
  left: 20px;
`;

export const UserAvatar = styled.Image`
  width: 156px;
  height: 156px;
  border-radius: 78px;
  align-self: center;
`;
