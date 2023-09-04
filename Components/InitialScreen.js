import Categories from "./Categories";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const InitialScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator initialRouteName="HomeScreen">
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="appstore1" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default InitialScreen;
