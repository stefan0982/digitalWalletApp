import React                        from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Scan }               from "../screens";
import { Image }                    from "react-native";
import { COLORS, icons }  from "../constants";
import TabBarCustomButton from "../components/SignupComponents/TabBarCustomButton";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={ {
        showLabel: false,
        style    : {
          position       : 'absolute',
          bottom         : 0,
          left           : 0,
          right          : 0,
          backgroundColor: 'transparent',
          elevation      : 0
        },
      } }
    >
      <Tab.Screen
        name="Home"
        component={ Home }
        options={ {
          tabBarIcon  : ({ focused }) => (
            <Image
              source={ icons.more }
              resizeMode="contain"
              style={ {
                width    : 25,
                height   : 25,
                tintColor: focused ? COLORS.white : COLORS.secondary,
              } }
            />
          ),
          tabBarButton: props => (
            <TabBarCustomButton { ...props } />
          )
        } }
      />
      <Tab.Screen
        name="Scan"
        component={ Scan }
        options={ {
          tabBarIcon  : ({ focused }) => (
            <Image
              source={ icons.scan }
              resizeMode="contain"
              style={ {
                width    : 25,
                height   : 25,
                tintColor: focused ? COLORS.white : COLORS.secondary,
              } }
            />
          ),
          tabBarButton: props => (
            <TabBarCustomButton { ...props } />
          )
        } }
      />
      <Tab.Screen
        name="User"
        component={ Home }
        options={ {
          tabBarIcon  : ({ focused }) => (
            <Image
              source={ icons.user }
              resizeMode="contain"
              style={ {
                width    : 25,
                height   : 25,
                tintColor: focused ? COLORS.white : COLORS.secondary,
              } }
            />
          ),
          tabBarButton: props => (
            <TabBarCustomButton { ...props } />
          )
        } }
      />
    </Tab.Navigator>
  );
}

export default Tabs;
