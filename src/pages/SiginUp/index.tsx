import React, {useCallback, useRef} from 'react';
import Linear from 'react-native-linear-gradient';
import {
   Alert,
   Image,
   KeyboardAvoidingView,
   Platform,
   ScrollView,
} from 'react-native';
import logo from '../../assets/Logo.png';
import Botton from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import {Container, CreateAccount, CreateText, Title} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationsErrors';

interface SignUpFormData {
   name: string;
   email: string;
   telefone: number;
   provider: true;
   password: string;
}

const SignUp: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const navigate = useNavigation();

   const handleSignUp = useCallback(
      async (data: SignUpFormData) => {
         try {
            // formRef.current?.setErrors({});

            // const schema = Yup.object().shape({
            //    name: Yup.string().required('nome obrigatório'),
            //    email: Yup.string()
            //       .required('E-mail obrigatório')
            //       .email('Digite um e-mail valido'),
            //    telefone: Yup.number()
            //       .required('Telefone obrigatório')
            //       .min(11)
            //       .max(11),
            //    provider: Yup.boolean(),
            //    password: Yup.string().required('senha obrigátoria').min(6),
            // });

            // await schema.validate(data, {
            //    abortEarly: false,
            // });

            await api.post('/user', {
               name: data.name,
               email: data.email,
               telefone: data.telefone,
               provider: true,
               password: data.password,
            });

            Alert.alert(
               'Cadastro realizado',
               'Agora você ja pode fazer login!!',
            );

            navigate.goBack();
         } catch (err) {
            if (err instanceof Yup.ValidationError) {
               const errors = getValidationErrors(err);

               formRef.current?.setErrors(errors);

               return;
            }

            Alert.alert(
               'Erro na autenticação',
               'Ocorreu um erro ao tentar fazer login',
            );
            console.log(err.message);
         }
      },
      [navigate],
   );

   return (
      <Linear
         style={{flex: 1}}
         colors={['#E4C6D5', '#EAEAEA']}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1}}>
         <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled>
            <ScrollView
               keyboardShouldPersistTaps="handled"
               contentContainerStyle={{flex: 1}}>
               <Container>
                  <Image source={logo} />
                  <Title>Criar uma conta</Title>

                  <Form ref={formRef} onSubmit={handleSignUp}>
                     <Input name="name" icon="user" placeholder="Nome" />
                     <Input
                        autoCapitalize="none"
                        keyboardType="email-address"
                        name="email"
                        icon="mail"
                        placeholder="E-mail"
                     />
                     <Input
                        keyboardType="numeric"
                        name="telefone"
                        icon="phone"
                        placeholder="Telefone, exp: 14 998377446"
                     />
                     <Input name="password" icon="lock" placeholder="Senha" />
                  </Form>
                  <Botton
                     onPress={() => {
                        formRef.current?.submitForm();
                     }}>
                     Criar
                  </Botton>
               </Container>
            </ScrollView>
         </KeyboardAvoidingView>

         <CreateAccount
            onPress={() => {
               navigate.navigate('SignIn');
            }}>
            <Icon name="log-out" size={20} color="#cd6a96" />
            <CreateText>Voltar para o login</CreateText>
         </CreateAccount>
      </Linear>
   );
};

export default SignUp;
