import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import DefaultText from '../components/DefaultText'

const FavoritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>There are no favorite meals saved. Start adding your faves!</DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;