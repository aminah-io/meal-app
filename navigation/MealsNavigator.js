import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({ //for screens/pages that are connected with a forward/backward flow
  Categories: CategoriesScreen, //Short form
  CategoryMeals: { //Long form
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {
    screen: MealsNavigator, 
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons 
            name='ios-restaurant' 
            size={25} 
            color={tabInfo.tintColor} 
          />
        );
      }
    }},
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'My Favorites!',
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons 
            name='ios-star' 
            size={25} 
            color={tabInfo.tintColor} 
          />
        );
      }
    }}
},
{
  tabBarOptions: {
    activeTintColor: Colors.accentColor
  }
});

export default createAppContainer(MealsFavTabNavigator);