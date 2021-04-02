import React from 'react';
import {Container, Title} from './styles';
import Linear from 'react-native-linear-gradient';
import {Image} from 'react-native';
import logo from '../../assets/Logo.png';

const SiginIn: React.FC = () => {
  return (
    <Linear
      style={{flex: 1}}
      colors={['#E4C6D5', '#EAEAEA']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Container>
        <Image source={logo} />
        <Title>Faça seu login</Title>
      </Container>
    </Linear>
  );
};

export default SiginIn;
