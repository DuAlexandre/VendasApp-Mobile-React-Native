import { useEffect, useState } from 'react';
import { CreateUserType } from '../../../shared/types/createUserType';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useRequest } from '../../../shared/hooks/useRequest';
import { URL_USER } from '../../../shared/constants/urls';
import { MethodEnum } from '../../../enums/method.enum';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { MenuURL } from '../../../shared/enums/MenuURL.enum';
import { insertMaskInCpf } from '../../../shared/functions/cpf';
import { insertMaskInPhone } from '../../../shared/functions/phone';
import { removeSpecialCharacters } from '../../../shared/functions/characteres';

export const useCreateUser = () => {
  const { request, loading } = useRequest();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const [disable, setDisable] = useState<boolean>(true);

  const [createUser, setCreateUser] = useState<CreateUserType>({
    name: '',
    phone: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (
      createUser.name !== '' &&
      createUser.phone !== '' &&
      createUser.email !== '' &&
      createUser.cpf !== '' &&
      createUser.password !== '' &&
      createUser.password === createUser.confirmPassword
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [createUser]);

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    let text = event.nativeEvent.text;
    switch (name) {
      case 'cpf':
        text = insertMaskInCpf(text);
        break;
      case 'phone':
        text = insertMaskInPhone(text);
        break;
      default:
        text = event.nativeEvent.text;
    }

    setCreateUser(currentCreateUser => ({
      ...currentCreateUser,
      [name]: text,
    }));
  };

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: {
        ...createUser,
        phone: removeSpecialCharacters(createUser.phone),
        cpf: removeSpecialCharacters(createUser.cpf),
      },
      message: 'Usuário cadastrado com sucesso!',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{ name: MenuURL.LOGIN }],
      });
    }
  };

  return {
    createUser,
    disable,
    handleOnChangeInput,
    handleCreateUser,
    loading,
  };
};
