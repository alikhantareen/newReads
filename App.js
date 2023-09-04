import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import SingleNewsScreen from "./Components/SingleNews";
import NewsByCategory from "./Components/NewsByCategory";
import InitialScreen from "./Components/InitialScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{ title: "NEW READS", headerShown: false }}
        />
        <Stack.Screen
          name="SingleNews"
          component={SingleNewsScreen}
          options={{ title: "NEW READS" }}
        />
        <Stack.Screen
          name="NewsByCategory"
          component={NewsByCategory}
          options={{ title: "NEW READS" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
