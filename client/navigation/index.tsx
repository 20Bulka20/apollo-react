import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AuthSignUp from '../screens/Auth/SignUp';
import AuthLogin from '../screens/Auth/Login';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/Tabs/TabOneScreen';
import TabTwoScreen from '../screens/Tabs/TabTwoScreen';
import TabThreeScreen from '../screens/Tabs/TabThreeScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthSignUp" component={AuthSignUp} options={{ headerShown: false }} />
      <Stack.Screen name="AuthLogin" component={AuthLogin} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="RootTab"
      tabBarOptions={{ showLabel: false }}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="appstore-o" color={color} size={24} />,
          headerShown: false 
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="shoppingcart" color={color} size={24} />,
          headerShown: false 
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={24}/>,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

