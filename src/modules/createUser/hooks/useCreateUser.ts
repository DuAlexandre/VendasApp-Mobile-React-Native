import {useState} from 'react';
import {CreateUserType} from '../../../shared/types/createUserType';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useRequest} from '../../../shared/hooks/useRequest';
import {URL_USER} from '../../../shared/constants/urls';
import {MethodEnum} from '../../../enums/method.enum';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {MenuURL} from '../../../shared/enums/MenuURL.enum';

export const useCreateUser = () => {
  const {request, loading} = useRequest();
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();

  const [createUser, setCreateUser] = useState<CreateUserType>({
    name: '',
    phone: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnChangeInput = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
    name: string,
  ) => {
    setCreateUser(currentCreateUser => ({
      ...currentCreateUser,
      [name]: event.nativeEvent.text,
    }));
  };

  const handleCreateUser = async () => {
    const resultCreateUser = await request({
      url: URL_USER,
      method: MethodEnum.POST,
      body: createUser,
      message: 'Usuário cadastrado com sucesso!',
    });

    if (resultCreateUser) {
      reset({
        index: 0,
        routes: [{name: MenuURL.LOGIN}],
      });
    }
  };

  return {
    createUser,
    handleOnChangeInput,
    handleCreateUser,
    loading,
  };
};
