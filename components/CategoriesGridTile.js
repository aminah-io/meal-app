import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TouchableNativeFeedback, Platform } from 'react-native';

const CategoriesGridTile = props => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.grid}>
      <TouchableComponent 
        style={{flex: 1}}
        onPress={props.onSelect}
      >
        <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    margin: 15,
    height: 150
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoriesGridTile;