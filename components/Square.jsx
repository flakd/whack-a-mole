import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles';
import useInterval from '../useInterval';

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const rndInt = randomIntFromInterval(2000, 20000);
  //console.log(rndInt);

  let timerId = null;

  useEffect(() => {
    if (props.isRoundOver) {
      console.log('round over');
      endRound();
      return;
    }
    if (!props.isGamePaused && !props.isRoundOver) {
      //this should in 60 secs from GameBoard.jsx
      //setTimeout(endGame, props.time * 1000);
      timerId = setInterval(() => {
        setMoleActive(true);
        console.log('about to play popOut sound');
        //props.playSound('popOut',1000);

        setTimeout(() => {
          setMoleActive(false);
        }, props.settings.moleActiveTime);
      }, rndInt);
    } else {
      return;
    }
  }, [props.isGamePaused, props.isRoundOver]);

  const endRound = () => {
    clearInterval(timerId);
    setMoleActive(false);
  };

  const onPressMole = () => {
    console.log('moleActive: ', moleActive);
    if (moleActive) {
      props.playSound('whack', 1000);
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
          moleActive && !props.isRoundOver
            ? require('../assets/mole.png')
            : require('../assets/hole.png')
        }
        style={moleActive ? styles.mole : styles.hole}
      ></Image>
    </TouchableOpacity>
  );
};

export default Square;
