import {useEffect} from 'react';
import {ContainerSplash, ImageLogoSplash} from '../styles/splash.style';
import {useRequest} from '../../../shared/hooks/useRequest';
import {URL_USER} from '../../../shared/constants/urls';
import {MethodEnum} from '../../../enums/method.enum';
import {useUserReducer} from '../../../store/reducers/userReducer/useUserReducer';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {MenuURL} from '../../../shared/enums/MenuURL.enum';

const Splash = () => {
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();
  const {request} = useRequest();
  const {setUser} = useUserReducer();

  useEffect(() => {
    const verifyLogin = async () => {
      const returnUser = await request({
        url: URL_USER,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });

      if (returnUser) {
        reset({
          index: 0,
          routes: [{name: MenuURL.HOME}],
        });
      } else {
        reset({
          index: 0,
          routes: [{name: MenuURL.LOGIN}],
        });
      }
    };

    verifyLogin();
  }, []);

  return (
    <ContainerSplash>
      <ImageLogoSplash
        resizeMode="contain"
        source={require('../../../assets/images/logo.png')}
      />
    </ContainerSplash>
  );
};

export default Splash;
