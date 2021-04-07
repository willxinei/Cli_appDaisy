import {useField} from '@unform/core';
import React, {
   forwardRef,
   useCallback,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from 'react';
import {TextInputProps} from 'react-native';
import {Container, Title, Icon} from './styles';

interface InpuProps extends TextInputProps {
   name: string;
   icon: string;
}

interface InputValueReference {
   value: string;
}

interface InputRef {
   focus(): void;
}

const Input: React.FC<InpuProps> = ({name, icon, ...rest}) => {
   //Hook de estados
   const [isFocused, setIsFoused] = useState(false);
   const [isFiled, setIsFiledd] = useState(false);

   //Hook de useCallback
   const handleInputFocus = useCallback(() => {
      setIsFoused(true);
   }, []);

   const handleInputBlur = useCallback(() => {
      setIsFoused(false);

      setIsFiledd(!!inputValueRef.current.value);
   }, []);
   const inputElementRef = useRef<any>(null);

   const {registerField, defaultValue, fieldName, error} = useField(name);
   const inputValueRef = useRef<InputValueReference>({value: defaultValue});

   useEffect(() => {
      registerField<string>({
         name: fieldName,
         ref: inputValueRef.current,
         path: 'value',
         setValue(ref: any, value) {
            inputValueRef.current.value = value;
            inputElementRef.current.setNativeProps({text: value});
         },
         clearValue() {
            inputValueRef.current.value = '';
            inputElementRef.current.clear();
         },
      });
   }, [registerField, fieldName]);

   return (
      <Container isErrored={!!error} isFocused={isFocused}>
         <Icon
            color={isFocused || isFiled ? '#22B18A' : '#d0d0d0'}
            name={icon}
            size={20}
         />
         <Title
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputElementRef}
            defaultValue={defaultValue}
            onChangeText={(value) => {
               inputValueRef.current.value = value;
            }}
            placeholderTextColor="#d0d0d0"
            {...rest}
         />
      </Container>
   );
};

export default Input;
