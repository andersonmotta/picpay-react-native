import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PayButton from '~/components/PayButton';

import Home from '~/pages/Home';
import Wallet from '~/pages/Wallet';
import Pay from '~/pages/Pay';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Pay') {
              return <PayButton focused={focused} />;
            }

            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Wallet') {
              iconName = 'creditcard';
            } else if (route.name === 'Notifications') {
              iconName = 'notifications-none';
            } else if (route.name === 'Settings') {
              iconName = 'setting';
            }

            // You can return any component that you like here!
            if (route.name === 'Notifications') {
              return (
                <MaterialIcons name={iconName} size={size} color={color} />
              );
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#fbfbfb',
            borderTopColor: 'rgba(255, 255, 255, 0.1',
          },
          activeTintColor: '#000',
          inactiveTintColor: '#92929c',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={{ title: 'Carteira' }}
        />
        <Tab.Screen name="Pay" component={Pay} options={{ title: '' }} />

        <Tab.Screen
          name="Notifications"
          component={Pay}
          options={{ title: 'Notificações' }}
        />
        <Tab.Screen
          name="Settings"
          component={Pay}
          options={{ title: 'Ajustes' }}
        />
      </Tab.Navigator>
    </>
  );
}
