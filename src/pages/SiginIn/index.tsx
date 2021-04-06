import React, {useCallback, useRef} from 'react';
import {
   Container,
   CreateAccount,
   CreateText,
   Forgot,
   ForgotText,
   Title,
} from './styles';
import Linear from 'react-native-linear-gradient';
import {Alert, Image, KeyboardAvoidingView, Platform} from 'react-native';
import logo from '../../assets/Logo.png';
import Botton from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import getValidationErrors from '../../utils/getValidationsErrors';
import * as Yup from 'yup';

interface SignInFormData {
   name: string;
   password: string;
}

const SiginIn: React.FC = () => {
   const navigate = useNavigation();

   //Refes
   const formRef = useRef<FormHandles>(null);

   const handleSigIn = useCallback(async (data: SignInFormData) => {
      try {
         formRef.current?.setErrors({});

         const schema = Yup.object().shape({
            name: Yup.string().required('nome obrigatório'),
            email: Yup.string()
               .required('E-mail obrigatório')
               .email('Digite um e-mail valido'),
            password: Yup.string().required('senha obrigátoria').min(6),
         });

         await schema.validate(data, {
            abortEarly: false,
         });
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
      }
   }, []);

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
                  <Title>Faça seu login</Title>

                  <Form ref={formRef} onSubmit={handleSigIn}>
                     <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="email"
                        icon="mail"
                        placeholder="E-mail"
                     />
                     <Input
                        secureTextEntry
                        autoCapitalize="none"
                        name="password"
                        icon="lock"
                        placeholder="Senha"
                        returnKeyType="send"
                        onSubmitEditing={() => {
                           formRef.current?.submitForm();
                        }}
                     />
                  </Form>
                  <Botton
                     onPress={() => {
                        formRef.current?.submitForm();
                     }}>
                     Entrar
                  </Botton>

                  <Forgot onPress={() => {}}>
                     <ForgotText>Esqueci minha senha</ForgotText>
                  </Forgot>
               </Container>
            </ScrollView>
         </KeyboardAvoidingView>

         <CreateAccount
            onPress={() => {
               navigate.navigate('SignUp');
            }}>
            <Icon name="log-in" size={20} color="#cd6a96" />
            <CreateText>Criar uma conta</CreateText>
         </CreateAccount>
      </Linear>
   );
};

export default SiginIn;
