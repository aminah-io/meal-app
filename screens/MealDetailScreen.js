import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Button, 
  ScrollView,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealDetails from '../components/MealDetails';

import { MEALS } from '../data/dummy-data';

import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
      <Text style={styles.title}>Instructions</Text>
        {selectedMeal.instructions.map(step => (
        <ListItem key={step}> • {step}</ListItem>))}
      <View>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <Button title='Go Back to Categories' onPress={() => {
          props.navigation.popToTop();
        }} 
       />
      </View>
    </ScrollView>
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
  title: {
    fontSize: 23,
    fontFamily: 'open-sans-bold',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 5
  }
});

export default MealDetailScreen;