import styled from 'styled-components/native';
import { theme } from '../../themes/theme';
import { Icon } from '../icon/Icon';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 50px;
  padding: 15px;
  background-color: ${theme.colors.neutralTheme.white};
  color: ${theme.colors.neutralTheme.black};
  border-radius: 5px;
  border-width: 1px;
  border-color: ${props =>
    props.isError
      ? theme.colors.orangeTheme.orange80
      : theme.colors.grayTheme.gray80};

  padding-right: ${props => (props.hasSecureTextEntry ? '55px' : '15px')};
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 15px;
`;
