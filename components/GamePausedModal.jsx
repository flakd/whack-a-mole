import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from '../styles';

const GamePausedModal = (props) => {
  return (
    <Modal
      id='gamePausedModal'
      visible={props.isModalVisible}
      transparent={true}
      style={styles.modal}
    >
      <View style={styles.modal}>
        <View style={styles.continueButtonBox}>
          <Text style={styles.paused}>GAME</Text>
          <Text style={styles.paused}>PAUSED</Text>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={() => {
              console.log('wtf');
              props.setIsGamePaused(false);
              props.setIsModalVisible(false);
            }}
          >
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GamePausedModal;
