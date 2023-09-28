import * as React from "react";
import LoginScreen from "./src/login";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/login/register";
import ForgetPassword from "./src/login/forgetpassword";
import HomeScreen from "./src/home/index";
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import About from "./src/about";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerPressOpacity: 5,
            headerLeft: () => (
              <Ionicons
                name="menu"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 25,
                }}
                size={20}
              />
            ),
            headerShown: true,
            title: "Pensador",
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="share"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
                size={20}
              />
            ),
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          options={{ headerShown: false }}
          component={ForgetPassword}
        />

        <Stack.Screen
          name="About"
          options={{
            headerShown: true,
            title: "Pensador",
            headerTitleAlign: "center",
            headerRight: () => (
              <Ionicons
                name="share"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 20,
                }}
                size={20}
              />
            ),
          }}
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
