import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './modules/login';
import Home from './modules/home';
import {MenuURL} from './shared/enums/MenuURL.enum';
import Splash from './modules/splash';
import CreateUser from './modules/createUser';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MenuURL.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={MenuURL.LOGIN}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={MenuURL.HOME}
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={MenuURL.CREATE_USER}
          component={CreateUser}
          options={{title: 'Cadastrar Novo Usuário'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
