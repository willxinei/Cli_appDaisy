import styled, {css} from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
   isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
   width: 100%;
   height: 45px;
   background: #f2f2f2;
   padding: 0 16px;
   border-width: 2px;
   border-color: #f2f2f2;

   border-radius: 14px;
   margin-bottom: 8px;

   flex-direction: row;
   align-items: center;

   ${(pros) =>
      pros.isFocused &&
      css`
         border-color: #22b18a;
      `}
`;

export const Title = styled.TextInput`
   flex: 1;
   color: #19013d;
   font-family: 'Cinzel-Bold';
   font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
   margin-right: 16px;
`;
