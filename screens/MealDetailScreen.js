import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';



const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const renderMealDetails = itemData => {
    return <MealDetails 
      title={itemData.item.title}
      imageUrl={itemData.item.imageUrl}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      duration={itemData.item.duration}
      ingredients={itemData.item.ingredients}
      instructions={itemData.item.instructions}
      complexity={itemData.item.complexity}
      isGlutenFree={itemData.item.isGlutenFree}
      isVegan={itemData.item.isVegan}
      isVegetarian={itemData.item.isVegetarian}
      isDairyFree={itemData.item.isDairyFree}
    />
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <Button title='Go Back to Categories' onPress={() => {
        props.navigation.popToTop();
      }} />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title='Favorite' 
          iconName='ios-star' 
          onPress={() => {
            console.log('mark as fave');
          }} 
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;