import React                                 from "react";
import { createStackNavigator }              from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Signup }                            from "./screens";
import StackNavigator
                                             from "@react-navigation/stack/src/navigators/createStackNavigator";
import Tabs                                  from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Signup'}
      >
        <Stack.Screen name="Signup" component={Signup}/>

        {/*Tabs*/}

        <Stack.Screen name="Home" component={Tabs} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
