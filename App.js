import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import SingleNewsScreen from "./Components/SingleNews";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "NEW READS" }}
        />
        <Stack.Screen
          name="SingleNews"
          component={SingleNewsScreen}
          options={{ title: "NEW READS" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
