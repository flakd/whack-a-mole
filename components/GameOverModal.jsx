import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from '../styles';

const GameOverModal = (props) => {
  return (
    <Modal
      id='gameOverModal'
      visible={props.isGameOver}
      transparent={true}
      style={styles.modal}
    >
      <View style={styles.modal}>
        <View style={styles.continueButtonBox}>
          <Text style={styles.paused}>GAME</Text>
          <Text style={styles.paused}>OVER</Text>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={() => {
              console.log('Game Over Pressed');
              props.setIsGameOver(false);
              //props.setTimeLeft(props.startTime);
              props.setRoundNum(1);
            }}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GameOverModal;
