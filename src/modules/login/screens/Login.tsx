import {View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import {theme} from '../../../shared/themes/theme';
import {useLogin} from '../hooks/useLogin';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleOnChangeEmail,
    handleOnChangePassword,
  } = useLogin();

  return (
    <View>
      <ContainerLogin>
        <ImageLogo
          resizeMode="contain"
          source={require('../../../assets/images/logo.png')}
        />
        <Input
          title="Email:"
          placeholder="Digite seu email"
          margin="0px 0px 10px 0px"
          errorMessage={errorMessage}
          onChange={handleOnChangeEmail}
          value={email}
        />
        <Input
          secureTextEntry
          title="Senha:"
          placeholder="Digite sua senha"
          errorMessage={errorMessage}
          onChange={handleOnChangePassword}
          value={password}
        />
        <Button
          margin="15px"
          title="ENTRAR"
          type={theme.buttons.buttonsTheme.primary}
          onPress={handleOnPress}
          loading={loading}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
