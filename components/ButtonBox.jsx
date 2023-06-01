import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles';

const ButtonBox = (props) => {
  return (
    <View style={styles.buttonBox}>
      <TouchableOpacity
        style={[
          styles.button,
          props.isGamePaused
            ? {backgroundColor: '#5fb8e0'}
            : {backgroundColor: 'blue'},
        ]}
        disabled={props.isGamePaused}
        onPress={() => {
          props.setIsGamePaused(true);
          props.setIsModalVisible(true);
        }}
      >
        <Text
          style={[
            styles.buttonText,
            props.isGamePaused ? {color: '#92e8e0'} : {color: 'white'},
          ]}
        >
          PAUSE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBox;
