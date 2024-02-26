import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import ConnectionAPI, {
  MethodType,
  connectionAPIPost,
} from '../functions/connection/connectionAPI';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../../store/reducers/userReducer/useUserReducer';
import { useGlobalReducer } from '../../store/reducers/globalReducer/useGlobalReducer';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { MenuURL } from '../enums/MenuURL.enum';
import { setAuthorizationToken } from '../functions/connection/auth';

interface RequestProps<T> {
  url: string;
  method: MethodType;
  saveGlobal?: (object: T) => void;
  body?: unknown;
  message?: string;
}

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: RequestProps<T>): Promise<T | undefined> => {
    setLoading(true);
    const returnObject: T | undefined = await ConnectionAPI.connect<T>(
      url,
      method,
      body,
    )
      .then(result => {
        if (saveGlobal) {
          saveGlobal(result);
        }

        if (message) {
          setModal({
            visible: true,
            title: 'Sucesso!',
            text: message,
          });
        }

        return result;
      })
      .catch((error: Error) => {
        setModal({
          visible: true,
          title: 'Erro',
          text: error.message,
        });

        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);

    await connectionAPIPost<ReturnLogin>('http://192.168.15.48:8080/auth', body)
      .then(result => {
        setAuthorizationToken(result.accessToken);
        setUser(result.user);
        reset({
          index: 0,
          routes: [{ name: MenuURL.HOME }],
        });
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'Erro',
          text: 'Usuário ou senha inválidos.',
        });
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    request,
    authRequest,
    setErrorMessage,
  };
};
