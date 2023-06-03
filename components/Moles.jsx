import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import Square from './Square';
//import styles from '../styles';

const Moles = (props) => {
  const squareArray = Array(props.settings.numMoles);
  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i] = i;
  }
  const styles = StyleSheet.create({
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 280,
      position: 'absolute',
    },

    gameWeb: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: props.settings.gameWidth,
      justifyContent: 'center',
      //alignItems: 'center',
      alignSelf: 'center',
      //marginTop: 280,
      //position: 'absolute',
    },
  });

  return (
    <View style={Platform.OS === 'web' ? styles.gameWeb : styles.game}>
      {squareArray.map((square, index, array) => (
        <Square
          key={index}
          id={index}
          //time={startTime}
          isGameOver={props.isGameOver}
          setIsGameOver={props.setIsGameOver}
          //isGamePaused={isGamePaused}
          addToScore={props.addToScore}
          playSound={props.playSound}
          settings={props.settings}
        ></Square>
      ))}
    </View>
  );
};

export default Moles;
