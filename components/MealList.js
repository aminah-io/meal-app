import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = props => {
  const renderMealItem = itemData => {
    return <MealItem 
      title={itemData.item.title} 
      onSelectMeal={() => {
        props.navigation.navigate({
          routeName: 'MealDetails', 
          params: {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title
        }});
      }} 
      duration={itemData.item.duration} 
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      imageUrl={itemData.item.imageUrl}
    />;
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MealList;