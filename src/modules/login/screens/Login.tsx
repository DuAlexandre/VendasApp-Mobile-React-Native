import {TouchableOpacity, View} from 'react-native';
import {ContainerLogin, ImageLogo} from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Button from '../../../shared/components/button/Button';
import {theme} from '../../../shared/themes/theme';
import {useLogin} from '../hooks/useLogin';
import Text from '../../../shared/components/text/Text';
import {textTypes} from '../../../shared/components/text/textTypes';

const Login = () => {
  const {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleGoToCreateUser,
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
        <TouchableOpacity onPress={handleGoToCreateUser}>
          <Text
            margin="16px"
            type={textTypes.PARAGRAPH_SMALL_REGULAR}
            color={theme.colors.mainTheme.primary}>
            Cadastar Novo Usuário
          </Text>
        </TouchableOpacity>
        <Button
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
