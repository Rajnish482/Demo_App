import React from 'react';
import {View, Text} from 'react-native';
import Calender from '../TabNavigation/Calender';
import Home from '../TabNavigation/Home';
import New from '../TabNavigation/New';
import profile from '../TabNavigation/profile';
import Post from '../TabNavigation/Post';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'black', //color you want to change
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons name="home" size={26} color={focused ? 'white' : 'grey'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="calendar-range-outline"
                size={26}
                color={focused ? 'white' : 'grey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="checkbox-marked-outline"
                size={26}
                color={focused ? 'white' : 'grey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="newspaper-variant-outline"
                size={26}
                color={focused ? 'white' : 'grey'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Icons
                name="account"
                size={26}
                color={focused ? 'white' : 'grey'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
