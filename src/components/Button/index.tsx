import React from 'react';
import {Container, Title} from './styles';
import {RectButtonProperties} from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

const Botton: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
};

export default Botton;
