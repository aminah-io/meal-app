import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen</Text>
      <Text style={styles.heading}>{selectedCategory.title}</Text>
      <Button title="Go to Details" onPress={() => {
        props.navigation.navigate('Meal Details')
      }} />
      <Button title='Go Back' onPress={() => {
        props.navigation.goBack()
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});

export default CategoryMealScreen;