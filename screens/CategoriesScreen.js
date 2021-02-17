import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity style={styles.grid} 
        onPress={() => {
          props.navigation.navigate('Category Meals');
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2} 
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  grid: {
    // flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;