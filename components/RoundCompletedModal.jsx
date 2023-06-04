import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styles from '../styles';

const RoundCompletedModal = (props) => {
  return (
    <Modal
      id='roundOverModal'
      visible={props.isRoundOver}
      transparent={true}
      style={styles.modal}
    >
      <View style={styles.modal}>
        <View style={styles.modalButtonBox}>
          <Text style={styles.paused}>Round #{props.roundNum}</Text>
          <Text style={styles.paused}>Completed</Text>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'green'}]}
            onPress={() => {
              console.log('Round Over Pressed');
              props.setIsRoundOver(false);
              props.nextRound();
              //props.setTimeLeft(props.startTime);
            }}
          >
            <Text style={styles.buttonText}>
              PLAY ROUND #{props.roundNum + 1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RoundCompletedModal;
