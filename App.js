import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'twrnc'
import EatScreen from './screens/EatScreen';


export default function App() {

  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          {/* <View>
            <HomeScreen/>
          </View> */}
          <Stack.Navigator>
            <Stack.Screen
              name='Homescreen'
              component={HomeScreen}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={
                {
                  headerShown: false,
                }
              }
            />
            <Stack.Screen
              name='EatScreen'
              component={EatScreen}
              options={
                {
                  headerShown: false,
                }
              }
            />
                        

          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
