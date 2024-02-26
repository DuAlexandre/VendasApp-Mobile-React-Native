import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { MenuURL } from '../../../shared/enums/MenuURL.enum';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleGoToCreateUser = () => {
    navigation.navigate(MenuURL.CREATE_USER);
  };

  const handleOnChangeEmail = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleOnChangePassword = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleGoToCreateUser,
    handleOnChangeEmail,
    handleOnChangePassword,
  };
};
