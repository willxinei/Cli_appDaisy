import React from 'react';
import {TextInputProps} from 'react-native';
import {Container, Title} from './styles';

interface InpuProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InpuProps> = ({name, icon, ...rest}) => {
  return (
    <Container>
      <Title placeholderTextColor="#d0d0d0" {...rest} />
    </Container>
  );
};

export default Input;
