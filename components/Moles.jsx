import React from 'react';
import {View, Platform} from 'react-native';
import Square from './Square';
import styles from '../styles';

const Moles = (props) => {
  const squareArray = Array(12);
  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i] = i;
  }
  return (
    <View style={Platform.OS === 'web' ? styles.gameWeb : styles.game}>
      {squareArray.map((square) => (
        <Square
          key={square}
          id={square}
          //time={startTime}
          isGameOver={props.isGameOver}
          setIsGameOver={props.setIsGameOver}
          //isGamePaused={isGamePaused}
          addToScore={props.addToScore}
        ></Square>
      ))}
    </View>
  );
};

export default Moles;
