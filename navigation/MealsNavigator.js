import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({ //for screens/pages that are connected with a forward/backward flow
  Categories: CategoriesScreen, //Short form
  CategoryMeals: { //Long form
    screen: CategoryMealsScreen
  },
  MealDetails: MealDetailScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  MealDetail: MealDetailScreen
  }, {
  defaultNavigationOptions: defaultStackNavOptions
  });

const tabScreenConfig = {
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
      },
      tabBarColor: Colors.primaryColor
    }},
  Favorites: {
    screen: FavNavigator,
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
      },
      tabBarColor: Colors.accentColor
    }}
};

const MealsFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: '#fff',
    shifting: true
  }) : 
  createBottomTabNavigator(
    tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
});

const FilterNavigator = createStackNavigator(
  {
  Filter: FilterScreen
  },
  {
    navigationOptions: {
      drawerLabel: 'Filter Meals'
    }
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator({
  MealsFavs: {
    screen: MealsFavTabNavigator, 
    navigationOptions: {
      drawerLabel: 'Meals'
  }},
  Filter: FilterNavigator
});

export default createAppContainer(MainNavigator);