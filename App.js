import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import Home from "./components/Home";
import Sobre from "./components/Sobre";


const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor: '#eab990',
          },

          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },

          tabBarActiveBackgroundColor: '#eab990',

          tabBarInactiveTintColor: '#f00',

          tabBarActiveTintColor: '#150b13',

          tabBarLabelPosition: 'beside-icon',
        }}
        >
        <Tabs.Screen 
        name="Home" 
        component={Home} 
        options={
          {
            tabBarIcon: ({ color, size }) => (
              <Entypo name="Perfil" color={ color } size={ size } />
            )
          }
        }
        />
        <Tabs.Screen 
        name="Sobre" 
        component={Sobre}
        options={
          {
            tabBarIcon: ({ color, size }) => (
              <Entypo name="circle-with-plus" color={ color } size={ size } />
            )
          }
        }
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


