import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Square = () => {
  return (
    <View style={styles.square}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 100,
    minHeight: 100,
    margin: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'red',
  },
});
export default Square;
