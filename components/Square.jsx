import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  //const [isGameOver, setIsGameOver] = useState(false);

  const randomTime = Math.random() * 20000;

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const rndInt = randomIntFromInterval(2000, 20000);
  //console.log(rndInt);

  let timerId = null;

  useEffect(() => {
    if (!props.isGamePaused) {
      timerId = setInterval(() => {
        setMoleActive(true);
        setTimeout(() => {
          setMoleActive(false);
        }, 800);
      }, rndInt);
      if (props.isGameOver) endGame();
      //this should in 60 secs from GameBoard.jsx
      //setTimeout(endGame, props.time * 1000);
    } else {
      return;
    }
  }, [props.isGamePaused, props.isGameOver]);

  const endGame = () => {
    clearInterval(timerId);
    setMoleActive(false);
    //props.setIsGameOver(true);
    //setIsGameOver(true);
  };

  const onPressMole = () => {
    console.log('moleActive: ', moleActive);
    if (moleActive) {
      props.addToScore();
      setMoleActive(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressMole}
      disabled={!moleActive}
    >
      <Image
        source={
          moleActive && !props.isGameOver
            ? require('../assets/mole.png')
            : require('../assets/hole.png')
        }
        style={moleActive ? styles.mole : styles.hole}
      ></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hole: {
    flex: 1,
    width: 80,
    height: 80,
    margin: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
  mole: {
    flex: 1,
    width: 80,
    height: 80,
    margin: 10,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 1},
  },
});
export default Square;
