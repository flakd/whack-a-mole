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
        <View style={styles.modalButtonBox}>
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
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={() => {
              console.log('wtf');
              props.setIsModalVisible(false);
              props.setIsGameOver(true);
            }}
          >
            <Text style={styles.buttonText}>QUIT GAME</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GamePausedModal;
