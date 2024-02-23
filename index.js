// index.js
import { AppRegistry } from 'react-native';
import App from './src/App'; // Correct the path if necessary
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// console.log('appname' , name)

const RootComponent = () => (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );

AppRegistry.registerComponent(appName, () => App);