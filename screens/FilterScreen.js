import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch 
        trackColor={{true: Colors.primaryColor}}
        value={props.state} 
        onValueChange={props.onChange} 
      />
    </View>
  )
}


const FilterScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isDairyFree, setIsDairyFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setVegan] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      dairyFree: isDairyFree,
      vegan: isVegan,
      vegetarian: isVegetarian
  };
  console.log(appliedFilters)
  }, [isGlutenFree, isDairyFree, isVegan, isVegetarian]);

  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch 
        label='Gluten-free' 
        state={isGlutenFree} 
        onChange={newValue => setIsGlutenFree(newValue)} 
      />
      <FilterSwitch 
        label='Dairy-free' 
        state={isDairyFree} 
        onChange={newValue => setIsDairyFree(newValue)} 
      />
      <FilterSwitch 
        label='Vegan' 
        state={isVegan} 
        onChange={newValue => setVegan(newValue)} 
      />
      <FilterSwitch 
        label='Vegetarian' 
        state={isVegetarian} 
        onChange={newValue => setIsVegetarian(newValue)} 
      />
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filter Meals',
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
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title='Save'
          iconName='ios-save' 
          onPress={navData.navigation.getParam('save')}
          iconSize={23} 
        />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '60%',
    marginVertical: 10
  }
});

export default FilterScreen;