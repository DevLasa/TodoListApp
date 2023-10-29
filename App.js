import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import MainApp from './src/screens/MainApp';

export default function App() {
  return (
    <Provider store={configureStore}>
      <StatusBar style="light" />
      <MainApp />
    </Provider>
  );
}
