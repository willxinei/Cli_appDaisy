import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 65%;
  height: 46px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;

  margin-top: 15px;

  background: #cd6a96;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: 'Cinzel-Bold';
`;
