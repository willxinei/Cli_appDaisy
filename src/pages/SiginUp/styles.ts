import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 26px;
`;

export const Title = styled.Text`
  font-family: 'Cinzel-Bold';
  font-size: 20px;
  color: #51003e;

  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Forgot = styled.TouchableOpacity`
  margin-top: 15px;
`;

export const ForgotText = styled.Text`
  color: #cd6a96;
  font-family: 'Cinzel-Bold';
  font-size: 14px;
`;

export const CreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  background: #f2f2f2;
  border-color: #e7d5de;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateText = styled.Text`
  color: #cd6a96;
  font-family: 'Cinzel-Bold';
  font-size: 20px;
  margin-left: 16px;
`;
