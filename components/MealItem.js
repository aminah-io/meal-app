import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, } from 'react-native';

import Colors from '../constants/Colors';

import DefaultText from './DefaultText';

const MealItem = props => {

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
              <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#eee'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'open-sans-bold',
    color: '#fff',
    backgroundColor: Colors.mealTitleBGColor,
    padding: 2,

  }
});

export default MealItem;