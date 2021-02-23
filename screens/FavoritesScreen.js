import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'My Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Menu" 
          iconName='ios-menu' 
          onPress={() => {navData.navigation.toggleDrawer()
          }} 
          iconSize={25} 
        />
      </HeaderButtons>
    )
  }
};

export default FavoritesScreen;