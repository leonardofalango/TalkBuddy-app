import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import MainPage from './pages/MainPage';
import './global.css';
import { ForgotPassword } from './pages/ForgotPassword';
import { ShowLastMessages } from './components/ShowLastMessages';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{headerShown: false}} name="main" component={MainPage} />
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="cadastro" component={Cadastro} />
        <Stack.Screen options={{headerShown: true}} name="forgotPassword" component={ ForgotPassword } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}