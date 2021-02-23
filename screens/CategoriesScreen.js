import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesGridTile from '../components/CategoriesGridTile';

import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoriesGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals', 
            params: {
              categoryId: itemData.item.id
            }
          })}
        }
       />
    );
  };

  return (
    <FlatList 
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2} 
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Meal Categories',
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default CategoriesScreen;