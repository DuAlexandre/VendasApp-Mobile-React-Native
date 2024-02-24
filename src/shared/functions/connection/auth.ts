import {AUTHORIZATION_KEY} from '../../constants/authorizationConstants';
import {MenuURL} from '../../enums/MenuURL.enum';
import {
  getItemStorage,
  removeItemStorage,
  setItemStorage,
} from '../storageProxy';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

export const unsetAuthorizationToken = () =>
  removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token: string) =>
  setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const logout = (navigation: NavigationProp<ParamListBase>) => {
  unsetAuthorizationToken();
  navigation.reset({
    index: 0,
    routes: [{name: MenuURL.LOGIN}],
  });
};
