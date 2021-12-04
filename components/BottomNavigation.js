import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/home.svg';
import Home from '../components/LandingPage';

const BottomNavigation = () => {
    const Bottomtabs = createBottomTabNavigator();

    const changeIconColor = (focused) => {
        return focused == true ? '#9AB87A' : '#FFFFFF';
    };

    return (
      <Bottomtabs.Navigator tabBarOptions={{
          style: {
              height: 50,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              paddingBottom: 5,
              paddingTop: 5
          }
      }}>
          <Bottomtabs.Screen name ="Home" component={Home}
          options={{
              tabBarIcon: ({ focused }) => (
                    <HomeIcon/ >
                )
          }}
         />
         <Bottomtabs.Screen name ="Favorites" component={Home}
          options={{
              tabBarIcon: ({ focused }) => (
                    <HomeIcon/ >
                )
          }}
         />
      </Bottomtabs.Navigator> 
    )
};

export default BottomNavigation;
